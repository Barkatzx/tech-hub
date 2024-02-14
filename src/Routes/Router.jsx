import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Component/ErrorPage/ErrorPage";
import Home from "../Layout/Home";
import Main from "../Layout/Main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
        ]
    }
])
export default router;