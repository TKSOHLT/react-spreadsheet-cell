import { useState } from 'react';
import SpreadsheetCell from './components/SpreadsheetCell';

function App() {
  const [cell1, setCell1] = useState("");
  const [cell2, setCell2] = useState("");
  const [cell3, setCell3] = useState("");
  const [cell4, setCell4] = useState("");
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
          <td>
            <SpreadsheetCell cellId={'0-0'} row={0} col={0} initialValue={cell1} onValueChange={(newValue) => setCell1(newValue)}/>
          </td>
          <td>
            <SpreadsheetCell cellId={'0-1'} row={0} col={1} initialValue={cell2} onValueChange={(newValue) => setCell2(newValue)}/>
          </td>
          <td>
            <SpreadsheetCell cellId={'0-2'} row={0} col={2} initialValue={cell3} onValueChange={(newValue) => setCell3(newValue)}/>
          </td>
          <td>
            <SpreadsheetCell cellId={'0-3'} row={0} col={3} initialValue={cell4} onValueChange={(newValue) => setCell4(newValue)}/>
          </td>
        </tbody>
      </table>
    </>
  );
}

export default App;
