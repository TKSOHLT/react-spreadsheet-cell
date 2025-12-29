import { useContext } from "react";
import { SpreadsheetContext } from "../context/SpreadsheetCellContext";

export function useSpreadsheetCell() {
  const context = useContext(SpreadsheetContext);
  if (!context) {
    throw new Error('useSpreadsheetCell must be used within SpreadsheetProvider');
  }
  return context;
}
