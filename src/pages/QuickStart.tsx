import Example1 from '../components/examples/Example1';

export default function QuickStart() {
  return (
    <>
      {/* Título principal */}
      <h2 className="text-4xl font-bold text-gray-900 border-b-2 border-gray-200 pb-4">Inicio Rápido</h2>

      {/* Configuración Básica */}
      <section className="flex flex-col space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">Configuración Básica</h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          Antes de usar los componentes, debes envolver tu aplicación con el SpreadsheetProvider. Este provider maneja todo el estado global de las
          celdas, incluyendo selección, edición, navegación y copiado.
        </p>
      </section>

      {/* Uso Básico */}
      <section className="flex flex-col space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">Uso Básico</h3>
        <p className="text-gray-700 leading-relaxed text-lg">El uso más simple del componente requiere solo tres pasos:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2 text-lg">
          <li>Importar el provider y el componente</li>
          <li>Envolver tu aplicación con el provider</li>
          <li>Crear una tabla de celdas usando el componente SpreadsheetCell</li>
        </ul>
      </section>

      {/* Ejemplo minimo */}
      <section className="flex flex-col space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">Ejemplo minimo</h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          Una grilla simple de 3x3 celdas. Cada celda necesita un identificador único en formato "fila-columna", así como sus coordenadas de fila y
          columna para la navegación.
        </p>
        <div className='p-10'>
          <Example1 />
        </div>
      </section>
    </>
  );
}
