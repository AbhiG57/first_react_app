// layouts/MainLayout.jsx
import { Outlet, NavLink } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-gray-800 text-white p-4 flex gap-4">
        <NavLink to="/" end>Dashboard</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
