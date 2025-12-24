import { useEffect, useRef, useState } from 'react';
import type { CellType, SelectOption } from '..';
import { useSpreadsheetCell } from '../hooks/useSpreadsheetCell';

interface SpreadsheetCellProps {
  initialValue?: string;
  cellId: string;
  row: number;
  col: number;
  cellType?: CellType;
  min?: number;
  max?: number;
  step?: number;
  selectOptions?: SelectOption[];
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
    copiedCell,
    registerCellValue,
    getCopiedValue,
    clearCopiedCell,
  } = useSpreadsheetCell();

  const isSelected = selectedCell === cellId;
  const isEditing = editingCell === cellId;
  const isCopied = copiedCell === cellId;

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
      // Si es una tecla imprimible
      if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
        e.preventDefault();
        setShouldSelectAll(false);
        startEditing(cellId);
        // Limpiar el valor para empezar a escribir desde cero
        setValue(e.key);
        onValueChange?.(e.key);
      }
    };

    const handleKeyDown = async (e: KeyboardEvent) => {
      // Paste: Ctrl+V o Cmd+V
      if ((e.ctrlKey || e.metaKey) && e.key === 'v') {
        e.preventDefault();
        const copiedValue = getCopiedValue();
        if (copiedValue !== null) {
          setValue(copiedValue);
          onValueChange?.(copiedValue);
          clearCopiedCell();
          return;
        }
        //Fallback para pegar lo que hay en el portapapeles
        const clipboardText = await navigator.clipboard.readText();
        if(clipboardText){
          setValue(clipboardText);
          onValueChange?.(clipboardText);
          return;
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
        // Limpiar el valor
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
  }, [isSelected, isEditing, cellId, stopEditing, disabled, getCopiedValue, clearCopiedCell]);

  const handleClick = () => {
    if (!isEditing && !disabled) {
      selectCell(cellId);
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
      }, 1000);
      return;
    }

    if (e.key === 'Tab') {
      e.preventDefault();

      setValue(initialValue);
      stopEditing();
      onValueChange?.(initialValue);

      setTimeout(() => {
        navigateCell('right');
      }, 1000);
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
    const classes = [
      'min-w-40 max-w-full min-h-full transition-all',
      padding,
      width,
      height
    ];

    if (disabled) {
      classes.push(bgColorDisabled, 'cursor-not-allowed opacity-60');
    } else {
      classes.push('cursor-pointer');
      
      if (isEditing) {
        classes.push(bgColorActive, ringWidthActive, ringColorActive, 'inset-shadow-lg inset-shadow-cyan-600');
      } else if (isSelected) {
        classes.push(selectedBgColor, selectedRingWidth, selectedRingColor);
      } else {
        classes.push(bgColorInactive, ringWidthInactive, ringColorInactive);
      }

      if (isCopied && !isEditing) {
        classes.push('outline-2 outline-dashed', copiedOutlineColor, copiedBgColor);
      }

      if (!isEditing) {
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
      onDoubleClick={handleDoubleClick}
    >
      {isEditing && !disabled ? renderEditMode() : <span className={`select-none ${disabled ? 'text-gray-900' : ''}`}>{value || ''}</span>}
    </div>
  );
}