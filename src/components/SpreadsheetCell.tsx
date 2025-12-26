import { useEffect, useRef, useState } from 'react';
import { useSpreadsheetCell } from '../hooks/useSpreadsheetCell';

interface SpreadsheetCellProps {
  initialValue?: string;
  cellId: string;
  row: number;
  col: number;
  cellType?: 'text' | 'number' | 'select';
  min?: number;
  max?: number;
  step?: number;
  selectOptions?: Array<{ value: string; label: string }>;
  disabled?: boolean;
  onValueChange?: (value: string) => void;
  onFocus?: () => void;

  padding?: string;
  width?: string;
  height?: string;
  insetPadding?: string;
  bgColorInactive?: string;
  bgColorActive?: string;
  bgColorDisabled?: string;
  ringColorInactive?: string;
  ringColorActive?: string;
  ringWidthInactive?: string;
  ringWidthActive?: string;
  hoverRingColor?: string;
  selectedBgColor?: string;
  selectedRingColor?: string;
  selectedRingWidth?: string;
  multiSelectBgColor?: string;
  multiSelectRingColor?: string;
  multiSelectRingWidth?: string;
  copiedBgColor?: string;
  copiedOutlineColor?: string;
}

export default function SpreadsheetCell({
  initialValue = '',
  cellId,
  row,
  col,
  cellType = 'text',
  selectOptions = [],
  min,
  max,
  step = 1,
  disabled = false,
  onValueChange,
  onFocus,

  padding = 'px-2 py-1',
  width = 'w-40',
  height = 'h-8',
  insetPadding = 'px-2',
  bgColorInactive = 'bg-white',
  bgColorActive = 'bg-white',
  bgColorDisabled = 'bg-gray-100',
  ringColorInactive = 'ring-gray-200',
  ringColorActive = 'inset-ring-blue-600',
  ringWidthInactive = 'inset-ring-[0]',
  ringWidthActive = 'inset-ring-1',
  hoverRingColor = 'hover:ring-gray-300',
  selectedBgColor = 'bg-blue-50',
  selectedRingColor = 'inset-ring-blue-500',
  selectedRingWidth = 'inset-ring-3',
  multiSelectBgColor = 'bg-blue-100',
  multiSelectRingColor = 'ring-blue-300',
  multiSelectRingWidth = 'ring-1',
  copiedBgColor = 'bg-green-50',
  copiedOutlineColor = 'outline-green-500',
}: SpreadsheetCellProps) {
  const [value, setValue] = useState<string>(initialValue);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const selectRef = useRef<HTMLSelectElement | null>(null);
  const cellRef = useRef<HTMLDivElement | null>(null);
  const [shouldSelectAll, setShouldSelectAll] = useState(true);

  const {
    selectedCell,
    selectCell,
    editingCell,
    startEditing,
    stopEditing,
    registerCell,
    unregisterCell,
    navigateCell,
    registerCellValue,
    getCopiedValue,
    getCopiedData,
    clearCopiedCell,
    isInSelection,
    isInCopiedRange,
    isDragging,
    dragStartCell,
    startDragging,
    updateDragSelection,
    stopDragging,
    getSelectedRange
    } = useSpreadsheetCell();

  const isSelected = selectedCell === cellId;
  const isEditing = editingCell === cellId;
  const isCopied = isInCopiedRange(cellId);
  const inMultiSelection = isInSelection(cellId) && !isSelected;

  // Registrar la celda al montar
  useEffect(() => {
    registerCell(cellId, row, col, cellRef.current ?? undefined);
    return () => unregisterCell(cellId, cellRef.current ?? undefined);
  }, [cellId, row, col]);

  // Registrar el valor de la celda cada vez que cambie
  useEffect(() => {
    registerCellValue(cellId, value);
  }, [cellId, value]);

  // Sincronizar con initialValue
  useEffect(() => {
    if (!isEditing) {
      setValue(initialValue);
    }
  }, [initialValue, isEditing]);

  // Auto-focus cuando entra en modo edición
  useEffect(() => {
    if (isEditing && !disabled) {
      onFocus?.();
      if ((cellType === 'text' || cellType === 'number') && inputRef.current) {
        inputRef.current.focus();
        if (shouldSelectAll) {
          inputRef.current.select();
        }
      } else if (cellType === 'select' && selectRef.current) {
        selectRef.current.focus();
      }
    }
  }, [isEditing, cellType, disabled]);

  // Listener para empezar a escribir y paste cuando está seleccionada
  useEffect(() => {
    if (!isSelected || isEditing || disabled) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
        e.preventDefault();
        setShouldSelectAll(false);
        startEditing(cellId);
        setValue(e.key);
        onValueChange?.(e.key);
      }
    };

    const handleKeyDown = async (e: KeyboardEvent) => {
      // Paste con Ctrl+V o Cmd+V
      if ((e.ctrlKey || e.metaKey) && e.key === 'v') {
        e.preventDefault();

        // Intentar pegar datos copiados del spreadsheet
        const copiedData = getCopiedData();

        if (copiedData) {
          const { values } = copiedData;
          const selectedRange = getSelectedRange();

          // Si hay un rango seleccionado
          if ((selectedRange && selectedRange.rows > 1) || (selectedRange && selectedRange.cols > 1)) {
            const { minRow, minCol, rows: selectedRows, cols: selectedCols } = selectedRange;
            const copiedRows = values.length;
            const copiedCols = values[0]?.length || 0;

            const pasteEvent = new CustomEvent('spreadsheet-paste-range', {
              detail: {
                startRow: minRow,
                startCol: minCol,
                targetRows: selectedRows,
                targetCols: selectedCols,
                copiedRows,
                copiedCols,
                values: values,
              },
            });
            window.dispatchEvent(pasteEvent);
          } else {
            // Pegar desde una celda específica
            const [currentRow, currentCol] = cellId.split('-').map(Number);

            const pasteEvent = new CustomEvent('spreadsheet-paste', {
              detail: {
                startRow: currentRow,
                startCol: currentCol,
                values: values,
              },
            });
            window.dispatchEvent(pasteEvent);
          }

          clearCopiedCell();
          return;
        }

        // Si no hay datos copiados del spreadsheet, intentar del clipboard
        try {
          const clipboardText = await navigator.clipboard.readText();

          if (clipboardText) {
            const hasMultipleCells = clipboardText.includes('\t') || clipboardText.includes('\n');

            if (hasMultipleCells) {
              const rows = clipboardText.split('\n').map((row) => row.split('\t'));
              const [currentRow, currentCol] = cellId.split('-').map(Number);
              const selectedRange = getSelectedRange();

              if (selectedRange && (selectedRange.rows > 1 || selectedRange.cols > 1)) {
                // Pegar en rango seleccionado
                const { minRow, minCol, rows: selectedRows, cols: selectedCols } = selectedRange;
                const copiedRows = rows.length;
                const copiedCols = rows[0]?.length || 0;

                const pasteEvent = new CustomEvent('spreadsheet-paste-range', {
                  detail: {
                    startRow: minRow,
                    startCol: minCol,
                    targetRows: selectedRows,
                    targetCols: selectedCols,
                    copiedRows,
                    copiedCols,
                    values: rows,
                  },
                });
                window.dispatchEvent(pasteEvent);
              } else {
                // Pegar desde celda específica
                const pasteEvent = new CustomEvent('spreadsheet-paste', {
                  detail: {
                    startRow: currentRow,
                    startCol: currentCol,
                    values: rows,
                  },
                });
                window.dispatchEvent(pasteEvent);
              }
            } else {
              // Paste simple de una sola celda
              setValue(clipboardText);
              onValueChange?.(clipboardText);
            }
          }
        } catch (error) {
          console.error('Error al pegar del clipboard:', error);
        }

        return;
      }

      if (e.key === 'Enter' && !isEditing) {
        e.preventDefault();
        e.stopPropagation();
        setShouldSelectAll(true);
        startEditing(cellId);
        return;
      }

      if (e.key === 'Delete' && !isEditing) {
        e.preventDefault();
        e.stopPropagation();
        setValue('');
        onValueChange?.('');
      }
    };

    window.addEventListener('keypress', handleKeyPress);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keypress', handleKeyPress);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isSelected, isEditing, cellId, stopEditing, disabled, getCopiedValue, getCopiedData, clearCopiedCell, row, col]);

  // Listener para eventos de paste múltiple
  useEffect(() => {
    const handlePaste = (e: Event) => {
      const customEvent = e as CustomEvent<{
        startRow: number;
        startCol: number;
        values: string[][];
      }>;

      const { startRow, startCol, values } = customEvent.detail;

      // Verificar si esta celda está dentro del rango de pegado
      for (let r = 0; r < values.length; r++) {
        for (let c = 0; c < values[r].length; c++) {
          const targetRow = startRow + r;
          const targetCol = startCol + c;
          const targetCellId = `${targetRow}-${targetCol}`;

          if (targetCellId === cellId) {
            setValue(values[r][c]);
            onValueChange?.(values[r][c]);
            return;
          }
        }
      }
    };

    const handlePasteRange = (e: Event) => {
      const customEvent = e as CustomEvent<{
        startRow: number;
        startCol: number;
        targetRows: number;
        targetCols: number;
        copiedRows: number;
        copiedCols: number;
        values: string[][];
      }>;

      const { startRow, startCol, targetRows, targetCols, copiedRows, copiedCols, values } = customEvent.detail;

      // Verificar si esta celda está dentro del rango de pegado
      for (let r = 0; r < targetRows; r++) {
        for (let c = 0; c < targetCols; c++) {
          const targetRow = startRow + r;
          const targetCol = startCol + c;
          const targetCellId = `${targetRow}-${targetCol}`;

          if (targetCellId === cellId) {
            // Usar módulo para repetir el patrón
            const sourceRow = r % copiedRows;
            const sourceCol = c % copiedCols;
            const value = values[sourceRow]?.[sourceCol] || '';

            setValue(value);
            onValueChange?.(value);
            return;
          }
        }
      }
    };

    window.addEventListener('spreadsheet-paste', handlePaste);
    window.addEventListener('spreadsheet-paste-range', handlePasteRange);

    return () => {
      window.removeEventListener('spreadsheet-paste', handlePaste);
      window.removeEventListener('spreadsheet-paste-range', handlePasteRange);
    };
  }, [cellId, onValueChange]);

  const handleClick = (e: React.MouseEvent) => {
    if (!isEditing && !disabled) {
      if (!isDragging) {
        selectCell(cellId, e.shiftKey);
      }
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!disabled && !isEditing) {
      if (!e.shiftKey) {
        e.preventDefault();
        startDragging(cellId);
      }
    }
  };

  const handleMouseEnter = () => {
    if (dragStartCell && !disabled && !isEditing) {
      updateDragSelection(cellId);
    }
  };

  const handleMouseUp = () => {
    if (isDragging || dragStartCell) {
      stopDragging();
    }
  };

  const handleDoubleClick = () => {
    if (!disabled) {
      startEditing(cellId);
    }
  };

  const handleBlur = () => {
    stopEditing();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    const newValue = e.target.value;
    setValue(newValue);
    onValueChange?.(newValue);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (disabled) return;
    const newValue = e.target.value;
    setValue(newValue);
    onValueChange?.(newValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      if (!isEditing) {
        stopEditing();
      } else {
        setValue(initialValue);
        stopEditing();
        onValueChange?.(initialValue);
        navigateCell('down');
      }
      return;
    }

    if (e.key === 'Escape') {
      setValue(initialValue);
      stopEditing();
      onValueChange?.(initialValue);
      return;
    }

    if (e.key === 'Tab' && e.shiftKey) {
      e.preventDefault();
      setValue(initialValue);
      stopEditing();
      onValueChange?.(initialValue);
      setTimeout(() => {
        navigateCell('left');
      }, 100);
      return;
    }

    if (e.key === 'Tab') {
      e.preventDefault();
      setValue(initialValue);
      stopEditing();
      onValueChange?.(initialValue);
      setTimeout(() => {
        navigateCell('right');
      }, 100);
      return;
    }

    if (['ArrowUp', 'ArrowDown'].includes(e.key)) {
      e.preventDefault();
      const direction = e.key.replace('Arrow', '').toLowerCase() as 'up' | 'down';
      setValue(initialValue);
      stopEditing();
      onValueChange?.(initialValue);
      setTimeout(() => {
        navigateCell(direction);
      }, 100);
      return;
    }
  };

  const renderEditMode = () => {
    const inputClassName = `w-full h-full outline-none ${bgColorActive} ${insetPadding} disabled:${bgColorDisabled} disabled:cursor-not-allowed`;

    if (cellType === 'select') {
      return (
        <select
          ref={selectRef}
          value={value}
          onChange={handleSelectChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          className={inputClassName}
        >
          <option value="">Seleccionar...</option>
          {selectOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
    }

    if (cellType === 'number') {
      return (
        <input
          ref={inputRef}
          type="number"
          value={value}
          onChange={handleInputChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          className={inputClassName}
        />
      );
    }

    return (
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={handleInputChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        className={inputClassName}
      />
    );
  };

  const getCellClasses = () => {
    const classes = ['min-w-40 max-w-full min-h-full transition-all', padding, width, height];

    if (disabled) {
      classes.push(bgColorDisabled, 'cursor-not-allowed opacity-60');
    } else {
      // Cursor durante drag
      if (isDragging || dragStartCell) {
        classes.push('cursor-cell');
      } else {
        classes.push('cursor-pointer');
      }

      if (isEditing) {
        classes.push(bgColorActive, ringWidthActive, ringColorActive, 'inset-shadow-lg inset-shadow-cyan-600');
      } else if (isSelected) {
        classes.push(selectedBgColor, selectedRingWidth, selectedRingColor);
      } else if (inMultiSelection) {
        classes.push(multiSelectBgColor, multiSelectRingWidth, multiSelectRingColor);
      } else {
        classes.push(bgColorInactive, ringWidthInactive, ringColorInactive);
      }

      if (isCopied && !isEditing) {
        classes.push('outline-2 outline-dashed', copiedOutlineColor, copiedBgColor);
      }

      if (!isEditing && !isDragging && !dragStartCell) {
        classes.push(hoverRingColor);
      }
    }

    return classes.join(' ');
  };

  return (
    <div
      ref={cellRef}
      className={getCellClasses()}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseEnter={handleMouseEnter}
      onMouseUp={handleMouseUp}
      onDoubleClick={handleDoubleClick}
    >
      {isEditing && !disabled ? renderEditMode() : <span className={`select-none ${disabled ? 'text-gray-900' : ''}`}>{value || ''}</span>}
    </div>
  );
}
