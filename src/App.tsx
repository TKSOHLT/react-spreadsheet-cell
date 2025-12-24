import { useState } from 'react';
import SpreadsheetCell from './components/SpreadsheetCell';

function App() {
  const [cells, setCells] = useState<Record<string, string>>({});
  return (
    <>
      <table>
        <thead>
          <th>Columna1</th>
          <th>Columna2</th>
          <th>Columna3</th>
          <th>Columna4</th>
        </thead>
        <tbody>
          {Array.from({ length: 10 }, (_, row) => (
            <tr key={row}>
              {Array.from({ length: 10 }, (_, col) => (
                <td key={`${row}-${col}`}>
                  <SpreadsheetCell
                    cellId={`${row}-${col}`}
                    row={row}
                    col={col}
                    initialValue={cells[`${row}-${col}`] ?? ''}
                    onValueChange={(value) =>
                      setCells((prev) => ({
                        ...prev,
                        [`${row}-${col}`]: value,
                      }))
                    }
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
