import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import PageNotFound from "../pages/PageNotFound";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "*", element: <PageNotFound /> },
        ],
    },
]);

export default Router;
