import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <main className="max-w-screen-2xl mx-auto mt-5 p-5">
        <Outlet />
      </main>
    </div>
  );
}
