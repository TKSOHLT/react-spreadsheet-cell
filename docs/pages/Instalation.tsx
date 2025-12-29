import { Check, Copy } from 'lucide-react';
import { useState } from 'react';

export default function Installation() {
  const command = 'npm i react-spreadsheet-cell';
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Título principal */}
      <h2 className="text-4xl font-bold text-gray-900 border-b-2 border-gray-200 pb-4">Instalación</h2>

      {/* Requisitos previos */}
      <section className="flex flex-col space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">Requisitos Previos</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2">
          <li className="text-lg">React 18 o superior</li>
          <li className="text-lg">TypeScript 4.5 o superior</li>
          <li className="text-lg">Tailwind CSS 3.0 o superior</li>
        </ul>
      </section>

      {/* Instalación de Dependencias */}
      <section className="flex flex-col space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">Instalación de Dependencias</h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          Este componente no requiere dependencias externas adicionales. Solo necesitas tener React y Tailwind CSS configurados en tu proyecto.
        </p>
      </section>

      {/* Instalación */}
      <section className="flex flex-col space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">Instalación</h3>

        <div className="relative bg-gray-900 rounded-lg p-4 shadow-md flex items-center justify-between">
          <code className="text-white font-mono text-base">{command}</code>

          <button onClick={handleCopy} className="ml-4 flex items-center gap-2 text-sm text-gray-300 hover:text-white cursor-pointer transition-all">
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? 'Copiado' : 'Copiar'}
          </button>
        </div>
      </section>

      {/* Nota informativa */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
        <div className="flex">
          <div className="shrink-0">
            <svg className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-blue-700">
              <strong>Nota:</strong> Asegúrate de envolver tu aplicación con el{' '}
              <code className="bg-blue-100 px-1 rounded font-mono">SpreadsheetProvider</code> para que los componentes funcionen correctamente.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
