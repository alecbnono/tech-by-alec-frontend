import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import MainLayout from "../layouts/MainLayout";
import PageNotFound from "../pages/PageNotFound";
import Projects from "../pages/Projects";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/about", element: <About /> },
            { path: "/projects", element: <Projects /> },
            { path: "*", element: <PageNotFound /> },
        ],
    },
]);

export default Router;
