import React from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "../component/Header";
import HomePage from "../pages/HomePage";
import AddUserPage from "../pages/AddUserPage";
import EditUserPage from "../pages/EditUserPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Header />
                <Outlet />
            </>
        ),
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/addUser",
                element: <AddUserPage />
            },
            {
                path: "/editUser/:id",
                element: <EditUserPage />
            }
        ]
    }
]);

export default function Router() {
    return <RouterProvider router={router} />;
}
