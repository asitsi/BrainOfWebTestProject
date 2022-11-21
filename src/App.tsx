import { useState } from 'react'
import './App.css';
import Column from "./components/Column";
import Row from "./components/Rows";
import AxisCell from "./components/AxisCell";
import Cell from "./components/Cells";
import { numberToChar } from "./components/numberToChar";

function App() {
  const [count, setCount] = useState(0);

  const numberOfColumns = 20;
  const numberOfRows = 10;  

  return (
    <div className="App">
      <h1>Dynamic Table</h1>

      <div className="SheetWrapper">
      <table className="Sheet">
        <tbody>
          <Row>
            {[...Array(numberOfColumns + 1)].map((column, columnIndex) =>
              columnIndex !== 0 ? (
                <AxisCell key={columnIndex}>
                  {numberToChar(columnIndex - 1)}
                </AxisCell>
              ) : (
                <AxisCell key={columnIndex} />
              )
            )}
          </Row>
          {[...Array(numberOfRows)].map((row, rowIndex) => (
            <Row key={rowIndex}>
              <AxisCell>{rowIndex + 1}</AxisCell>
              {[...Array(numberOfColumns)].map((column, columnIndex) => (
                <Column key={columnIndex}>
                  <Cell cellId={`${rowIndex},${columnIndex}`} />
                </Column>
              ))}
            </Row>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default App
