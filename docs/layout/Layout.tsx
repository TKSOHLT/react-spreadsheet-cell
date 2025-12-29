import { Outlet } from 'react-router-dom';
import DocsNavigation from '../components/ui/DocsNavigation';
import { Github } from 'lucide-react';

export default function Layout() {
  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 px-6 py-4 bg-white border-b border-gray-100 shadow-sm">
        <div className="flex flex-row justify-between">
          <a href="/" className="text-2xl font-bold bg-clip-text text-black cursor-pointer hover:scale-110 active:scale-90 transition-transform">
            React <span className="text-blue-600 font-bold">Spreadsheet</span> Cell
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
      </header>

      <div className="flex flex-col md:flex-row md:px-3 pt-20 min-h-screen">
        <aside className="md:w-[256px] shrink-0">
          <DocsNavigation />
        </aside>
        <main className="max-w-screen-2xl mx-auto py-5 px-10 flex flex-col text-start w-full space-y-8">
          <Outlet />
        </main>
      </div>
    </>
  );
}
