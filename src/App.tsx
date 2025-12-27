import { useState } from 'react';
import SpreadsheetCell from './components/SpreadsheetCell';

function App() {
  const [cells, setCells] = useState<Record<string, string>>({
    '0-0': '0-0',
    '0-1': '0-1',
    '0-2': '0-2',
    '1-0': '1-0',
    '1-1': '1-1',
    '1-2': '1-2',
    '2-0': '2-0',
    '2-1': '2-1',
    '2-2': '2-2',
  });

  return (
    <>
      <table>
        <thead>
          {Array.from({ length: 3 }, (_, index) => (
            <th>Columna {index}</th>
          ))}
        </thead>
        <tbody>
          {Array.from({ length: 3 }, (_, row) => (
            <tr key={row}>
              {Array.from({ length: 3 }, (_, col) => (
                <td key={`${row}-${col}`} className="border border-gray-100">
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
