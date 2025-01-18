import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path:"",
                element: <Navigate to={"/category/01"}></Navigate>
            },
            {
                path:"/category/:id",
                element:<CategoryNews></CategoryNews>,
                loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
            }
        ]
    },
    {
        path: "/about",
        element: <div>Home Layout</div>
    },
    {
        path: "/auth",
        element: <div>login Layout</div>
    },
    {
        path: "*",
        element: <div>Error</div>
    },

])


export default router;