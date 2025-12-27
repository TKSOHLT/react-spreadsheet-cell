import { Outlet } from 'react-router-dom';
import DocsNavigation from '../components/ui/DocsNavigation';

export default function Layout() {
  return (
    <>
      <header className="px-6 py-4 mb-5 bg-white border-b border-gray-100 shadow-sm">
        <h1 className="text-2xl font-semibold text-gray-800">
          React <span className="text-green-600 font-bold">Spreadsheet</span> Cell
        </h1>
      </header>
      <div className="flex flex-col md:flex-row min-h-screen md:px-3">
        <DocsNavigation />
        <main className="max-w-screen-2xl mx-auto py-5 px-10 flex flex-col text-start w-full space-y-8">
          <Outlet />
        </main>
      </div>
    </>
  );
}
