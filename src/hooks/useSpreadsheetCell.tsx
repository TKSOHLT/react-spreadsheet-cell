import { useContext } from "react";
import { SpreadsheetContext } from "../context/SpreadsheetCellContext";

/**
 * Hook personalizado para usar el contexto de selección
 * Lanza un error si se usa fuera del SelectionProvider
 */
export function useSpreadsheetCell() {
  const context = useContext(SpreadsheetContext);
  if (!context) {
    throw new Error('useSpreadsheetCell debe usarse dentro de SpreadsheetProvider');
  }
  return context;
}
