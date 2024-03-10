import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";


const router = createBrowserRouter([
    {
        path: '/register',
        element: <Register /> 
     },
    {
        path: '/',
        element: <Login />

    },
])

export default router