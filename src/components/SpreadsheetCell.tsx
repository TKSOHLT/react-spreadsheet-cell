import { useEffect, useRef, useState } from 'react';
import { useSpreadsheetCell } from '../hooks/useSpreadsheetCell';

type ColorScheme = 'blue' | 'purple' | 'green' | 'red' | 'gray' | 'orange' | 'pink' | 'cyan';

interface ColorConfig {
  // Estados base
  bgInactive: string;
  bgActive: string;
  bgDisabled: string;
  ringInactive: string;
  ringActive: string;
  
  // Estados de selección
  selectedBg: string;
  selectedRing: string;
  
  // Multi-selección
  multiSelectBg: string;
  multiSelectRing: string;
  
  // Copiado
  copiedBg: string;
  copiedOutline: string;
  
  // Hover
  hoverRing: string;
  
  // Shadow en edición
  editShadow: string;
}

const colorSchemes: Record<ColorScheme, ColorConfig> = {
  blue: {
    bgInactive: 'bg-white',
    bgActive: 'bg-white',
    bgDisabled: 'bg-gray-100',
    ringInactive: 'ring-gray-200',
    ringActive: 'inset-ring-blue-600',
    selectedBg: 'bg-blue-50',
    selectedRing: 'inset-ring-blue-500',
    multiSelectBg: 'bg-blue-100',
    multiSelectRing: 'ring-blue-300',
    copiedBg: 'bg-blue-50',
    copiedOutline: 'outline-blue-500',
    hoverRing: 'hover:ring-gray-300',
    editShadow: 'inset-shadow-blue-600',
  },
  purple: {
    bgInactive: 'bg-white',
    bgActive: 'bg-white',
    bgDisabled: 'bg-gray-100',
    ringInactive: 'ring-gray-200',
    ringActive: 'inset-ring-purple-600',
    selectedBg: 'bg-purple-50',
    selectedRing: 'inset-ring-purple-500',
    multiSelectBg: 'bg-purple-100',
    multiSelectRing: 'ring-purple-300',
    copiedBg: 'bg-purple-50',
    copiedOutline: 'outline-purple-500',
    hoverRing: 'hover:ring-gray-300',
    editShadow: 'inset-shadow-purple-600',
  },
  green: {
    bgInactive: 'bg-white',
    bgActive: 'bg-white',
    bgDisabled: 'bg-gray-100',
    ringInactive: 'ring-gray-200',
    ringActive: 'inset-ring-green-600',
    selectedBg: 'bg-green-50',
    selectedRing: 'inset-ring-green-500',
    multiSelectBg: 'bg-green-100',
    multiSelectRing: 'ring-green-300',
    copiedBg: 'bg-green-50',
    copiedOutline: 'outline-green-500',
    hoverRing: 'hover:ring-gray-300',
    editShadow: 'inset-shadow-green-600',
  },
  red: {
    bgInactive: 'bg-white',
    bgActive: 'bg-white',
    bgDisabled: 'bg-gray-100',
    ringInactive: 'ring-gray-200',
    ringActive: 'inset-ring-red-600',
    selectedBg: 'bg-red-50',
    selectedRing: 'inset-ring-red-500',
    multiSelectBg: 'bg-red-100',
    multiSelectRing: 'ring-red-300',
    copiedBg: 'bg-red-50',
    copiedOutline: 'outline-red-500',
    hoverRing: 'hover:ring-gray-300',
    editShadow: 'inset-shadow-red-600',
  },
  gray: {
    bgInactive: 'bg-white',
    bgActive: 'bg-white',
    bgDisabled: 'bg-gray-100',
    ringInactive: 'ring-gray-200',
    ringActive: 'inset-ring-gray-600',
    selectedBg: 'bg-gray-50',
    selectedRing: 'inset-ring-gray-500',
    multiSelectBg: 'bg-gray-100',
    multiSelectRing: 'ring-gray-300',
    copiedBg: 'bg-gray-50',
    copiedOutline: 'outline-gray-500',
    hoverRing: 'hover:ring-gray-300',
    editShadow: 'inset-shadow-gray-600',
  },
  orange: {
    bgInactive: 'bg-white',
    bgActive: 'bg-white',
    bgDisabled: 'bg-gray-100',
    ringInactive: 'ring-gray-200',
    ringActive: 'inset-ring-orange-600',
    selectedBg: 'bg-orange-50',
    selectedRing: 'inset-ring-orange-500',
    multiSelectBg: 'bg-orange-100',
    multiSelectRing: 'ring-orange-300',
    copiedBg: 'bg-orange-50',
    copiedOutline: 'outline-orange-500',
    hoverRing: 'hover:ring-gray-300',
    editShadow: 'inset-shadow-orange-600',
  },
  pink: {
    bgInactive: 'bg-white',
    bgActive: 'bg-white',
    bgDisabled: 'bg-gray-100',
    ringInactive: 'ring-gray-200',
    ringActive: 'inset-ring-pink-600',
    selectedBg: 'bg-pink-50',
    selectedRing: 'inset-ring-pink-500',
    multiSelectBg: 'bg-pink-100',
    multiSelectRing: 'ring-pink-300',
    copiedBg: 'bg-pink-50',
    copiedOutline: 'outline-pink-500',
    hoverRing: 'hover:ring-gray-300',
    editShadow: 'inset-shadow-pink-600',
  },
  cyan: {
    bgInactive: 'bg-white',
    bgActive: 'bg-white',
    bgDisabled: 'bg-gray-100',
    ringInactive: 'ring-gray-200',
    ringActive: 'inset-ring-cyan-600',
    selectedBg: 'bg-cyan-50',
    selectedRing: 'inset-ring-cyan-500',
    multiSelectBg: 'bg-cyan-100',
    multiSelectRing: 'ring-cyan-300',
    copiedBg: 'bg-cyan-50',
    copiedOutline: 'outline-cyan-500',
    hoverRing: 'hover:ring-gray-300',
    editShadow: 'inset-shadow-cyan-600',
  },
};

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

  // Sistema de color simplificado
  colorScheme?: ColorScheme;

  // Props de dimensiones y espaciado
  padding?: string;
  width?: string;
  height?: string;
  insetPadding?: string;
  
  // Props de ancho de ring
  ringWidthInactive?: string;
  ringWidthActive?: string;
  selectedRingWidth?: string;
  multiSelectRingWidth?: string;
}

export function SpreadsheetCell({
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

  // Color scheme
  colorScheme = 'blue',

  // Dimensiones
  padding = 'px-2 py-1',
  width = 'w-full',
  height = 'h-8',
  insetPadding = 'px-2',
  
  // Anchos de ring
  ringWidthInactive = 'inset-ring-[0]',
  ringWidthActive = 'inset-ring-1',
  selectedRingWidth = 'inset-ring-3',
  multiSelectRingWidth = 'ring-1',
}: SpreadsheetCellProps) {
  const [value, setValue] = useState<string>(initialValue);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const selectRef = useRef<HTMLSelectElement | null>(null);
  const cellRef = useRef<HTMLDivElement | null>(null);
  const [shouldSelectAll, setShouldSelectAll] = useState(true);

  // Obtener la configuración de colores basada en el scheme
  const colors = colorSchemes[colorScheme];

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
    getSelectedRange,
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

        const copiedData = getCopiedData();

        if (copiedData) {
          const { values } = copiedData;
          const selectedRange = getSelectedRange();

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

        try {
          const clipboardText = await navigator.clipboard.readText();

          if (clipboardText) {
            const hasMultipleCells = clipboardText.includes('\t') || clipboardText.includes('\n');

            if (hasMultipleCells) {
              const rows = clipboardText.split('\n').map((row) => row.split('\t'));
              const [currentRow, currentCol] = cellId.split('-').map(Number);
              const selectedRange = getSelectedRange();

              if (selectedRange && (selectedRange.rows > 1 || selectedRange.cols > 1)) {
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
              setValue(clipboardText);
              onValueChange?.(clipboardText);
            }
          }
        } catch (error) {
          console.error('Error al pegar del clipboard:', error);
        }

        clearCopiedCell();
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

      for (let r = 0; r < targetRows; r++) {
        for (let c = 0; c < targetCols; c++) {
          const targetRow = startRow + r;
          const targetCol = startCol + c;
          const targetCellId = `${targetRow}-${targetCol}`;

          if (targetCellId === cellId) {
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

  //Listener para eliminar multiples celdas
  useEffect(() => {
    const handleDeleteCells = (e: Event) => {
      const customEvent = e as CustomEvent<{
        cellIds: string[];
      }>;

      const { cellIds } = customEvent.detail;

      if (cellIds.includes(cellId)) {
        setValue('');
        onValueChange?.('');
      }
    };

    window.addEventListener('spreadsheet-delete-cells', handleDeleteCells);

    return () => {
      window.removeEventListener('spreadsheet-delete-cells', handleDeleteCells);
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
    const inputClassName = `w-full h-full outline-none ${colors.bgActive} ${insetPadding} disabled:${colors.bgDisabled} disabled:cursor-not-allowed`;

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
      classes.push(colors.bgDisabled, 'cursor-not-allowed opacity-60');
    } else {
      if (isDragging || dragStartCell) {
        classes.push('cursor-cell');
      } else {
        classes.push('cursor-pointer');
      }

      if (isEditing) {
        classes.push(colors.bgActive, ringWidthActive, colors.ringActive, 'inset-shadow-lg', colors.editShadow);
      } else if (isSelected) {
        classes.push(colors.selectedBg, selectedRingWidth, colors.selectedRing);
      } else if (inMultiSelection) {
        classes.push(colors.multiSelectBg, multiSelectRingWidth, colors.multiSelectRing);
      } else {
        classes.push(colors.bgInactive, ringWidthInactive, colors.ringInactive);
      }

      if (isCopied && !isEditing) {
        classes.push('outline-2 outline-dashed', colors.copiedOutline, colors.copiedBg);
      }

      if (!isEditing && !isDragging && !dragStartCell) {
        classes.push(colors.hoverRing);
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