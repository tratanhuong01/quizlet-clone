import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Main from "../pages/Main";
import { PAGE_MAIN } from "./configRoutes";


const router = createBrowserRouter([
    {
        path: PAGE_MAIN,
        element: <Main />,
    }
]);

const RouteConfig = () => {
    return <RouterProvider router={router} />
}

export default RouteConfig;