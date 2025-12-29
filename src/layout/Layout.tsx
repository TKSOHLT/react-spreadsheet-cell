import { Outlet } from 'react-router-dom';
import DocsNavigation from '../components/ui/DocsNavigation';

export default function Layout() {
  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 px-6 py-4 bg-white border-b border-gray-100 shadow-sm">
        <h1 className="text-2xl font-semibold text-gray-800">
          React <span className="text-blue-600 font-bold">Spreadsheet</span> Cell
        </h1>
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