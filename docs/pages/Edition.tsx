export default function Edition() {
  return (
    <div className="flex flex-col text-start w-full max-w-4xl mx-auto px-6 py-8 space-y-8">
      {/* Título principal */}
      <h2 className="text-4xl font-bold text-gray-900 border-b-2 border-gray-200 pb-4">Edición</h2>

      {/* Descripción General */}
      <section className="flex flex-col space-y-3">
        <p className="text-gray-700 leading-relaxed text-lg">
          El sistema de edición permite modificar el contenido de las celdas de manera intuitiva, con múltiples formas de entrar y salir del modo de
          edición, guardado automático de cambios, y soporte para diferentes tipos de datos.
        </p>
      </section>

      {/* Entrar en Modo Edición */}
      <section className="flex flex-col space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">Entrar en Modo Edición</h3>
        <p className="text-gray-700 leading-relaxed text-lg">Existen varias formas de comenzar a editar una celda seleccionada.</p>

        <div className="overflow-x-auto rounded-xl">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b border-slate-200">Método</th>
                <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b border-slate-200">Acción</th>
                <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b border-slate-200">Comportamiento</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="px-4 py-2 font-mono text-sm text-blue-600">Enter</td>
                <td className="px-4 py-2">Entrar en modo edición</td>
                <td className="px-4 py-2">Mantiene el contenido actual y selecciona todo el texto</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="px-4 py-2 font-mono text-sm text-blue-600">Doble Click</td>
                <td className="px-4 py-2">Edición directa</td>
                <td className="px-4 py-2">Entra en modo edición inmediatamente sin seleccionar el texto</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="px-4 py-2 font-mono text-sm text-blue-600">Escribir cualquier tecla</td>
                <td className="px-4 py-2">Reemplazar contenido</td>
                <td className="px-4 py-2">Entra en modo edición y reemplaza el contenido con la tecla presionada</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Salir del Modo Edición */}
      <section className="flex flex-col space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">Salir del Modo Edición</h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          Al salir del modo de edición, puedes guardar o descartar los cambios, y opcionalmente navegar a otra celda.
        </p>

        <div className="overflow-x-auto rounded-xl">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b border-slate-200">Tecla</th>
                <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b border-slate-200">Acción</th>
                <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b border-slate-200">Navegación</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="px-4 py-2 font-mono text-sm text-blue-600">Enter</td>
                <td className="px-4 py-2">Guarda cambios</td>
                <td className="px-4 py-2">Navega a la celda de abajo</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="px-4 py-2 font-mono text-sm text-blue-600">Tab</td>
                <td className="px-4 py-2">Guarda cambios</td>
                <td className="px-4 py-2">Navega a la celda de la derecha</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="px-4 py-2 font-mono text-sm text-blue-600">Shift + Tab</td>
                <td className="px-4 py-2">Guarda cambios</td>
                <td className="px-4 py-2">Navega a la celda de la izquierda</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="px-4 py-2 font-mono text-sm text-blue-600">↑ / ↓</td>
                <td className="px-4 py-2">Guarda cambios</td>
                <td className="px-4 py-2">Navega arriba o abajo según la flecha</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="px-4 py-2 font-mono text-sm text-blue-600">Escape</td>
                <td className="px-4 py-2">Descarta cambios</td>
                <td className="px-4 py-2">Permanece en la celda actual</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-sm text-blue-600">Click fuera / Blur</td>
                <td className="px-4 py-2">Guarda cambios</td>
                <td className="px-4 py-2">Sale del modo edición sin navegar</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-blue-800 text-sm">
            <strong>Nota:</strong> Presionar <span className="font-mono">Escape</span> es la única forma de descartar los cambios realizados. Todas
            las demás formas de salir del modo edición guardan automáticamente.
          </p>
        </div>
      </section>

      {/* Validación y Restricciones */}
      <section className="flex flex-col space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">Validación y Restricciones</h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          Las celdas numéricas pueden tener validaciones automáticas mediante las propiedades min, max y step.
        </p>

        <div className="bg-white border border-gray-300 rounded-lg p-4">
          <h5 className="font-semibold text-gray-800 text-lg mb-2">Propiedades de validación:</h5>
          <ul className="list-disc list-inside text-gray-700 ml-2 space-y-2">
            <li>
              <span className="font-mono text-sm bg-gray-100 px-1 rounded">min</span> - Valor mínimo permitido
            </li>
            <li>
              <span className="font-mono text-sm bg-gray-100 px-1 rounded">max</span> - Valor máximo permitido
            </li>
            <li>
              <span className="font-mono text-sm bg-gray-100 px-1 rounded">step</span> - Incremento al usar las flechas del input (por defecto: 1)
            </li>
          </ul>
        </div>
      </section>

      {/* Autoselección de Texto */}
      <section className="flex flex-col space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">Autoselección de Texto</h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          El componente implementa autoselección inteligente del texto según cómo entres en modo de edición.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <h5 className="font-semibold text-gray-800 text-lg mb-2">Con Enter</h5>
            <p className="text-gray-700 text-sm mb-2">Todo el texto se selecciona automáticamente.</p>
            <ul className="list-disc list-inside text-gray-700 text-sm ml-2 space-y-1">
              <li>Facilita reemplazar todo el contenido</li>
              <li>Puedes empezar a escribir inmediatamente</li>
              <li>O usar flechas para posicionarte</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <h5 className="font-semibold text-gray-800 text-lg mb-2">Escribiendo Directamente</h5>
            <p className="text-gray-700 text-sm mb-2">El texto NO se selecciona automáticamente.</p>
            <ul className="list-disc list-inside text-gray-700 text-sm ml-2 space-y-1">
              <li>El contenido actual se reemplaza</li>
              <li>Empieza con la tecla que presionaste</li>
              <li>Continúas escribiendo normalmente</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Callbacks de Edición */}
      <section className="flex flex-col space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">Callbacks de Edición</h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          El componente proporciona callbacks para reaccionar a los cambios de valor y eventos de edición.
        </p>

        <div className="bg-gray-900 rounded-lg p-4 shadow-md overflow-x-auto">
          <pre className="text-gray-300 font-mono text-sm">
            {`function MySpreadsheet() {
  const handleValueChange = (value: string) => {
    // Se ejecuta cada vez que cambia el valor
    console.log('Nuevo valor:', value);
    
    // Aquí puedes:
    // - Actualizar estado global
    // - Validar el valor
    // - Sincronizar con backend
    // - Actualizar otras celdas
  };

  const handleFocus = () => {
    // Se ejecuta cuando la celda entra en modo edición
    console.log('Celda enfocada');
    
    // Aquí puedes:
    // - Cargar datos adicionales
    // - Mostrar ayudas contextuales
    // - Registrar analíticas
  };

  return (
    <SpreadsheetCell 
      cellId="0-0"
      row={0}
      col={0}
      onValueChange={handleValueChange}
      onFocus={handleFocus}
    />
  );
}`}
          </pre>
        </div>
      </section>

      {/* Celdas Deshabilitadas */}
      <section className="flex flex-col space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">Celdas Deshabilitadas</h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          Las celdas pueden ser deshabilitadas para prevenir su edición, útil para celdas de solo lectura o calculadas.
        </p>

        <div className="bg-white border border-gray-300 rounded-lg p-4">
          <h5 className="font-semibold text-gray-800 text-lg mb-2">Características de celdas deshabilitadas:</h5>
          <ul className="list-disc list-inside text-gray-700 ml-2 space-y-2">
            <li>No pueden ser editadas bajo ninguna circunstancia</li>
            <li>Tienen un estilo visual diferente (fondo gris, opacidad reducida)</li>
            <li>
              Muestran un cursor <span className="font-mono text-sm bg-gray-100 px-1 rounded">not-allowed</span>
            </li>
            <li>No responden a eventos de teclado ni doble clic</li>
            <li>Pueden ser seleccionadas pero no editadas</li>
          </ul>
        </div>

        <div className="bg-gray-900 rounded-lg p-4 shadow-md overflow-x-auto">
          <pre className="text-gray-300 font-mono text-sm">
            {`// Celda de solo lectura
<SpreadsheetCell 
  cellId="0-0"
  row={0}
  col={0}
  initialValue="Total: $1,234"
  disabled={true}
/>`}
          </pre>
        </div>
      </section>

      {/* Estados durante la Edición */}
      <section className="flex flex-col space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">Estados durante la Edición</h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          Durante el modo de edición, el comportamiento de ciertas teclas cambia para facilitar la edición del texto.
        </p>

        <div className="bg-white border border-gray-300 rounded-lg p-4">
          <h5 className="font-semibold text-gray-800 text-lg mb-2">Comportamiento de teclas en modo edición:</h5>
          <ul className="list-disc list-inside text-gray-700 ml-2 space-y-2">
            <li>
              <span className="font-mono text-sm bg-gray-100 px-1 rounded">← →</span> - Mueven el cursor dentro del texto (no navegan)
            </li>
            <li>
              <span className="font-mono text-sm bg-gray-100 px-1 rounded">↑ ↓</span> - Guardan y navegan (excepto en select)
            </li>
            <li>
              <span className="font-mono text-sm bg-gray-100 px-1 rounded">Home / End</span> - Mueven el cursor al inicio/fin del texto
            </li>
            <li>
              <span className="font-mono text-sm bg-gray-100 px-1 rounded">Ctrl+A / Cmd+A</span> - Selecciona todo el texto
            </li>
            <li>
              <span className="font-mono text-sm bg-gray-100 px-1 rounded">Delete / Backspace</span> - Eliminan caracteres normalmente
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
