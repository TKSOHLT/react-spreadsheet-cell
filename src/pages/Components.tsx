import CodeFragment from '../components/ui/CodeFragment';

export default function Components() {
  return (
    <>
      {/* Título principal */}
      <h2 className="text-4xl font-bold text-gray-900 border-b-2 border-gray-200 pb-4">Componentes</h2>
      {/* Descripción General */}
      <section className="flex flex-col space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">Descripción General</h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          El sistema de Spreadsheet está compuesto por dos componentes principales que trabajan juntos para proporcionar toda la funcionalidad de una
          hoja de cálculo interactiva.
        </p>
      </section>
      {/* SpreadsheetProvider */}
      <section className="flex flex-col space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">SpreadsheetProvider</h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          El SpreadsheetProvider es el componente de contexto que maneja todo el estado global del spreadsheet. Debe envolver toda tu aplicación o la
          sección donde uses las celdas.
        </p>

        <CodeFragment
          codeString={`import SpreadsheetProvider from './context/SpreadsheetCellContext';

function App() {
  return (
    <SpreadsheetProvider>
      {/* Tu contenido aquí */}
    </SpreadsheetProvider>
  );
}`}
        />

        {/* Eventos globales */}
        <h4 className="text-xl font-semibold text-gray-800 mt-4">Eventos Globales</h4>
        <p className="text-gray-700 leading-relaxed text-lg">El provider escucha y gestiona eventos de teclado a nivel global:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2 text-lg">
          <li>
            <strong>Navegación:</strong> Arrow keys, Tab, Shift+Tab
          </li>
          <li>
            <strong>Edición:</strong> Enter, Escape
          </li>
          <li>
            <strong>Clipboard:</strong> Ctrl/Cmd+C (copy), Ctrl/Cmd+V (paste)
          </li>
          <li>
            <strong>Eliminación:</strong> Delete
          </li>
          <li>
            <strong>Selección extendida:</strong> Shift + navegación
          </li>
        </ul>
      </section>

      {/* SpreadsheetCell */}
      <section className="flex flex-col space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">SpreadsheetCell</h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          Componente que representa una celda individual de la tabla. Maneja su propio estado local y se sincroniza con el contexto global.
        </p>

        <CodeFragment
          codeString={`
import SpreadsheetCell from '../SpreadsheetCell';

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
`}
        />

        {/* Características Principales */}
        <h4 className="text-xl font-semibold text-gray-800 mt-4">Características Principales</h4>
        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2 text-lg">
          <li>Tres tipos de celda: texto, número y select</li>
          <li>Modos de visualización y edición separados</li>
          <li>Validación automática para celdas numéricas</li>
          <li>Estilos personalizables para cada estado</li>
          <li>Soporte para celdas deshabilitadas</li>
          <li>Auto-scroll al navegar con teclado</li>
        </ul>

        {/* Estados Visuales */}
        <h4 className="text-xl font-semibold text-gray-800 mt-4">Estados Visuales</h4>
        <p className="text-gray-700 leading-relaxed text-lg">
          El componente aplica automáticamente diferentes estilos según la interacción del usuario:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2 text-lg">
          <li>
            <strong>Inactiva:</strong> Estado por defecto cuando no está seleccionada
          </li>
          <li>
            <strong>Seleccionada:</strong> Cuando el usuario hace clic en la celda
          </li>
          <li>
            <strong>Editando:</strong> Cuando hace doble clic o presiona Enter
          </li>
          <li>
            <strong>Multi-selección:</strong> Cuando forma parte de un rango seleccionado
          </li>
          <li>
            <strong>Copiada:</strong> Cuando está en el portapapeles (Ctrl+C)
          </li>
          <li>
            <strong>Deshabilitada:</strong> {`Cuando se define disabled={true}`}
          </li>
        </ul>

        {/* Ciclo de Vida */}
        <h4 className="text-xl font-semibold text-gray-800 mt-4">Ciclo de Vida</h4>
        <div className="bg-white border border-gray-300 rounded-lg p-4 space-y-3">
          <div>
            <h5 className="font-semibold text-gray-800">Al montar:</h5>
            <ul className="list-disc list-inside text-gray-700 ml-2">
              <li>Se registra en el provider con su ID, posición y referencia DOM</li>
              <li>Registra su valor inicial</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-800">Durante la vida:</h5>
            <ul className="list-disc list-inside text-gray-700 ml-2">
              <li>Sincroniza valor con initialValue cuando no está editando</li>
              <li>Actualiza el registro de valor en cada cambio</li>
              <li>Escucha eventos de paste, delete y navegación</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-800">Al desmontar:</h5>
            <ul className="list-disc list-inside text-gray-700 ml-2">
              <li>Se elimina del registro del provider</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
