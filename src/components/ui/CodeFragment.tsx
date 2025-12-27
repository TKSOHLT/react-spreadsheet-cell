import { Check, Copy } from 'lucide-react';
import { useState } from 'react';

export default function CodeFragment({ codeString }: { codeString: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-gray-900 rounded-lg overflow-hidden">
      <button
        onClick={handleCopy}
        className="absolute top-5 right-5 rounded-lg flex font-medium text-sm items-center gap-2 px-3 py-2 bg-white text-black hover:scale-105 hover:text-green-600 hover:font-semibold active:scale-90 transition-all cursor-pointer"
      >
        {copied ? <Check size={15} /> : <Copy size={15} />}
      </button>

      <pre className="p-4 overflow-x-auto text-sm">
        <code className="text-gray-300 font-mono">{codeString}</code>
      </pre>
    </div>
  );
}
