import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home/Home";
import { Login, Register } from "../pages/Login/Login";
import Duvidas from "../pages/DuvidasDebates/DuvidasDebates";
import LoginProfessor from "../pages/LoginProfessor/LoginProfessor";
import { PalavrasMaisBuscadas } from "../pages/PalavrasMaisBuscadas/PalavrasMaisBuscadas";

export default function Routes() {
    return <RouterProvider router={route} />
}

const route = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/loginProfessor",
        element: <LoginProfessor />
    },
    {
        path: "/cadastro",
        element: <Register />
    },
    {
        path: "/duvidas",
        element: <Duvidas />
    },
    {
        path: "/palavrasMaisBuscadas",
        element: <PalavrasMaisBuscadas />
    },
])