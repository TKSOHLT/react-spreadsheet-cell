export default function Selection() {
  return (
    <div className="flex flex-col text-start w-full max-w-4xl mx-auto px-6 py-8 space-y-8">
      {/* Título principal */}
      <h2 className="text-4xl font-bold text-gray-900 border-b-2 border-gray-200 pb-4">Selección</h2>

      {/* Descripción General */}
      <section className="flex flex-col space-y-3">
        <p className="text-gray-700 leading-relaxed text-lg">
          El sistema de selección permite seleccionar una o múltiples celdas de manera intuitiva, soportando selección simple, selección múltiple con
          Shift, y selección por arrastre con el mouse, similar a las hojas de cálculo tradicionales.
        </p>
      </section>

      {/* Selección Simple */}
      <section className="flex flex-col space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">Selección Simple</h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          La forma más básica de selección es hacer clic en una celda o navegar con las teclas de dirección.
        </p>

        <div className="bg-white border border-gray-300 rounded-lg p-4 space-y-3">
          <div>
            <h5 className="font-semibold text-gray-800 text-lg">Click en Celda</h5>
            <p className="text-gray-700">
              Hacer clic sobre una celda la selecciona y la convierte en la celda activa. Cualquier selección múltiple previa se limpia.
            </p>
          </div>

          <div>
            <h5 className="font-semibold text-gray-800 text-lg">Teclas de Navegación</h5>
            <p className="text-gray-700">Usar las flechas del teclado (↑ ↓ ← →) mueve la selección a la celda adyacente en esa dirección.</p>
          </div>
        </div>
      </section>

      {/* Selección Múltiple */}
      <section className="flex flex-col space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">Selección Múltiple</h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          Puedes seleccionar múltiples celdas de varias formas para realizar operaciones en bloque como copiar, pegar o eliminar.
        </p>

        <div className="overflow-x-auto rounded-xl">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b border-slate-200">Método</th>
                <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b border-slate-200">Acción</th>
                <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b border-slate-200">Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="px-4 py-2 font-mono text-sm text-blue-600">Shift + Click</td>
                <td className="px-4 py-2">Selecciona un rango rectangular</td>
                <td className="px-4 py-2">Extiende la selección desde la celda activa hasta la celda clickeada</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="px-4 py-2 font-mono text-sm text-blue-600">Shift + ↑↓←→</td>
                <td className="px-4 py-2">Extiende la selección</td>
                <td className="px-4 py-2">Amplía el rango de selección en la dirección de la flecha</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-sm text-blue-600">Click + Arrastrar</td>
                <td className="px-4 py-2">Selección por arrastre</td>
                <td className="px-4 py-2">Mantén presionado y arrastra para seleccionar un rango de celdas</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Selección por Arrastre */}
      <section className="flex flex-col space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">Selección por Arrastre (Drag to Select)</h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          Puedes seleccionar múltiples celdas manteniendo presionado el botón del mouse y arrastrando sobre las celdas que deseas seleccionar.
        </p>

        <div className="bg-white border border-gray-300 rounded-lg p-4">
          <h5 className="font-semibold text-gray-800 text-lg mb-2">Cómo funciona:</h5>
          <ol className="list-decimal list-inside text-gray-700 ml-2 space-y-2">
            <li>Haz clic y mantén presionado en una celda inicial</li>
            <li>Arrastra el mouse sobre las celdas que deseas incluir en la selección</li>
            <li>Suelta el botón del mouse para finalizar la selección</li>
            <li>El rango seleccionado incluye todas las celdas entre la celda inicial y la celda final</li>
          </ol>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-blue-800 text-sm">
            <strong>Nota:</strong> Durante el arrastre, el cursor cambia a <span className="font-mono">cursor-cell</span> para indicar que estás en
            modo de selección. El componente automáticamente hace scroll si arrastras cerca de los bordes del contenedor.
          </p>
        </div>
      </section>

      {/* Estados Visuales */}
      <section className="flex flex-col space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">Estados Visuales de Selección</h3>
        <p className="text-gray-700 leading-relaxed text-lg">Las celdas tienen diferentes estilos visuales según su estado de selección.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <h5 className="font-semibold text-gray-800 text-lg mb-2">Celda Seleccionada (Principal)</h5>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-16 h-10 bg-blue-50 border-4 border-blue-500 rounded"></div>
              <span className="text-sm text-gray-600">Borde azul grueso</span>
            </div>
            <p className="text-gray-700 text-sm">La celda activa que recibe el foco y responde a eventos de teclado.</p>
          </div>

          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <h5 className="font-semibold text-gray-800 text-lg mb-2">Celdas en Selección Múltiple</h5>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-16 h-10 bg-blue-100 border border-blue-300 rounded"></div>
              <span className="text-sm text-gray-600">Fondo azul claro</span>
            </div>
            <p className="text-gray-700 text-sm">Celdas incluidas en un rango de selección múltiple.</p>
          </div>

          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <h5 className="font-semibold text-gray-800 text-lg mb-2">Celda en Edición</h5>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-16 h-10 bg-white border border-blue-600 rounded shadow-inner"></div>
              <span className="text-sm text-gray-600">Borde interno azul</span>
            </div>
            <p className="text-gray-700 text-sm">Cuando estás editando el contenido de una celda activamente.</p>
          </div>

          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <h5 className="font-semibold text-gray-800 text-lg mb-2">Celdas Copiadas</h5>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-16 h-10 bg-green-50 border-2 border-dashed border-green-500 rounded"></div>
              <span className="text-sm text-gray-600">Borde verde punteado</span>
            </div>
            <p className="text-gray-700 text-sm">Indica las celdas que has copiado y están listas para pegar.</p>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-blue-800 text-sm">
            <strong>Nota:</strong> Puedes modificar estos colores, para más información ve a la sección "Propiedades".
          </p>
        </div>
      </section>

      {/* Operaciones con Selección Múltiple */}
      <section className="flex flex-col space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">Operaciones con Selección Múltiple</h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          Cuando tienes múltiples celdas seleccionadas, puedes realizar varias operaciones sobre todas ellas.
        </p>

        <div className="overflow-x-auto rounded-xl">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b border-slate-200">Operación</th>
                <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b border-slate-200">Atajo</th>
                <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b border-slate-200">Resultado</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="px-4 py-2">Copiar</td>
                <td className="px-4 py-2 font-mono text-sm text-blue-600">Ctrl+C / Cmd+C</td>
                <td className="px-4 py-2">Copia todas las celdas seleccionadas al clipboard</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="px-4 py-2">Pegar</td>
                <td className="px-4 py-2 font-mono text-sm text-blue-600">Ctrl+V / Cmd+V</td>
                <td className="px-4 py-2">Pega los datos copiados, repitiendo el patrón si es necesario</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Eliminar</td>
                <td className="px-4 py-2 font-mono text-sm text-blue-600">Delete</td>
                <td className="px-4 py-2">Limpia el contenido de todas las celdas seleccionadas</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>


      {/* Deselección */}
      <section className="flex flex-col space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">Deselección</h3>
        <p className="text-gray-700 leading-relaxed text-lg">Puedes limpiar la selección actual de varias formas.</p>

        <div className="bg-white border border-gray-300 rounded-lg p-4">
          <h5 className="font-semibold text-gray-800 text-lg mb-2">Formas de deseleccionar:</h5>
          <ul className="list-disc list-inside text-gray-700 ml-2 space-y-1">
            <li>Hacer clic fuera de cualquier celda (en el área vacía)</li>
            <li>Hacer clic en una celda diferente sin Shift (cambia la selección)</li>
            <li>Entrar en modo de edición (limpia la selección múltiple automáticamente)</li>
          </ul>
        </div>
      </section>

      {/* Comportamiento Especial */}
      <section className="flex flex-col space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">Comportamiento Especial</h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          Algunos escenarios tienen comportamientos específicos diseñados para mejorar la experiencia de usuario.
        </p>

        <div className="space-y-4">
          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <h5 className="font-semibold text-gray-800 text-lg mb-2">Edición Limpia Selección Múltiple</h5>
            <p className="text-gray-700">
              Cuando entras en modo de edición en cualquier celda, la selección múltiple se limpia automáticamente para evitar ediciones accidentales
              en múltiples celdas.
            </p>
          </div>

          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <h5 className="font-semibold text-gray-800 text-lg mb-2">Scroll Automático</h5>
            <p className="text-gray-700">
              Al extender la selección con teclado o arrastre, el componente hace scroll automáticamente para mantener la celda actual visible.
            </p>
          </div>

          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <h5 className="font-semibold text-gray-800 text-lg mb-2">Celdas Deshabilitadas</h5>
            <p className="text-gray-700">
              Las celdas con la propiedad <span className="font-mono text-sm bg-gray-100 px-1 rounded">disabled=true</span> no pueden ser
              seleccionadas ni incluidas en rangos de selección múltiple.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
