import { createBrowserRouter, createHashRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutUsPage";
import NotFound from "./pages/NotFound";
import ErrorPage from "./pages/ErrorPage";
import PokemonDetailsPage from "./pages/PokemonDetailsPage";

const PROD = JSON.parse(import.meta.env.VITE_PROD)
console.log(typeof PROD)

const createRouter = PROD ? createHashRouter : createBrowserRouter

const router = createRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path:"pokemon/:id",
        element: <PokemonDetailsPage />
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path:"*",
        element: <NotFound />
      }
    ],
  },
]);

export default router;