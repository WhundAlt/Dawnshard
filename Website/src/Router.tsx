import {createBrowserRouter} from "react-router-dom";
import Root from "./Root.tsx";
import Home from "./features/home/Home.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            }
        ]
    },
]);

export default router;