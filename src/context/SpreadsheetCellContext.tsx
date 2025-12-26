import { createContext, useEffect, useRef, useState } from 'react';

interface CellPosition {
  row: number;
  col: number;
}

interface SelectedRange {
  minRow: number;
  maxRow: number;
  minCol: number;
  maxCol: number;
  rows: number;
  cols: number;
}

interface CopiedData {
  startRow: number;
  startCol: number;
  rows: number;
  cols: number;
  values: string[][];
}

interface SpreadsheetContextValue {
  selectedCell: string | null;
  selectCell: (cellId: string, extendSelection?: boolean) => void;
  selectedCells: Set<string>;
  selectionStart: string | null;
  selectionEnd: string | null;
  editingCell: string | null;
  startEditing: (cellId: string) => void;
  stopEditing: () => void;
  registerCell: (cellId: string, row: number, col: number, element?: HTMLDivElement) => void;
  unregisterCell: (cellId: string, element?: HTMLDivElement) => void;
  navigateCell: (direction: 'up' | 'down' | 'left' | 'right', extendSelection?: boolean) => void;
  copiedCell: string | null;
  copyCell: () => void;
  registerCellValue: (cellId: string, value: string) => void;
  getCopiedValue: () => string | null;
  clearCopiedCell: () => void;
  isInSelection: (cellId: string) => boolean;
  clearSelection: () => void;
  isDragging: boolean;
  dragStartCell: string | null;
  startDragging: (cellId: string) => void;
  updateDragSelection: (cellId: string) => void;
  stopDragging: () => void;
  copiedData: CopiedData | null;
  getCopiedData: () => CopiedData | null;
  isInCopiedRange: (cellId: string) => boolean;
  getSelectedRange: () => SelectedRange | null;
}

export const SpreadsheetContext = createContext<SpreadsheetContextValue | null>(null);

export default function SpreadsheetProvider({ children }: { children: React.ReactNode }) {
  const [selectedCell, setSelectedCell] = useState<string | null>(null);
  const [selectedCells, setSelectedCells] = useState<Set<string>>(new Set());
  const [selectionStart, setSelectionStart] = useState<string | null>(null);
  const [selectionEnd, setSelectionEnd] = useState<string | null>(null);
  const [editingCell, setEditingCell] = useState<string | null>(null);
  const [copiedCell, setCopiedCell] = useState<string | null>(null);
  const [copiedData, setCopiedData] = useState<CopiedData | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartCell, setDragStartCell] = useState<string | null>(null);

  const cellRegistry = useRef<Map<string, CellPosition>>(new Map());
  const cellElementsRef = useRef<Set<HTMLElement>>(new Set());
  const cellValuesRef = useRef<Map<string, string>>(new Map());

  // Función para calcular el rango de celdas entre dos posiciones
  const getCellsInRange = (startId: string, endId: string): Set<string> => {
    const startPos = cellRegistry.current.get(startId);
    const endPos = cellRegistry.current.get(endId);

    if (!startPos || !endPos) return new Set([startId]);

    const minRow = Math.min(startPos.row, endPos.row);
    const maxRow = Math.max(startPos.row, endPos.row);
    const minCol = Math.min(startPos.col, endPos.col);
    const maxCol = Math.max(startPos.col, endPos.col);

    const cells = new Set<string>();
    for (let row = minRow; row <= maxRow; row++) {
      for (let col = minCol; col <= maxCol; col++) {
        const cellId = `${row}-${col}`;
        if (cellRegistry.current.has(cellId)) {
          cells.add(cellId);
        }
      }
    }
    return cells;
  };

  const getSelectedRange = (): SelectedRange | null => {
    if (selectedCells.size === 0) return null;

    if (selectedCells.size === 1 && selectedCell) {
      const pos = cellRegistry.current.get(selectedCell);
      if (!pos) return null;

      return {
        minRow: pos.row,
        maxRow: pos.row,
        minCol: pos.col,
        maxCol: pos.col,
        rows: 1,
        cols: 1,
      };
    }

    const cells = Array.from(selectedCells);
    const positions = cells.map((id) => {
      const [row, col] = id.split('-').map(Number);
      return { row, col };
    });

    if (positions.length === 0) return null;

    const minRow = Math.min(...positions.map((p) => p.row));
    const maxRow = Math.max(...positions.map((p) => p.row));
    const minCol = Math.min(...positions.map((p) => p.col));
    const maxCol = Math.max(...positions.map((p) => p.col));

    return {
      minRow,
      maxRow,
      minCol,
      maxCol,
      rows: maxRow - minRow + 1,
      cols: maxCol - minCol + 1,
    };
  };

  // Actualizar la selección cuando cambia el rango
  useEffect(() => {
    if (selectionStart && selectionEnd) {
      const newSelection = getCellsInRange(selectionStart, selectionEnd);
      setSelectedCells(newSelection);
    } else if (selectedCell && !selectionStart && !selectionEnd) {
      setSelectedCells(new Set([selectedCell]));
    } else if (!selectedCell && !selectionStart && !selectionEnd) {
      setSelectedCells(new Set());
    }
  }, [selectionStart, selectionEnd, selectedCell]);

  // Listener global para el teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedCell && !editingCell) {
        // Copy: Ctrl+C o Cmd+C
        if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
          e.preventDefault();
          copyCell();
          return;
        }

        // Navegación con Shift para extender selección
        const isExtending = e.shiftKey;

        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
          e.preventDefault();
          const direction = e.key.replace('Arrow', '').toLowerCase() as 'up' | 'down' | 'left' | 'right';
          navigateCell(direction, isExtending);
          return;
        }

        if (e.key === 'Tab' && e.shiftKey) {
          e.preventDefault();
          navigateCell('left', false);
          return;
        }

        if (e.key === 'Tab') {
          e.preventDefault();
          navigateCell('right', false);
          return;
        }

        // Eliminar contenido de celdas seleccionadas
        if (e.key === 'Delete') {
          e.preventDefault();
          return;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCell, editingCell, selectionStart, selectionEnd, selectedCells]);

  // Listener para clicks fuera de las celdas
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      let isInsideCell = false;

      cellElementsRef.current.forEach((cellElement) => {
        if (cellElement.contains(target)) {
          isInsideCell = true;
        }
      });

      if (!isInsideCell && selectedCell) {
        clearSelection();
      }
    };

    // Listener global para mouseup
    const handleMouseUp = () => {
      if (isDragging) {
        stopDragging();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [selectedCell, isDragging]);

  const selectCell = (cellId: string, extendSelection = false) => {
    setEditingCell(null);

    if (extendSelection && selectedCell) {
      // Extender la selección desde la celda actual
      if (!selectionStart) {
        setSelectionStart(selectedCell);
      }
      setSelectionEnd(cellId);
      setSelectedCell(cellId);
    } else {
      // Selección simple
      setSelectedCell(cellId);
      setSelectionStart(null);
      setSelectionEnd(null);
    }
  };

  const clearSelection = () => {
    setSelectedCell(null);
    setSelectionStart(null);
    setSelectionEnd(null);
    setEditingCell(null);
  };

  const isInSelection = (cellId: string): boolean => {
    return selectedCells.has(cellId);
  };

  const startEditing = (cellId: string) => {
    setEditingCell(cellId);
    // Limpiar selección múltiple al editar
    setSelectionStart(null);
    setSelectionEnd(null);
  };

  const stopEditing = () => {
    setEditingCell(null);
  };

  const registerCell = (cellId: string, row: number, col: number, element?: HTMLDivElement) => {
    cellRegistry.current.set(cellId, { row, col });
    if (element) {
      cellElementsRef.current.add(element);
    }
  };

  const unregisterCell = (cellId: string, element?: HTMLDivElement) => {
    cellRegistry.current.delete(cellId);
    if (element) {
      cellElementsRef.current.delete(element);
    }
  };

  const navigateCell = (direction: 'up' | 'down' | 'left' | 'right', extendSelection = false) => {
    if (!selectedCell) return;

    const currentPos = cellRegistry.current.get(selectedCell);
    if (!currentPos) return;

    let targetRow = currentPos.row;
    let targetCol = currentPos.col;

    switch (direction) {
      case 'up':
        targetRow = currentPos.row - 1;
        break;
      case 'down':
        targetRow = currentPos.row + 1;
        break;
      case 'left':
        targetCol = currentPos.col - 1;
        break;
      case 'right':
        targetCol = currentPos.col + 1;
        break;
    }

    const targetCellId = `${targetRow}-${targetCol}`;
    if (cellRegistry.current.has(targetCellId)) {
      if (extendSelection) {
        if (!selectionStart) {
          setSelectionStart(selectedCell);
        }
        setSelectionEnd(targetCellId);
        setSelectedCell(targetCellId);
      } else {
        selectCell(targetCellId, false);
      }
    }
  };

  const registerCellValue = (cellId: string, value: string) => {
    cellValuesRef.current.set(cellId, value);
  };

  useEffect(() => {
    console.log('Useeffect', selectedCells);
  }, [selectedCells]);

  const copyCell = () => {
    if (!selectedCell) return;
    // Si hay múltiples celdas seleccionadas
    if (selectedCells.size > 1) {
      // Obtener el rango rectangular
      const cells = Array.from(selectedCells);
      const positions = cells
        .map((id) => {
          const pos = cellRegistry.current.get(id);
          const [row, col] = id.split('-').map(Number);
          return { id, row, col, pos };
        })
        .filter((cell) => cell.pos);

      if (positions.length === 0) return;

      const minRow = Math.min(...positions.map((p) => p.row));
      const maxRow = Math.max(...positions.map((p) => p.row));
      const minCol = Math.min(...positions.map((p) => p.col));
      const maxCol = Math.max(...positions.map((p) => p.col));

      const rows = maxRow - minRow + 1;
      const cols = maxCol - minCol + 1;

      // Crear matriz de valores
      const values: string[][] = [];
      for (let r = 0; r < rows; r++) {
        values[r] = [];
        for (let c = 0; c < cols; c++) {
          const cellId = `${minRow + r}-${minCol + c}`;
          values[r][c] = cellValuesRef.current.get(cellId) || '';
        }
      }

      // Guardar datos copiados
      const copiedInfo: CopiedData = {
        startRow: minRow,
        startCol: minCol,
        rows,
        cols,
        values,
      };

      setCopiedData(copiedInfo);
      setCopiedCell(`${minRow}-${minCol}`);

      // Copiar al clipboard como texto con tabs y saltos de línea
      const clipboardText = values.map((row) => row.join('\t')).join('\n');
      try {
        navigator.clipboard.writeText(clipboardText);
      } catch (error) {
        console.error('Error copiando al clipboard:', error);
      }
    } else {
      // Copiar celda única (comportamiento original)
      const value = cellValuesRef.current.get(selectedCell) || '';
      setCopiedCell(selectedCell);
      setCopiedData(null);

      try {
        navigator.clipboard.writeText(value);
      } catch (error) {
        console.error('Error copiando al clipboard:', error);
      }
    }
  };

  const getCopiedValue = (): string | null => {
    if (!copiedCell) return null;
    return cellValuesRef.current.get(copiedCell) || null;
  };

  const getCopiedData = (): CopiedData | null => {
    return copiedData;
  };

  const isInCopiedRange = (cellId: string): boolean => {
    if (!copiedData) return cellId === copiedCell;

    const [row, col] = cellId.split('-').map(Number);
    const { startRow, startCol, rows, cols } = copiedData;

    return row >= startRow && row < startRow + rows && col >= startCol && col < startCol + cols;
  };

  const clearCopiedCell = () => {
    setCopiedCell(null);
    setCopiedData(null);
  };

  // Funciones de drag-to-select
  const startDragging = (cellId: string) => {
    setIsDragging(true);
    setDragStartCell(cellId);
    setSelectedCell(cellId);
    setSelectionStart(cellId);
    setSelectionEnd(cellId);
    setEditingCell(null);
  };

  const updateDragSelection = (cellId: string) => {
    if (isDragging && selectionStart) {
      setSelectionEnd(cellId);
      setSelectedCell(cellId);
    }
  };

  const stopDragging = () => {
    setIsDragging(false);
    setDragStartCell(null);
  };

  const value: SpreadsheetContextValue = {
    selectedCell,
    selectCell,
    selectedCells,
    selectionStart,
    selectionEnd,
    editingCell,
    startEditing,
    stopEditing,
    registerCell,
    unregisterCell,
    navigateCell,
    copiedCell,
    copyCell,
    registerCellValue,
    getCopiedValue,
    clearCopiedCell,
    isInSelection,
    clearSelection,
    isDragging,
    dragStartCell,
    startDragging,
    updateDragSelection,
    stopDragging,
    copiedData,
    getCopiedData,
    isInCopiedRange,
    getSelectedRange
  };

  return <SpreadsheetContext.Provider value={value}>{children}</SpreadsheetContext.Provider>;
}
