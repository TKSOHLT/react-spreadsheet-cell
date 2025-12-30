# React Spreadsheet Cell

Componente de hoja de cálculo para React, interactivo y totalmente personalizable, con soporte completo de navegación por teclado, selección múltiple y copiar/pegar. Ideal para crear experiencias de datos profesionales dentro de tu app

## Instalación
```bash
npm install react-spreadsheet-cell
```

## Uso Rápido
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

## Características

- ✅ Navegación con flechas, Tab, Enter
- ✅ Selección múltiple (Shift + Click/Arrows)
- ✅ Copiar/Pegar (Ctrl+C / Ctrl+V)
- ✅ Drag-to-select
- ✅ Tipos: texto, número, select
- ✅ 8 esquemas de color predefinidos
- ✅ Totalmente personalizable
- ✅ TypeScript support

## Props Principales

| Prop | Tipo | Descripción |
|------|------|-------------|
| `cellId` | `string` | ID único (formato: "row-col") |
| `row` | `number` | Número de fila |
| `col` | `number` | Número de columna |
| `initialValue` | `string` | Valor inicial |
| `cellType` | `'text' \| 'number' \| 'select'` | Tipo de celda |
| `colorScheme` | `'blue' \| 'purple' \| 'green'...` | Esquema de color |
| `onValueChange` | `(value: string) => void` | Callback al cambiar |

## Atajos de Teclado

- **Flechas**: Navegar entre celdas
- **Enter**: Editar celda / Ir abajo
- **Tab**: Ir a la derecha
- **Shift + Arrows/Click**: Selección múltiple
- **Ctrl/Cmd + C**: Copiar
- **Ctrl/Cmd + V**: Pegar
- **Delete**: Borrar contenido
- **Escape**: Cancelar edición


## Licencia

MIT

## Autor

TKSOHLT - [@TKSOHLT](https://github.com/TKSOHLT)