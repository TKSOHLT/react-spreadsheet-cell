export default function CopyPaste() {
  return (
    <div className="flex flex-col text-start w-full max-w-4xl mx-auto px-6 py-8 space-y-8">
      {/* Título principal */}
      <h2 className="text-4xl font-bold text-gray-900 border-b-2 border-gray-200 pb-4">Copiar y Pegar</h2>

      {/* Descripción General */}
      <section className="flex flex-col space-y-3">
        <p className="text-gray-700 leading-relaxed text-lg">
          El sistema de copiar y pegar permite duplicar datos entre celdas de manera eficiente, soportando tanto copias simples de una celda como
          copias múltiples con patrones de repetición. Es totalmente compatible con el portapapeles del sistema operativo.
        </p>
      </section>

      {/* Copiar Celdas */}
      <section className="flex flex-col space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">Copiar Celdas</h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          Puedes copiar el contenido de una o múltiples celdas usando el atajo de teclado estándar.
        </p>

        <div className="overflow-x-auto rounded-xl">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b border-slate-200">Atajo</th>
                <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b border-slate-200">Acción</th>
                <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b border-slate-200">Resultado</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="px-4 py-2 font-mono text-sm text-blue-600">Ctrl+C / Cmd+C</td>
                <td className="px-4 py-2">Copiar celda o rango seleccionado</td>
                <td className="px-4 py-2">Las celdas copiadas se marcan con borde verde punteado</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <h5 className="font-semibold text-gray-800 text-lg mb-2">Copiar Celda Individual</h5>
            <p className="text-gray-700 text-sm mb-2">Selecciona una celda y presiona Ctrl+C o Cmd+C.</p>
            <ul className="list-disc list-inside text-gray-700 text-sm ml-2 space-y-1">
              <li>El valor se copia al portapapeles</li>
              <li>La celda se marca visualmente</li>
              <li>Puedes pegarla en otras aplicaciones</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <h5 className="font-semibold text-gray-800 text-lg mb-2">Copiar Rango Múltiple</h5>
            <p className="text-gray-700 text-sm mb-2">Selecciona múltiples celdas y presiona Ctrl+C o Cmd+C.</p>
            <ul className="list-disc list-inside text-gray-700 text-sm ml-2 space-y-1">
              <li>Todos los valores se copian como tabla</li>
              <li>El rango completo se marca visualmente</li>
              <li>Se preserva la estructura de filas y columnas</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Indicador Visual de Copiado */}
      <section className="flex flex-col space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">Indicador Visual de Copiado</h3>
        <p className="text-gray-700 leading-relaxed text-lg">Las celdas copiadas se identifican claramente con un estilo visual distintivo.</p>

        <div className="bg-white border border-gray-300 rounded-lg p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-24 h-12 bg-green-50 border-2 border-dashed border-green-500 rounded flex items-center justify-center">
              <span className="text-gray-600 text-sm">Copiada</span>
            </div>
            <span className="text-gray-700">Borde verde punteado con fondo verde claro</span>
          </div>
          <p className="text-gray-700 text-sm">
            Este indicador permanece visible hasta que pegues los datos o copies algo nuevo, ayudándote a saber qué datos están en el portapapeles.
          </p>
        </div>
      </section>

      {/* Pegar Celdas */}
      <section className="flex flex-col space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">Pegar Celdas</h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          El pegado soporta múltiples escenarios y adapta su comportamiento según la fuente de datos y el destino.
        </p>

        <div className="overflow-x-auto rounded-xl">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b border-slate-200">Atajo</th>
                <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b border-slate-200">Acción</th>
                <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b border-slate-200">Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="px-4 py-2 font-mono text-sm text-blue-600">Ctrl+V / Cmd+V</td>
                <td className="px-4 py-2">Pegar datos</td>
                <td className="px-4 py-2">Pega desde el portapapeles del spreadsheet o del sistema</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Modos de Pegado */}
      <section className="flex flex-col space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">Modos de Pegado</h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          El sistema adapta automáticamente el comportamiento de pegado según el contexto y el tamaño de los datos.
        </p>

        <div className="space-y-4">
          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <h5 className="font-semibold text-gray-800 text-lg mb-2">1. Pegado Simple (Celda Individual)</h5>
            <p className="text-gray-700 mb-3">Pegar una celda copiada en una nueva ubicación.</p>
            <div className="bg-gray-50 border border-gray-200 rounded p-3 text-sm">
              <p className="font-mono text-gray-700 mb-2">Copiar: A1 (valor: "Hola")</p>
              <p className="font-mono text-gray-700 mb-2">Pegar en: B2</p>
              <p className="font-mono text-green-600">Resultado: B2 = "Hola"</p>
            </div>
          </div>

          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <h5 className="font-semibold text-gray-800 text-lg mb-2">2. Pegado de Rango a Celda Individual</h5>
            <p className="text-gray-700 mb-3">Pegar un rango copiado comenzando desde una celda específica.</p>
            <div className="bg-gray-50 border border-gray-200 rounded p-3 text-sm">
              <p className="font-mono text-gray-700 mb-2">Copiar: A1:B2 (2x2)</p>
              <p className="font-mono text-gray-700 mb-2">Pegar en: D4</p>
              <p className="font-mono text-green-600">Resultado: D4:E5 recibe los datos (2x2)</p>
            </div>
          </div>

          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <h5 className="font-semibold text-gray-800 text-lg mb-2">3. Pegado con Repetición de Patrón</h5>
            <p className="text-gray-700 mb-3">Pegar datos copiados en un rango más grande, repitiendo el patrón automáticamente.</p>
            <div className="bg-gray-50 border border-gray-200 rounded p-3 text-sm">
              <p className="font-mono text-gray-700 mb-2">Copiar: A1:A2 (2 celdas verticales)</p>
              <p className="font-mono text-gray-700 mb-2">Seleccionar destino: B1:B6 (6 celdas)</p>
              <p className="font-mono text-gray-700 mb-2">Pegar con Ctrl+V</p>
              <p className="font-mono text-green-600">Resultado: El patrón se repite 3 veces en B1:B6</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded p-3 mt-3">
              <p className="text-blue-800 text-sm">
                <strong>Nota:</strong> Este modo usa el operador módulo para repetir el patrón copiado tantas veces como sea necesario para llenar el
                rango seleccionado.
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <h5 className="font-semibold text-gray-800 text-lg mb-2">4. Pegado desde Otras Aplicaciones</h5>
            <p className="text-gray-700 mb-3">Pegar datos copiados desde Excel, Google Sheets u otras aplicaciones.</p>
            <div className="bg-gray-50 border border-gray-200 rounded p-3 text-sm">
              <p className="text-gray-700 mb-2">El sistema detecta automáticamente:</p>
              <ul className="list-disc list-inside text-gray-700 ml-2 space-y-1">
                <li>
                  Tabs (<span className="font-mono">\t</span>) como separadores de columnas
                </li>
                <li>
                  Saltos de línea (<span className="font-mono">\n</span>) como separadores de filas
                </li>
                <li>Crea una matriz y la pega correctamente</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integración con Portapapeles del Sistema */}
      <section className="flex flex-col space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">Integración con Portapapeles del Sistema</h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          El componente se integra completamente con el portapapeles del sistema operativo, permitiendo intercambio de datos con otras aplicaciones.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <h5 className="font-semibold text-gray-800 text-lg mb-2">Al Copiar</h5>
            <p className="text-gray-700 text-sm mb-2">Los datos se escriben en el portapapeles del sistema.</p>
            <ul className="list-disc list-inside text-gray-700 text-sm ml-2 space-y-1">
              <li>Formato: Texto plano</li>
              <li>Columnas separadas por tabs</li>
              <li>Filas separadas por saltos de línea</li>
              <li>Compatible con Excel y Google Sheets</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <h5 className="font-semibold text-gray-800 text-lg mb-2">Al Pegar</h5>
            <p className="text-gray-700 text-sm mb-2">Lee datos del portapapeles del sistema.</p>
            <ul className="list-disc list-inside text-gray-700 text-sm ml-2 space-y-1">
              <li>Detecta formato de tabla automáticamente</li>
              <li>Parsea tabs y saltos de línea</li>
              <li>Crea matriz de valores</li>
              <li>Pega en el rango apropiado</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Flujo de Trabajo Típico */}
      <section className="flex flex-col space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">Flujo de Trabajo Típico</h3>
        <p className="text-gray-700 leading-relaxed text-lg">Ejemplo paso a paso de un flujo de copiar y pegar completo.</p>

        <div className="bg-white border border-gray-300 rounded-lg p-4">
          <ol className="list-decimal list-inside text-gray-700 space-y-3">
            <li>
              <strong>Selecciona las celdas a copiar</strong>
              <p className="ml-6 text-sm text-gray-600">Haz clic o arrastra para seleccionar una o más celdas</p>
            </li>
            <li>
              <strong>Copia con Ctrl+C o Cmd+C</strong>
              <p className="ml-6 text-sm text-gray-600">Las celdas se marcan con borde verde punteado</p>
            </li>
            <li>
              <strong>Navega al destino</strong>
              <p className="ml-6 text-sm text-gray-600">Haz clic en la celda de inicio o selecciona un rango</p>
            </li>
            <li>
              <strong>Pega con Ctrl+V o Cmd+V</strong>
              <p className="ml-6 text-sm text-gray-600">Los datos se pegan adaptándose al contexto</p>
            </li>
            <li>
              <strong>El indicador de copiado se limpia</strong>
              <p className="ml-6 text-sm text-gray-600">El borde verde desaparece automáticamente</p>
            </li>
          </ol>
        </div>
      </section>

      {/* Limitaciones y Consideraciones */}
      <section className="flex flex-col space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">Limitaciones y Consideraciones</h3>
        <p className="text-gray-700 leading-relaxed text-lg">Aspectos importantes a tener en cuenta al usar el sistema de copiar y pegar.</p>

        <div className="space-y-4">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h5 className="font-semibold text-yellow-800 text-lg mb-2">⚠ Permisos del Portapapeles</h5>
            <p className="text-yellow-800 text-sm">
              El navegador puede solicitar permisos para acceder al portapapeles. Si el usuario los deniega, las operaciones fallarán silenciosamente.
              Los errores se registran en la consola.
            </p>
          </div>

          <div className="bg-rose-50 border border-rose-200 rounded-lg p-4">
            <h5 className="font-semibold text-rose-800 text-lg mb-2">⚠ Servidor con HTTPS</h5>
            <p className="text-rose-800 text-sm">
              La API moderna del portapapeles (<code>navigator.clipboard</code>) requiere un contexto seguro (HTTPS o localhost). En servidores HTTP
              tradicionales, esta funcionalidad puede no estar disponible.
            </p>
          </div>

          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <h5 className="font-semibold text-gray-800 text-lg mb-2">Límites del Rango</h5>
            <p className="text-gray-700 text-sm">
              Si intentas pegar datos que exceden los límites de tu tabla, solo se pegarán las celdas que quepan. El resto se ignora sin mostrar
              error.
            </p>
          </div>

          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <h5 className="font-semibold text-gray-800 text-lg mb-2">Formato de Datos</h5>
            <p className="text-gray-700 text-sm">
              Solo se copian y pegan valores de texto. Formatos, estilos, fórmulas o validaciones no se preservan actualmente.
            </p>
          </div>

          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <h5 className="font-semibold text-gray-800 text-lg mb-2">Celdas Deshabilitadas</h5>
            <p className="text-gray-700 text-sm">
              Las celdas con <span className="font-mono">disabled=true</span> no pueden recibir datos pegados. Si están en el rango destino, se omiten
              silenciosamente.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
