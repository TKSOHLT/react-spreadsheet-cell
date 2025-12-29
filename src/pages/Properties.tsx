export default function Properties() {
  return (
    <>
      {/* Título principal */}
      <h2 className="text-4xl font-bold text-gray-900 border-b-2 border-gray-200 pb-4">Propiedades</h2>

      {/* SpreadsheetCell */}
      <section className="flex flex-col space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">SpreadsheetCell</h3>
        <p className="text-gray-700 leading-relaxed text-lg">A continuación se muestran todas las propiedades del componente.</p>

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

        <h3 className="text-2xl font-semibold text-gray-800">Tipos de Celda</h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          El componente soporta diferentes tipos de celdas con controles de edición específicos para cada tipo.
        </p>

        <div className="space-y-4">
          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <h5 className="font-semibold text-gray-800 text-lg mb-2">Texto (text)</h5>
            <p className="text-gray-700 mb-3">Permite escribir texto libre sin restricciones. Es el tipo por defecto.</p>
            <div className="bg-gray-900 rounded-lg p-3 overflow-x-auto">
              <pre className="text-gray-300 font-mono text-xs">
                {`<SpreadsheetCell 
  cellType="text"
  cellId="0-0"
  row={0}
  col={0}
/>`}
              </pre>
            </div>
          </div>

          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <h5 className="font-semibold text-gray-800 text-lg mb-2">Número (number)</h5>
            <p className="text-gray-700 mb-3">Permite ingresar solo valores numéricos con opciones de min, max y step.</p>
            <div className="bg-gray-900 rounded-lg p-3 overflow-x-auto">
              <pre className="text-gray-300 font-mono text-xs">
                {`<SpreadsheetCell 
  cellType="number"
  cellId="0-1"
  row={0}
  col={1}
  min={0}
  max={100}
  step={0.5}
/>`}
              </pre>
            </div>
          </div>

          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <h5 className="font-semibold text-gray-800 text-lg mb-2">Selección (select)</h5>
            <p className="text-gray-700 mb-3">Muestra un dropdown con opciones predefinidas para seleccionar.</p>
            <div className="bg-gray-900 rounded-lg p-3 overflow-x-auto">
              <pre className="text-gray-300 font-mono text-xs">
                {`<SpreadsheetCell 
  cellType="select"
  cellId="0-2"
  row={0}
  col={2}
  selectOptions={[
    { value: 'option1', label: 'Opción 1' },
    { value: 'option2', label: 'Opción 2' },
    { value: 'option3', label: 'Opción 3' }
  ]}
/>`}
              </pre>
            </div>
          </div>
        </div>

        {/* Interacciones del Usuario */}
        <h4 className="text-xl font-semibold text-gray-800 mt-4">Interacciones del Usuario</h4>

        <div className="space-y-4">
          <div className="bg-white border border-slate-200 rounded-lg p-4">
            <h5 className="font-semibold text-gray-800 text-lg mb-2">Mouse</h5>
            <ul className="list-disc list-inside text-gray-700 ml-2 space-y-1">
              <li>
                <code className="bg-gray-100 p-1 rounded-lg text-sm">onClick</code>: Selecciona la celda (con Shift extiende selección)
              </li>
              <li>
                <code className="bg-gray-100 p-1 rounded-lg text-sm">onDoubleClick</code>: Inicia modo edición
              </li>
              <li>
                <code className="bg-gray-100 p-1 rounded-lg text-sm">onMouseDown</code>: Inicia drag-to-select
              </li>
              <li>
                <code className="bg-gray-100 p-1 rounded-lg text-sm">onMouseEnter</code>: Actualiza selección durante drag
              </li>
              <li>
                <code className="bg-gray-100 p-1 rounded-lg text-sm">onMouseUp</code>: Finaliza drag-to-select
              </li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-4">
            <h5 className="font-semibold text-gray-800 text-lg mb-2">Teclado (celda seleccionada, no editando)</h5>
            <ul className="list-disc list-inside text-gray-700 ml-2 space-y-1">
              <li>Teclas alfanuméricas: Inicia edición y escribe el carácter</li>
              <li>
                <code className="bg-gray-100 p-1 rounded-lg text-sm">Enter</code>: Inicia edición
              </li>
              <li>
                <code className="bg-gray-100 p-1 rounded-lg text-sm">Delete</code>: Borra contenido
              </li>
              <li>
                <code className="bg-gray-100 p-1 rounded-lg text-sm">Ctrl/Cmd+C</code>: Copia la celda
              </li>
              <li>
                <code className="bg-gray-100 p-1 rounded-lg text-sm">Ctrl/Cmd+V</code>: Pega contenido
              </li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-4">
            <h5 className="font-semibold text-gray-800 text-lg mb-2">Teclado (celda editando)</h5>
            <ul className="list-disc list-inside text-gray-700 ml-2 space-y-1">
              <li>
                <code className="bg-gray-100 p-1 rounded-lg text-sm">Enter</code>: Guarda y navega hacia abajo
              </li>
              <li>
                <code className="bg-gray-100 p-1 rounded-lg text-sm">Escape</code>: Cancela edición y restaura valor anterior
              </li>
              <li>
                <code className="bg-gray-100 p-1 rounded-lg text-sm">Tab</code>: Guarda y navega a la derecha
              </li>
              <li>
                <code className="bg-gray-100 p-1 rounded-lg text-sm">Shift+Tab</code>: Guarda y navega a la izquierda
              </li>
              <li>
                <code className="bg-gray-100 p-1 rounded-lg text-sm">Arrow Up/Down</code>: Guarda y navega en esa dirección
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
