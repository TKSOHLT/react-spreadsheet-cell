export interface SelectionContextValue {
  isDragging: boolean;
  startDragging: (cellId: string, row: number, col: number) => void;
  stopDragging: () => void;
  updateSelection: (cellId: string, row: number, col: number) => void;
  clearSelection: () => void;
  isSelected: (cellId: string) => boolean;
  selectedCells: Set<string>;
}

export interface SelectOption {
  value: string | number;
  label: string;
}

export type CellType = 'text' | 'number' | 'select';


