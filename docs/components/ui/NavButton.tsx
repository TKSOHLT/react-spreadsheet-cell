import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavButton({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex flex-row gap-2 p-2 text-md rounded-lg text-lg items-center transition-all ${
          isActive ? 'bg-black text-white font-semibold scale-95' : 'hover:bg-gray-100 hover:scale-105 active:scale-90'
        }`
      }
    >
      {children}
    </NavLink>
  );
}
