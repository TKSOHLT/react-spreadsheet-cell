# React Spreadsheet Cell

Excel-like spreadsheet component for React with full keyboard navigation, multi-cell selection, copy/paste support, and high customization.  
Perfect for building data-heavy, professional user interfaces inside your application.

![npm](https://img.shields.io/npm/v/react-spreadsheet-cell)
![downloads](https://img.shields.io/npm/dm/react-spreadsheet-cell)
![license](https://img.shields.io/npm/l/react-spreadsheet-cell)

## Installation
```bash
npm install react-spreadsheet-cell
```

## 📚 Documentation

**[View Live Documentation & Examples →](https://TKSOHLT.github.io/react-spreadsheet-cell/)**

## Quick Use
```jsx
import { SpreadsheetCellProvider, SpreadsheetCell } from 'react-spreadsheet-cell';
import 'react-spreadsheet-cell/styles.css';

function App() {
  const [cells, setCells] = useState({});

  return (
    <SpreadsheetCellProvider>
      <div className="grid grid-cols-3">
        {[...Array(9)].map((_, i) => (
          <SpreadsheetCell
            key={i}
            cellId={`0-${i}`}
            row={0}
            col={i}
            initialValue={cells[`0-${i}`] || ''}
            onValueChange={(value) => 
              setCells(prev => ({ ...prev, [`0-${i}`]: value }))
            }
          />
        ))}
      </div>
    </SpreadsheetCellProvider>
  );
}
```

## Characteristics

- ⌨️ Full keyboard navigation (arrows, tab, enter)
- 🧠 Multi-cell selection (Shift + click / arrows)
- 📋 Copy & paste support (Ctrl/Cmd + C / V)
- 🖱️ Drag-to-select
- 🔢 Cell types: text, number, select
- 🎨 8 built-in color schemes
- 🧩 Fully customizable
- 🛡️ Written in TypeScript

## Main Props

| Prop | Type | Description |
|------|------|-------------|
| `cellId` | `string` | Unique ID (format: "row-col") |
| `row` | `number` | Row number |
| `col` | `number` | Column number |
| `initialValue` | `string` | Initial value |
| `cellType` | `'text' \| 'number' \| 'select'` | Cell type |
| `colorScheme` | `'blue' \| 'purple' \| 'green'...` | Color scheme |
| `onValueChange` | `(value: string) => void` | Callback on change |

## Keyboard Shortcuts

- **Arrows** → Navigate between cells
- **Enter** → Edit cell / Move down
- **Tab** → Move right
- **Shift** + Arrows / Click → Multi selection
- **Ctrl/Cmd** + C → Copy
- **Ctrl/Cmd** + V → Paste
- **Delete** → Clear cell
- **Escape** → Cancel editing


## License

MIT

## Autor

TKSOHLT - [@TKSOHLT](https://github.com/TKSOHLT)