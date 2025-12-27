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

        {/* Props Requeridas */}
        <h4 className="text-xl font-semibold text-gray-800 mt-4">Props Requeridas</h4>
        <div className="overflow-x-auto rounded-xl">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100 ">
              <tr>
                <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b border-slate-200">Prop</th>
                <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b border-slate-200">Tipo</th>
                <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b border-slate-200">Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="px-4 py-2 font-mono text-sm text-blue-600"> cellId</td>
                <td className="px-4 py-2 font-mono text-sm">string</td>
                <td className="px-4 py-2">Identificador único en formato "row-col"</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="px-4 py-2 font-mono text-sm text-blue-600">row</td>
                <td className="px-4 py-2 font-mono text-sm">number</td>
                <td className="px-4 py-2">Índice de fila (base 0)</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-sm text-blue-600">col</td>
                <td className="px-4 py-2 font-mono text-sm">number</td>
                <td className="px-4 py-2">Índice de columna (base 0)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Props Opcionales - Datos */}
        <h4 className="text-xl font-semibold text-gray-800 mt-4">Props Opcionales - Datos</h4>
        <div className="overflow-x-auto rounded-xl">
          <table className="min-w-full bg-white ">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b border-slate-200">Prop</th>
                <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b border-slate-200">Tipo</th>
                <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b border-slate-200">Default</th>
                <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b border-slate-200">Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="px-4 py-2 font-mono text-sm text-blue-600">initialValue</td>
                <td className="px-4 py-2 font-mono text-sm">string</td>
                <td className="px-4 py-2 font-mono text-sm">''</td>
                <td className="px-4 py-2">Valor inicial de la celda</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="px-4 py-2 font-mono text-sm text-blue-600">cellType</td>
                <td className="px-4 py-2 font-mono text-sm">'text' | 'number' | 'select'</td>
                <td className="px-4 py-2 font-mono text-sm">'text'</td>
                <td className="px-4 py-2">Tipo de entrada</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="px-4 py-2 font-mono text-sm text-blue-600">selectOptions</td>
                <td className="px-4 py-2 font-mono text-sm">Array&lt;{`{value, label}`}&gt;</td>
                <td className="px-4 py-2 font-mono text-sm">[]</td>
                <td className="px-4 py-2">Opciones para tipo select</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="px-4 py-2 font-mono text-sm text-blue-600">min</td>
                <td className="px-4 py-2 font-mono text-sm">number</td>
                <td className="px-4 py-2 font-mono text-sm">-</td>
                <td className="px-4 py-2">Valor mínimo (solo number)</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="px-4 py-2 font-mono text-sm text-blue-600">max</td>
                <td className="px-4 py-2 font-mono text-sm">number</td>
                <td className="px-4 py-2 font-mono text-sm">-</td>
                <td className="px-4 py-2">Valor máximo (solo number)</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="px-4 py-2 font-mono text-sm text-blue-600">step</td>
                <td className="px-4 py-2 font-mono text-sm">number</td>
                <td className="px-4 py-2 font-mono text-sm">1</td>
                <td className="px-4 py-2">Incremento (solo number)</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-sm text-blue-600">disabled</td>
                <td className="px-4 py-2 font-mono text-sm">boolean</td>
                <td className="px-4 py-2 font-mono text-sm">false</td>
                <td className="px-4 py-2">Deshabilita la celda</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Props Opcionales - Callbacks */}
        <h4 className="text-xl font-semibold text-gray-800 mt-4">Props Opcionales - Callbacks</h4>
        <div className="overflow-x-auto rounded-xl">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b border-slate-200">Prop</th>
                <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b border-slate-200">Tipo</th>
                <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b border-slate-200">Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="px-4 py-2 font-mono text-sm text-blue-600">onValueChange</td>
                <td className="px-4 py-2 font-mono text-sm">(value: string) =&gt; void</td>
                <td className="px-4 py-2">Se ejecuta cuando cambia el valor</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-sm text-blue-600">onFocus</td>
                <td className="px-4 py-2 font-mono text-sm">() =&gt; void</td>
                <td className="px-4 py-2">Se ejecuta cuando la celda recibe foco</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Tipos de Celda */}
        <h4 className="text-xl font-semibold text-gray-800 mt-4">Tipos de Celda</h4>
        
        <div className="bg-white border border-slate-200 rounded-lg p-4 space-y-3">
          <div>
            <h5 className="font-semibold text-gray-800 text-lg">text (default)</h5>
            <ul className="list-disc list-inside text-gray-700 ml-2">
              <li>Input de texto sin restricciones</li>
              <li>Acepta cualquier carácter</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-gray-800 text-lg">number</h5>
            <ul className="list-disc list-inside text-gray-700 ml-2">
              <li>Input numérico con validación</li>
              <li>Respeta props min, max, step</li>
              <li>Controles de incremento/decremento nativos</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-gray-800 text-lg">select</h5>
            <ul className="list-disc list-inside text-gray-700 ml-2">
              <li>Dropdown con opciones predefinidas</li>
              <li>Requiere prop selectOptions</li>
              <li>Primera opción es placeholder "Seleccionar..."</li>
            </ul>
          </div>
        </div>

        {/* Interacciones del Usuario */}
        <h4 className="text-xl font-semibold text-gray-800 mt-4">Interacciones del Usuario</h4>
        
        <div className="space-y-4">
          <div className="bg-white border border-slate-200 rounded-lg p-4">
            <h5 className="font-semibold text-gray-800 text-lg mb-2">Mouse</h5>
            <ul className="list-disc list-inside text-gray-700 ml-2 space-y-1">
              <li><code className="bg-gray-100 p-1 rounded-lg text-sm">onClick</code>: Selecciona la celda (con Shift extiende selección)</li>
              <li><code className="bg-gray-100 p-1 rounded-lg text-sm">onDoubleClick</code>: Inicia modo edición</li>
              <li><code className="bg-gray-100 p-1 rounded-lg text-sm">onMouseDown</code>: Inicia drag-to-select</li>
              <li><code className="bg-gray-100 p-1 rounded-lg text-sm">onMouseEnter</code>: Actualiza selección durante drag</li>
              <li><code className="bg-gray-100 p-1 rounded-lg text-sm">onMouseUp</code>: Finaliza drag-to-select</li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-4">
            <h5 className="font-semibold text-gray-800 text-lg mb-2">Teclado (celda seleccionada, no editando)</h5>
            <ul className="list-disc list-inside text-gray-700 ml-2 space-y-1">
              <li>Teclas alfanuméricas: Inicia edición y escribe el carácter</li>
              <li><code className="bg-gray-100 p-1 rounded-lg text-sm">Enter</code>: Inicia edición</li>
              <li><code className="bg-gray-100 p-1 rounded-lg text-sm">Delete</code>: Borra contenido</li>
              <li><code className="bg-gray-100 p-1 rounded-lg text-sm">Ctrl/Cmd+C</code>: Copia la celda</li>
              <li><code className="bg-gray-100 p-1 rounded-lg text-sm">Ctrl/Cmd+V</code>: Pega contenido</li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-4">
            <h5 className="font-semibold text-gray-800 text-lg mb-2">Teclado (celda editando)</h5>
            <ul className="list-disc list-inside text-gray-700 ml-2 space-y-1">
              <li><code className="bg-gray-100 p-1 rounded-lg text-sm">Enter</code>: Guarda y navega hacia abajo</li>
              <li><code className="bg-gray-100 p-1 rounded-lg text-sm">Escape</code>: Cancela edición y restaura valor anterior</li>
              <li><code className="bg-gray-100 p-1 rounded-lg text-sm">Tab</code>: Guarda y navega a la derecha</li>
              <li><code className="bg-gray-100 p-1 rounded-lg text-sm">Shift+Tab</code>: Guarda y navega a la izquierda</li>
              <li><code className="bg-gray-100 p-1 rounded-lg text-sm">Arrow Up/Down</code>: Guarda y navega en esa dirección</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}