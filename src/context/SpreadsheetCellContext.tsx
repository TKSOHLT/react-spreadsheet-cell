import { createContext, useEffect, useRef, useState } from 'react';

interface SpreadsheetContextValue {
  selectedCell: string | null;
  selectCell: (cellId: string) => void;
  editingCell: string | null;
  startEditing: (cellId: string) => void;
  stopEditing: () => void;
  registerCell: (cellId: string, row: number, col: number, element?: HTMLDivElement) => void;
  unregisterCell: (cellId: string, element?: HTMLDivElement) => void;
  navigateCell: (direction: 'up' | 'down' | 'left' | 'right') => void;
  copiedCell: string | null;
  copyCell: () => void;
  registerCellValue: (cellId: string, value: string) => void;
  getCopiedValue: () => string | null;
  clearCopiedCell: () => void;
}

export const SpreadsheetContext = createContext<SpreadsheetContextValue | null>(null);

export default function SpreadsheetProvider({ children }: { children: React.ReactNode }) {
  const [selectedCell, setSelectedCell] = useState<string | null>(null);
  const [editingCell, setEditingCell] = useState<string | null>(null);
  const [copiedCell, setCopiedCell] = useState<string | null>(null);
  
  const cellRegistry = useRef<Map<string, { row: number; col: number }>>(new Map());
  const cellElementsRef = useRef<Set<HTMLElement>>(new Set());
  const cellValuesRef = useRef<Map<string, string>>(new Map());

  // Listener global para el teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Solo navegar si hay una celda seleccionada y NO está editando
      if (selectedCell && !editingCell) {
        // Copy: Ctrl+C o Cmd+C
        if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
          e.preventDefault();
          copyCell();
          return;
        }

        // Paste: Ctrl+V o Cmd+V
        if ((e.ctrlKey || e.metaKey) && e.key === 'v') {
          e.preventDefault();
          // El paste se maneja en el componente individual
          return;
        }

        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
          e.preventDefault();
          const direction = e.key.replace('Arrow', '').toLowerCase() as 'up' | 'down' | 'left' | 'right';
          navigateCell(direction);
          return;
        }

        if (e.key === 'Tab' && e.shiftKey) {
          e.preventDefault();
          navigateCell('left');
          return;
        }

        if (e.key === 'Tab') {
          e.preventDefault();
          navigateCell('right');
          return;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCell, editingCell]);

  // Listener para clicks fuera de las celdas
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Verificar si el click fue dentro de alguna celda
      let isInsideCell = false;
      cellElementsRef.current.forEach((cellElement) => {
        if (cellElement.contains(target)) {
          isInsideCell = true;
        }
      });

      // Si el click fue fuera de todas las celdas, deseleccionar
      if (!isInsideCell && selectedCell) {
        setSelectedCell(null);
        setEditingCell(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [selectedCell]);

  const selectCell = (cellId: string) => {
    setSelectedCell(cellId);
    setEditingCell(null);
  };

  const startEditing = (cellId: string) => {
    setEditingCell(cellId);
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

  const navigateCell = (direction: 'up' | 'down' | 'left' | 'right') => {
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

    // Buscar la celda en la posición objetivo
    const targetCellId = `${targetRow}-${targetCol}`;
    if (cellRegistry.current.has(targetCellId)) {
      setSelectedCell(targetCellId);
    }
  };

  // Funciones de copy/paste
  const registerCellValue = (cellId: string, value: string) => {
    cellValuesRef.current.set(cellId, value);
  };

  const copyCell = () => {
    if (!selectedCell) return;
    
    const value = cellValuesRef.current.get(selectedCell) || '';
    setCopiedCell(selectedCell);
    
    // También copiar al clipboard del sistema
    try {
      navigator.clipboard.writeText(value);
    } catch (error) {
      console.error('Error copiando al clipboard:', error);
    }
  };

  const getCopiedValue = (): string | null => {
    if (!copiedCell) return null;
    return cellValuesRef.current.get(copiedCell) || null;
  };

  const clearCopiedCell = () => {
    setCopiedCell(null);
  };

  const value: SpreadsheetContextValue = {
    selectedCell,
    selectCell,
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
  };

  return <SpreadsheetContext.Provider value={value}>{children}</SpreadsheetContext.Provider>;
}