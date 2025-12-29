export default function Personalization() {
  return (
    <>
      {/* Título principal */}
      <h2 className="text-4xl font-bold text-gray-900 border-b-2 border-gray-200 pb-4">Personalización</h2>

      {/* Introducción */}
      <section className="flex flex-col space-y-3">
        <p className="text-gray-700 leading-relaxed text-lg">
          El componente <code className="bg-gray-100 px-2 py-1 rounded text-sm">SpreadsheetCell</code> ofrece un sistema completo de personalización
          visual a través de props que aceptan clases de Tailwind CSS. Esto permite adaptar completamente la apariencia de las celdas para que
          coincidan con el diseño de tu aplicación.
        </p>

        {/* Props de Dimensiones */}
        <h3 className="text-2xl font-semibold text-gray-800 mt-6">Props de Dimensiones</h3>
        <p className="text-gray-700 leading-relaxed text-lg">Controla el tamaño y espaciado de las celdas.</p>

        <div className="overflow-x-auto rounded-xl">
          <table className="min-w-full bg-white">
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
                <td className="px-4 py-2 font-mono text-sm text-blue-600">padding</td>
                <td className="px-4 py-2 font-mono text-sm">string</td>
                <td className="px-4 py-2 font-mono text-sm">'px-2 py-1'</td>
                <td className="px-4 py-2">Padding general de la celda</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="px-4 py-2 font-mono text-sm text-blue-600">width</td>
                <td className="px-4 py-2 font-mono text-sm">string</td>
                <td className="px-4 py-2 font-mono text-sm">'w-full'</td>
                <td className="px-4 py-2">Ancho de la celda</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="px-4 py-2 font-mono text-sm text-blue-600">height</td>
                <td className="px-4 py-2 font-mono text-sm">string</td>
                <td className="px-4 py-2 font-mono text-sm">'h-8'</td>
                <td className="px-4 py-2">Altura de la celda</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-sm text-blue-600">insetPadding</td>
                <td className="px-4 py-2 font-mono text-sm">string</td>
                <td className="px-4 py-2 font-mono text-sm">'px-2'</td>
                <td className="px-4 py-2">Padding del input en modo edición</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Props de Colores de Fondo */}
        <h3 className="text-2xl font-semibold text-gray-800 mt-6">Props de Colores de Fondo</h3>
        <p className="text-gray-700 leading-relaxed text-lg">Define los colores de fondo según el estado de la celda.</p>

        <div className="overflow-x-auto rounded-xl">
          <table className="min-w-full bg-white">
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
                <td className="px-4 py-2 font-mono text-sm text-blue-600">bgColorInactive</td>
                <td className="px-4 py-2 font-mono text-sm">string</td>
                <td className="px-4 py-2 font-mono text-sm">'bg-white'</td>
                <td className="px-4 py-2">Color de fondo en estado normal</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="px-4 py-2 font-mono text-sm text-blue-600">bgColorActive</td>
                <td className="px-4 py-2 font-mono text-sm">string</td>
                <td className="px-4 py-2 font-mono text-sm">'bg-white'</td>
                <td className="px-4 py-2">Color de fondo en modo edición</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-sm text-blue-600">bgColorDisabled</td>
                <td className="px-4 py-2 font-mono text-sm">string</td>
                <td className="px-4 py-2 font-mono text-sm">'bg-gray-100'</td>
                <td className="px-4 py-2">Color de fondo cuando está deshabilitada</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Props de Bordes y Anillos */}
        <h3 className="text-2xl font-semibold text-gray-800 mt-6">Props de Bordes y Anillos</h3>
        <p className="text-gray-700 leading-relaxed text-lg">Personaliza los bordes y efectos de anillo de las celdas.</p>

        <div className="overflow-x-auto rounded-xl">
          <table className="min-w-full bg-white">
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
                <td className="px-4 py-2 font-mono text-sm text-blue-600">ringColorInactive</td>
                <td className="px-4 py-2 font-mono text-sm">string</td>
                <td className="px-4 py-2 font-mono text-sm">'ring-gray-200'</td>
                <td className="px-4 py-2">Color del borde en estado normal</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="px-4 py-2 font-mono text-sm text-blue-600">ringColorActive</td>
                <td className="px-4 py-2 font-mono text-sm">string</td>
                <td className="px-4 py-2 font-mono text-sm">'inset-ring-blue-600'</td>
                <td className="px-4 py-2">Color del borde en modo edición</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="px-4 py-2 font-mono text-sm text-blue-600">ringWidthInactive</td>
                <td className="px-4 py-2 font-mono text-sm">string</td>
                <td className="px-4 py-2 font-mono text-sm">'inset-ring-[0]'</td>
                <td className="px-4 py-2">Grosor del borde en estado normal</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="px-4 py-2 font-mono text-sm text-blue-600">ringWidthActive</td>
                <td className="px-4 py-2 font-mono text-sm">string</td>
                <td className="px-4 py-2 font-mono text-sm">'inset-ring-1'</td>
                <td className="px-4 py-2">Grosor del borde en modo edición</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-sm text-blue-600">hoverRingColor</td>
                <td className="px-4 py-2 font-mono text-sm">string</td>
                <td className="px-4 py-2 font-mono text-sm">'hover:ring-gray-300'</td>
                <td className="px-4 py-2">Color del borde al pasar el mouse</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Props de Selección Simple */}
        <h3 className="text-2xl font-semibold text-gray-800 mt-6">Props de Selección Simple</h3>
        <p className="text-gray-700 leading-relaxed text-lg">Estilos para cuando una celda está seleccionada individualmente.</p>

        <div className="overflow-x-auto rounded-xl">
          <table className="min-w-full bg-white">
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
                <td className="px-4 py-2 font-mono text-sm text-blue-600">selectedBgColor</td>
                <td className="px-4 py-2 font-mono text-sm">string</td>
                <td className="px-4 py-2 font-mono text-sm">'bg-blue-50'</td>
                <td className="px-4 py-2">Color de fondo cuando está seleccionada</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="px-4 py-2 font-mono text-sm text-blue-600">selectedRingColor</td>
                <td className="px-4 py-2 font-mono text-sm">string</td>
                <td className="px-4 py-2 font-mono text-sm">'inset-ring-blue-500'</td>
                <td className="px-4 py-2">Color del borde cuando está seleccionada</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-sm text-blue-600">selectedRingWidth</td>
                <td className="px-4 py-2 font-mono text-sm">string</td>
                <td className="px-4 py-2 font-mono text-sm">'inset-ring-3'</td>
                <td className="px-4 py-2">Grosor del borde cuando está seleccionada</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Props de Multi-Selección */}
        <h3 className="text-2xl font-semibold text-gray-800 mt-6">Props de Multi-Selección</h3>
        <p className="text-gray-700 leading-relaxed text-lg">Estilos para celdas que forman parte de una selección múltiple.</p>

        <div className="overflow-x-auto rounded-xl">
          <table className="min-w-full bg-white">
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
                <td className="px-4 py-2 font-mono text-sm text-blue-600">multiSelectBgColor</td>
                <td className="px-4 py-2 font-mono text-sm">string</td>
                <td className="px-4 py-2 font-mono text-sm">'bg-blue-100'</td>
                <td className="px-4 py-2">Color de fondo en multi-selección</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="px-4 py-2 font-mono text-sm text-blue-600">multiSelectRingColor</td>
                <td className="px-4 py-2 font-mono text-sm">string</td>
                <td className="px-4 py-2 font-mono text-sm">'ring-blue-300'</td>
                <td className="px-4 py-2">Color del borde en multi-selección</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-sm text-blue-600">multiSelectRingWidth</td>
                <td className="px-4 py-2 font-mono text-sm">string</td>
                <td className="px-4 py-2 font-mono text-sm">'ring-1'</td>
                <td className="px-4 py-2">Grosor del borde en multi-selección</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Props de Estado Copiado */}
        <h3 className="text-2xl font-semibold text-gray-800 mt-6">Props de Estado Copiado</h3>
        <p className="text-gray-700 leading-relaxed text-lg">Estilos para celdas que han sido copiadas al portapapeles.</p>

        <div className="overflow-x-auto rounded-xl">
          <table className="min-w-full bg-white">
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
                <td className="px-4 py-2 font-mono text-sm text-blue-600">copiedBgColor</td>
                <td className="px-4 py-2 font-mono text-sm">string</td>
                <td className="px-4 py-2 font-mono text-sm">'bg-green-50'</td>
                <td className="px-4 py-2">Color de fondo cuando está copiada</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-sm text-blue-600">copiedOutlineColor</td>
                <td className="px-4 py-2 font-mono text-sm">string</td>
                <td className="px-4 py-2 font-mono text-sm">'outline-green-500'</td>
                <td className="px-4 py-2">Color del contorno punteado cuando está copiada</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Ejemplos de Personalización */}
        <h3 className="text-2xl font-semibold text-gray-800 mt-6">Ejemplos de Personalización</h3>
        <p className="text-gray-700 leading-relaxed text-lg">A continuación se muestran algunos ejemplos comunes de personalización visual.</p>

        <div className="space-y-4">
          {/* Ejemplo 1: Tema Oscuro */}
          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <h5 className="font-semibold text-gray-800 text-lg mb-2">Tema Oscuro</h5>
            <p className="text-gray-700 mb-3">Celdas con colores oscuros y bordes sutiles para interfaces de tema oscuro.</p>
            <div className="bg-gray-900 rounded-lg p-3 overflow-x-auto">
              <pre className="text-gray-300 font-mono text-xs">
                {`<SpreadsheetCell 
  cellId="0-0"
  row={0}
  col={0}
  bgColorInactive="bg-gray-800"
  bgColorActive="bg-gray-700"
  ringColorInactive="ring-gray-700"
  ringColorActive="inset-ring-blue-400"
  selectedBgColor="bg-gray-700"
  selectedRingColor="inset-ring-blue-400"
  hoverRingColor="hover:ring-gray-600"
/>`}
              </pre>
            </div>
          </div>

          {/* Ejemplo 2: Tema Minimalista */}
          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <h5 className="font-semibold text-gray-800 text-lg mb-2">Tema Minimalista</h5>
            <p className="text-gray-700 mb-3">Diseño limpio con bordes mínimos y espaciado generoso.</p>
            <div className="bg-gray-900 rounded-lg p-3 overflow-x-auto">
              <pre className="text-gray-300 font-mono text-xs">
                {`<SpreadsheetCell 
  cellId="0-0"
  row={0}
  col={0}
  padding="px-4 py-3"
  height="h-12"
  bgColorInactive="bg-gray-50"
  ringWidthInactive="inset-ring-0"
  ringWidthActive="inset-ring-2"
  ringColorActive="inset-ring-gray-900"
  selectedBgColor="bg-white"
  selectedRingColor="inset-ring-gray-900"
  selectedRingWidth="inset-ring-2"
/>`}
              </pre>
            </div>
          </div>

          {/* Ejemplo 3: Colores Vibrantes */}
          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <h5 className="font-semibold text-gray-800 text-lg mb-2">Colores Vibrantes</h5>
            <p className="text-gray-700 mb-3">Interfaz colorida con énfasis visual en las interacciones.</p>
            <div className="bg-gray-900 rounded-lg p-3 overflow-x-auto">
              <pre className="text-gray-300 font-mono text-xs">
                {`<SpreadsheetCell 
  cellId="0-0"
  row={0}
  col={0}
  bgColorInactive="bg-purple-50"
  bgColorActive="bg-white"
  ringColorInactive="ring-purple-200"
  ringColorActive="inset-ring-purple-500"
  ringWidthActive="inset-ring-2"
  selectedBgColor="bg-purple-100"
  selectedRingColor="inset-ring-purple-600"
  selectedRingWidth="inset-ring-3"
  multiSelectBgColor="bg-purple-200"
  multiSelectRingColor="ring-purple-400"
  copiedBgColor="bg-emerald-100"
  copiedOutlineColor="outline-emerald-600"
  hoverRingColor="hover:ring-purple-300"
/>`}
              </pre>
            </div>
          </div>

          {/* Ejemplo 4: Celdas Compactas */}
          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <h5 className="font-semibold text-gray-800 text-lg mb-2">Celdas Compactas</h5>
            <p className="text-gray-700 mb-3">Ideal para mostrar más datos en menos espacio.</p>
            <div className="bg-gray-900 rounded-lg p-3 overflow-x-auto">
              <pre className="text-gray-300 font-mono text-xs">
                {`<SpreadsheetCell 
  cellId="0-0"
  row={0}
  col={0}
  padding="px-1 py-0.5"
  height="h-6"
  insetPadding="px-1"
  width="w-24"
/>`}
              </pre>
            </div>
          </div>

          {/* Ejemplo 5: Celdas Espaciosas */}
          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <h5 className="font-semibold text-gray-800 text-lg mb-2">Celdas Espaciosas</h5>
            <p className="text-gray-700 mb-3">Mayor comodidad de lectura y edición con espaciado generoso.</p>
            <div className="bg-gray-900 rounded-lg p-3 overflow-x-auto">
              <pre className="text-gray-300 font-mono text-xs">
                {`<SpreadsheetCell 
  cellId="0-0"
  row={0}
  col={0}
  padding="px-4 py-3"
  height="h-14"
  insetPadding="px-4"
  width="w-48"
/>`}
              </pre>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
