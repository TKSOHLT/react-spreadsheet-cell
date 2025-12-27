import { Check, Copy } from 'lucide-react';
import { useState } from 'react';

export default function ExampleCard({ codeString, children }: { codeString: string; children: React.ReactNode }) {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto relative">
      {/* Card Container */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden pt-10">
        {/* Botones */}
        <div className="absolute top-5 left-5 flex gap-2 rounded-xl border border-gray-200 bg-slate-200">
          <button
            onClick={() => setShowCode(false)}
            className={`px-4 py-1 rounded-xl font-medium transition-all cursor-pointer ${
              !showCode ? 'bg-white text-green-600 shadow-sm' : 'text-gray-600 hover:text-gray-900 active:scale-90'
            }`}
          >
            Preview
          </button>
          <button
            onClick={() => setShowCode(true)}
            className={`px-4 py-1 rounded-xl font-medium transition-all cursor-pointer ${
              showCode ? 'bg-white text-green-600 shadow-sm' : 'text-gray-600 hover:text-gray-900 active:scale-90'
            }`}
          >
            Code
          </button>
        </div>

        {showCode && (
          <button
            onClick={handleCopy}
            className="absolute top-5 right-5 rounded-lg flex font-medium text-sm items-center gap-2 px-3 py-2 bg-slate-200 text-gray-800 hover:scale-105 hover:text-green-600 hover:font-semibold active:scale-90 transition-all cursor-pointer"
          >
            {copied ? (
              <>
                <Check size={15} />
                Copiado!
              </>
            ) : (
              <>
                <Copy size={15} />
                Copiar código
              </>
            )}
          </button>
        )}

        {/* Contenido */}
        <div className="p-6 mt-3">
          {!showCode ? (
            // Preview
            children
          ) : (
            // Code
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <pre className="p-4 overflow-x-auto text-sm">
                <code className="text-gray-300 font-mono">{codeString}</code>
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
