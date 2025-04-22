import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Movies from "../app/routes/Movies";
import Dashboard from "../app/routes/Dashboard";
import NotFound from "../app/routes/NotFound";
// ... your imports

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "movies", element: <Movies /> },
      { path: "*", element: <NotFound /> },
    ],
  },
],
{
    basename:'/uir'
}
);
