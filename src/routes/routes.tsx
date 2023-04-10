import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Main from "../pages/Main";
import { PAGE_CREATE_UNIT, PAGE_MAIN } from "./configRoutes";
import Unit from "../pages/Unit";


const router = createBrowserRouter([
    {
        path: PAGE_MAIN,
        element: <Main />,
    },
    {
        path: PAGE_CREATE_UNIT,
        element: <Unit />,
    }
]);

const RouteConfig = () => {
    return <RouterProvider router={router} />
}

export default RouteConfig;