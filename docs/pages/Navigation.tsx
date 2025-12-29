export default function Navigation() {
  return (
    <div className="flex flex-col text-start w-full max-w-4xl mx-auto px-6 py-8 space-y-8">
      {/* Título principal */}
      <h2 className="text-4xl font-bold text-gray-900 border-b-2 border-gray-200 pb-4">Navegación</h2>

      {/* Descripción General */}
      <section className="flex flex-col space-y-3">
        <p className="text-gray-700 leading-relaxed text-lg">
          El sistema de navegación permite moverse entre celdas usando el teclado o el mouse de manera intuitiva y eficiente, similar a aplicaciones de hojas de cálculo tradicionales como Excel o Google Sheets.
        </p>
      </section>

      {/* Navegación con Teclado */}
      <section className="flex flex-col space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">Navegación con Teclado</h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          El componente soporta navegación completa con teclas de dirección y atajos de teclado.
        </p>

        <div className="overflow-x-auto rounded-xl">
          <table className="min-w-full bg-white ">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b border-slate-200">Tecla</th>
                <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b border-slate-200">Acción</th>
                <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b border-slate-200">Contexto</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="px-4 py-2 font-mono text-sm text-blue-600">↑ ↓ ← →</td>
                <td className="px-4 py-2">Navega a la celda adyacente en esa dirección</td>
                <td className="px-4 py-2">Celda seleccionada, no editando</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="px-4 py-2 font-mono text-sm text-blue-600">Tab</td>
                <td className="px-4 py-2">Navega a la celda de la derecha</td>
                <td className="px-4 py-2">Celda seleccionada, no editando</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="px-4 py-2 font-mono text-sm text-blue-600">Enter</td>
                <td className="px-4 py-2">Guarda cambios y navega hacia abajo</td>
                <td className="px-4 py-2">Celda editando</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="px-4 py-2 font-mono text-sm text-blue-600">Tab</td>
                <td className="px-4 py-2">Guarda cambios y navega a la derecha</td>
                <td className="px-4 py-2">Celda editando</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-sm text-blue-600">↑ ↓</td>
                <td className="px-4 py-2">Guarda cambios y navega en esa dirección</td>
                <td className="px-4 py-2">Celda editando</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Navegación con Mouse */}
      <section className="flex flex-col space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">Navegación con Mouse</h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          Puedes moverte entre celdas haciendo clic directamente sobre ellas.
        </p>

        <div className="bg-white border border-gray-300 rounded-lg p-4 space-y-3">
          <div>
            <h5 className="font-semibold text-gray-800 text-lg">Click Simple</h5>
            <p className="text-gray-700">Navega a la celda haciendo clic sobre ella. La celda clickeada se convierte en la celda activa.</p>
          </div>

          <div>
            <h5 className="font-semibold text-gray-800 text-lg">Doble Click</h5>
            <p className="text-gray-700">Navega a la celda y entra directamente en modo edición. No es necesario hacer clic y luego presionar Enter.</p>
          </div>
        </div>
      </section>

      {/* Auto-scroll */}
      <section className="flex flex-col space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">Auto-scroll</h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          Cuando navegas con teclado, el componente automáticamente hace scroll para mantener la celda activa visible en el viewport.
        </p>
      </section>

      {/* Límites de Navegación */}
      <section className="flex flex-col space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">Límites de Navegación</h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          El sistema respeta los límites de tu tabla. Si intentas navegar más allá del borde (por ejemplo, presionar flecha derecha en la última columna), la navegación no ocurre y permaneces en la celda actual.
        </p>

        <div className="bg-white border border-gray-300 rounded-lg p-4">
          <h5 className="font-semibold text-gray-800 text-lg mb-2">Comportamiento en bordes:</h5>
          <ul className="list-disc list-inside text-gray-700 ml-2 space-y-1">
            <li>Flecha arriba en la primera fila: no hace nada</li>
            <li>Flecha abajo en la última fila: no hace nada</li>
            <li>Flecha izquierda en la primera columna: no hace nada</li>
            <li>Flecha derecha en la última columna: no hace nada</li>
          </ul>
        </div>
      </section>

      {/* Modos de Navegación */}
      <section className="flex flex-col space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">Modos de Navegación</h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          El componente tiene dos modos que afectan el comportamiento de las teclas de navegación:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <h5 className="font-semibold text-gray-800 text-lg mb-2">Modo Selección</h5>
            <p className="text-gray-700 text-sm mb-2">Cuando la celda está seleccionada pero no editando.</p>
            <ul className="list-disc list-inside text-gray-700 text-sm ml-2 space-y-1">
              <li>Las flechas navegan entre celdas</li>
              <li>Enter inicia edición (sin navegar)</li>
              <li>Escribir inicia edición</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <h5 className="font-semibold text-gray-800 text-lg mb-2">Modo Edición</h5>
            <p className="text-gray-700 text-sm mb-2">Cuando la celda está siendo editada.</p>
            <ul className="list-disc list-inside text-gray-700 text-sm ml-2 space-y-1">
              <li>Enter/Tab guardan y navegan</li>
              <li>↑↓ guardan y navegan verticalmente</li>
              <li>Escape guarda y permanece en la celda</li>
              <li>←→ mueven el cursor dentro del texto</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}