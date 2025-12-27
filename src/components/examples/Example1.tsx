import { useState } from 'react';
import SpreadsheetCell from '../SpreadsheetCell';
import ExampleCard from '../ui/ExampleCard';

export default function Example1() {
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

  const codeString = `import { useState } from 'react';
    import SpreadsheetProvider from './context/SpreadsheetCellContext';
    import SpreadsheetCell from './components/SpreadsheetCell';

    export default function MySpreadsheet() {
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
        <SpreadsheetProvider>
        <table className="w-full">
            <thead>
            <tr>
                {Array.from({ length: 3 }, (_, index) => (
                <th key={index} className="border border-gray-200 bg-gray-50 p-2">
                    Columna {index}
                </th>
                ))}
            </tr>
            </thead>
            <tbody>
            {Array.from({ length: 3 }, (_, row) => (
                <tr key={row}>
                {Array.from({ length: 3 }, (_, col) => (
                    <td key={\`\${row}-\${col}\`} className="border border-gray-200">
                    <SpreadsheetCell
                        cellId={\`\${row}-\${col}\`}
                        row={row}
                        col={col}
                        initialValue={cells[\`\${row}-\${col}\`] ?? ''}
                        onValueChange={(value) =>
                        setCells((prev) => ({
                            ...prev,
                            [\`\${row}-\${col}\`]: value,
                        }))
                        }
                    />
                    </td>
                ))}
                </tr>
            ))}
            </tbody>
        </table>
        </SpreadsheetProvider>
        );
    }`;

  return (
    <ExampleCard codeString={codeString}>
      <div className="flex flex-col items-center">
        <div className="w-full max-w-2xl">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                {Array.from({ length: 3 }, (_, index) => (
                  <th key={index} className="border border-gray-300 bg-gray-100 p-2 text-gray-700 font-semibold">
                    Columna {index}
                  </th>
                ))}
              </tr>
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
        </div>
      </div>
    </ExampleCard>
  );
}
