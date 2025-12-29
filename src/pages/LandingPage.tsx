import { ArrowRight, BookOpen, Check, Copy, Github, Keyboard, MousePointer2 } from 'lucide-react';
import { motion } from 'motion/react';
import SpreadsheetCell from '../components/SpreadsheetCell';
import { useState } from 'react';

export default function LandingPage() {
  const [demoData, setDemoData] = useState<string[][]>([
    ['Productos', 'Q1', 'Q2', 'Q3', 'Q4'],
    ['Laptops', '245', '312', '289', '401'],
    ['Teléfonos', '534', '678', '721', '892'],
    ['Tablets', '123', '156', '178', '203'],
    ['Total', '902', '1146', '1188', '1496'],
  ]);

  const handleCellChange = (row: number, col: number, value: string) => {
    const newData = [...demoData];
    newData[row][col] = value;
    setDemoData(newData);
  };

  const command = 'npm i react-spreadsheet-cell';
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold bg-clip-text text-black">
                React <span className="text-blue-600 font-bold">Spreadsheet</span> Cell
              </h1>
            </div>
            <div className="flex gap-3">
              <a
                href="/docs/instalation"
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900 hover:scale-110 active:scale-90 transition-all cursor-pointer"
              >
                <BookOpen size={20} />
                <span className="hidden sm:inline">Docs</span>
              </a>
              <a
                href="https://github.com/TKSOHLT/react-spreadsheet-cell"
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 hover:scale-110 active:scale-90 transition-all cursor-pointer"
              >
                <Github size={20} />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-7xl font-bold text-gray-900 leading-tight"
          >
            Celdas de Spreadsheet
            <br />
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-linear-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent"
            >
              Potentes y Flexibles
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            El componente definitivo para crear tablas interactivas en React. Con soporte completo para selección múltiple, copy-paste, navegación por
            teclado y más.
          </motion.p>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, type: 'spring', bounce: 0.5 }}
              className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4"
            >
              <MousePointer2 className="text-blue-600" size={28} />
            </motion.div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Interacciones Avanzadas</h3>
            <p className="text-gray-600">
              Selección múltiple, drag-to-select, shift-click y todas las interacciones que esperas de una hoja de cálculo profesional.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4, type: 'spring', bounce: 0.5 }}
              className="bg-indigo-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4"
            >
              <Keyboard className="text-indigo-600" size={28} />
            </motion.div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Navegación por Teclado</h3>
            <p className="text-gray-600">
              Navega con flechas, Tab, Enter y todos los atajos de teclado que los usuarios conocen y aman de Excel o Google Sheets.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5, type: 'spring', bounce: 0.5 }}
              className="bg-green-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4"
            >
              <Copy className="text-green-600" size={28} />
            </motion.div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Copy-Paste Inteligente</h3>
            <p className="text-gray-600">
              Copia y pega rangos completos de celdas, con soporte para repetición de patrones y compatibilidad con el portapapeles del sistema.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h3 className="text-4xl font-bold text-gray-900 mb-4">Pruébalo </h3>
          <p className="text-xl text-gray-600">Interactúa con el componente directamente. Haz click, arrastra, copia y pega.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ y: -8, scale: 1.02 }}
          className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-8 overflow-hidden"
        >
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full">
              <div className=" border-gray-100 grid" style={{ gridTemplateColumns: `repeat(${demoData[0]?.length || 5}, auto)` }}>
                {demoData.map((row, rowIndex) =>
                  row.map((cell, colIndex) => (
                    <div className="border border-slate-200/50">
                      <SpreadsheetCell
                        key={`${rowIndex}-${colIndex}`}
                        cellId={`${rowIndex}-${colIndex}`}
                        row={rowIndex}
                        col={colIndex}
                        initialValue={cell}
                        onValueChange={(value) => handleCellChange(rowIndex, colIndex, value)}
                      />
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
            <p className="text-sm text-blue-800 font-medium">
              <strong>Tip:</strong> Prueba a seleccionar múltiples celdas con Shift+Click o arrastrando el mouse. Usa Ctrl+C para copiar y Ctrl+V para
              pegar.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Code Example */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h3 className="text-4xl font-bold text-gray-900 mb-4">Fácil de Integrar</h3>
          <p className="text-xl text-gray-600">Comienza en minutos con una API simple e intuitiva</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ y: -8, scale: 1.02 }}
          className="bg-gray-900 rounded-2xl p-8 shadow-2xl overflow-x-auto"
        >
          <pre className="text-gray-300 font-mono text-sm">
            {`import { SpreadsheetCell, SpreadsheetProvider } from 'spreadsheet-cell';

function MyApp() {
  const [data, setData] = useState([
    ['Product', 'Q1', 'Q2', 'Q3'],
    ['Laptops', '245', '312', '289'],
    ['Phones', '534', '678', '721'],
  ]);

  return (
    <SpreadsheetProvider>
      <div className="grid" style={{ gridTemplateColumns: 'repeat(4, auto)' }}>
        {data.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <SpreadsheetCell
              key={\`\${rowIndex}-\${colIndex}\`}
              cellId={\`\${rowIndex}-\${colIndex}\`}
              row={rowIndex}
              col={colIndex}
              initialValue={cell}
              onValueChange={(value) => {
                const newData = [...data];
                newData[rowIndex][colIndex] = value;
                setData(newData);
              }}
            />
          ))
        )}
      </div>
    </SpreadsheetProvider>
  );
}`}
          </pre>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{
            borderRadius: '100%',
            scale: 0,
            rotate: 10,
          }}
          whileInView={{
            borderRadius: '24px',
            rotate: -2,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
          }}
          className="relative bg-linear-to-r from-blue-500 to-blue-600 p-12 text-center shadow-2xl overflow-hidden"
        >
          <h3 className="text-4xl font-bold text-white mb-4">¿Listo para empezar?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Instala el componente con npm y comienza a construir tablas increíbles en minutos.
          </p>
          <div className="relative bg-gray-900 rounded-lg p-4 shadow-md flex items-center justify-between">
            <code className="text-white font-mono text-base">{command}</code>

            <button
              onClick={handleCopy}
              className="ml-4 flex items-center gap-2 text-sm text-gray-300 hover:text-white cursor-pointer transition-all"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? 'Copiado' : 'Copiar'}
            </button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <a
              className="flex items-center gap-3 group hover:scale-110 active:scale-90 cursor-pointer transition-all"
              href="https://github.com/TKSOHLT"
              target="_blank"
            >
              <span className="bg-linear-to-br group-hover:bg-linear-to-t from-blue-700 to-blue-900  p-2 rounded-xl">
                <Github className="text-white" size={20} />
              </span>
              <span className="text-white font-semibold">TKSOHLT</span>
            </a>
            <p className="text-sm">Con ❤️‍🔥 React SpreadsheetCell</p>
            <div className="flex gap-6">
              <a href="/docs/instalation" className="hover:text-white hover:scale-110 active:scale-90 transition-all">
                Docs
              </a>
              <a
                href="https://github.com/TKSOHLT/react-spreadsheet-cell"
                target="_blank"
                className="hover:text-white hover:scale-110 active:scale-90 transition-all"
              >
                GitHub
              </a>
              <a href="#" target="_blank" className="hover:text-white hover:scale-110 active:scale-90 transition-all">
                NPM
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
