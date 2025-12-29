import CodeFragment from '../components/ui/CodeFragment';

export default function Personalization() {
  return (
    <>
      {/* Título principal */}
      <h2 className="text-4xl font-bold text-gray-900 border-b-2 border-gray-200 pb-4">Personalización</h2>
      
      {/* Descripción General */}
      <section className="flex flex-col space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">Descripción General</h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          El componente SpreadsheetCell ofrece un sistema robusto de personalización que te permite adaptar completamente la apariencia
          de tus celdas. Desde esquemas de color predefinidos hasta dimensiones personalizadas, cada aspecto visual puede ser ajustado
          según tus necesidades.
        </p>
      </section>

      {/* Esquemas de Color */}
      <section className="flex flex-col space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">Esquemas de Color</h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          El sistema incluye 8 esquemas de color predefinidos que controlan automáticamente todos los estados visuales de la celda.
          Cada esquema mantiene consistencia visual a través de los diferentes estados de interacción.
        </p>

        <h4 className="text-xl font-semibold text-gray-800 mt-4">Esquemas Disponibles</h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
              <li><strong>blue</strong> - Azul (por defecto)</li>
              <li><strong>purple</strong> - Morado</li>
              <li><strong>green</strong> - Verde</li>
              <li><strong>red</strong> - Rojo</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
              <li><strong>gray</strong> - Gris</li>
              <li><strong>orange</strong> - Naranja</li>
              <li><strong>pink</strong> - Rosa</li>
              <li><strong>cyan</strong> - Cian</li>
            </ul>
          </div>
        </div>

        <CodeFragment
          codeString={`<SpreadsheetCell
  cellId="0-0"
  row={0}
  col={0}
  colorScheme="purple"
  initialValue="Celda morada"
  onValueChange={(value) => console.log(value)}
/>`}
        />

        {/* Estados que controla cada esquema */}
        <h4 className="text-xl font-semibold text-gray-800 mt-4">Estados Controlados por el Esquema</h4>
        <p className="text-gray-700 leading-relaxed text-lg">
          Cada esquema de color define automáticamente los estilos para todos estos estados:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2 text-lg">
          <li><strong>Fondo inactivo:</strong> Estado base de la celda</li>
          <li><strong>Fondo activo:</strong> Durante la edición</li>
          <li><strong>Fondo deshabilitado:</strong> Cuando la celda está disabled</li>
          <li><strong>Ring inactivo:</strong> Borde en estado normal</li>
          <li><strong>Ring activo:</strong> Borde durante la edición</li>
          <li><strong>Selección simple:</strong> Fondo y borde cuando está seleccionada</li>
          <li><strong>Multi-selección:</strong> Fondo y borde en rangos seleccionados</li>
          <li><strong>Copiada:</strong> Fondo y outline cuando está en el portapapeles</li>
          <li><strong>Hover:</strong> Borde al pasar el mouse</li>
          <li><strong>Sombra de edición:</strong> Sombra interior durante la edición</li>
        </ul>
      </section>

      {/* Dimensiones */}
      <section className="flex flex-col space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">Dimensiones y Espaciado</h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          Controla el tamaño y espaciado interno de tus celdas para adaptarlas a diferentes contextos y densidades de información.
        </p>

        <h4 className="text-xl font-semibold text-gray-800 mt-4">Propiedades de Dimensión</h4>
        <div className="bg-white border border-gray-300 rounded-lg p-4 space-y-3">
          <div>
            <h5 className="font-semibold text-gray-800">padding</h5>
            <p className="text-gray-700 ml-2">Espaciado interno de la celda en modo visualización.</p>
            <p className="text-gray-600 text-sm ml-2 italic">Por defecto: "px-2 py-1"</p>
          </div>
          <div>
            <h5 className="font-semibold text-gray-800">width</h5>
            <p className="text-gray-700 ml-2">Ancho de la celda.</p>
            <p className="text-gray-600 text-sm ml-2 italic">Por defecto: "w-full"</p>
          </div>
          <div>
            <h5 className="font-semibold text-gray-800">height</h5>
            <p className="text-gray-700 ml-2">Altura de la celda.</p>
            <p className="text-gray-600 text-sm ml-2 italic">Por defecto: "h-8"</p>
          </div>
          <div>
            <h5 className="font-semibold text-gray-800">insetPadding</h5>
            <p className="text-gray-700 ml-2">Espaciado interno del input durante la edición.</p>
            <p className="text-gray-600 text-sm ml-2 italic">Por defecto: "px-2"</p>
          </div>
        </div>

        <CodeFragment
          codeString={`<SpreadsheetCell
  cellId="0-0"
  row={0}
  col={0}
  padding="px-4 py-2"
  width="w-48"
  height="h-12"
  insetPadding="px-3"
  initialValue="Celda personalizada"
  onValueChange={(value) => console.log(value)}
/>`}
        />

        {/* Ejemplo de tabla compacta vs espaciosa */}
        <h4 className="text-xl font-semibold text-gray-800 mt-4">Ejemplos de Configuración</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <h5 className="font-semibold text-gray-800 mb-2">Tabla Compacta</h5>
            <CodeFragment
              codeString={`padding="px-1 py-0.5"
height="h-6"
insetPadding="px-1"`}
            />
          </div>
          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <h5 className="font-semibold text-gray-800 mb-2">Tabla Espaciosa</h5>
            <CodeFragment
              codeString={`padding="px-4 py-3"
height="h-14"
insetPadding="px-4"`}
            />
          </div>
        </div>
      </section>

      {/* Anchos de Borde (Ring) */}
      <section className="flex flex-col space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">Anchos de Borde (Ring)</h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          Personaliza el grosor de los bordes en diferentes estados de interacción. Estos bordes ayudan a los usuarios a distinguir
          visualmente el estado actual de cada celda.
        </p>

        <h4 className="text-xl font-semibold text-gray-800 mt-4">Propiedades de Ring</h4>
        <div className="bg-white border border-gray-300 rounded-lg p-4 space-y-3">
          <div>
            <h5 className="font-semibold text-gray-800">ringWidthInactive</h5>
            <p className="text-gray-700 ml-2">Grosor del borde cuando la celda no está seleccionada.</p>
            <p className="text-gray-600 text-sm ml-2 italic">Por defecto: "inset-ring-[0]" (sin borde)</p>
          </div>
          <div>
            <h5 className="font-semibold text-gray-800">ringWidthActive</h5>
            <p className="text-gray-700 ml-2">Grosor del borde durante la edición.</p>
            <p className="text-gray-600 text-sm ml-2 italic">Por defecto: "inset-ring-1"</p>
          </div>
          <div>
            <h5 className="font-semibold text-gray-800">selectedRingWidth</h5>
            <p className="text-gray-700 ml-2">Grosor del borde cuando la celda está seleccionada.</p>
            <p className="text-gray-600 text-sm ml-2 italic">Por defecto: "inset-ring-3"</p>
          </div>
          <div>
            <h5 className="font-semibold text-gray-800">multiSelectRingWidth</h5>
            <p className="text-gray-700 ml-2">Grosor del borde en celdas multi-seleccionadas.</p>
            <p className="text-gray-600 text-sm ml-2 italic">Por defecto: "ring-1"</p>
          </div>
        </div>

        <CodeFragment
          codeString={`<SpreadsheetCell
  cellId="0-0"
  row={0}
  col={0}
  ringWidthInactive="inset-ring-1"
  ringWidthActive="inset-ring-2"
  selectedRingWidth="inset-ring-4"
  multiSelectRingWidth="ring-2"
  initialValue="Bordes personalizados"
  onValueChange={(value) => console.log(value)}
/>`}
        />

        {/* Nota sobre valores válidos */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-blue-800 font-semibold">Nota sobre valores válidos:</p>
          <p className="text-blue-700 mt-2">
            Los valores deben usar clases de Tailwind CSS válidas. Para bordes interiores usa <code className="bg-blue-100 px-1 rounded">inset-ring-*</code> 
            y para bordes exteriores usa <code className="bg-blue-100 px-1 rounded">ring-*</code>.
          </p>
        </div>
      </section>
    </>
  );
}