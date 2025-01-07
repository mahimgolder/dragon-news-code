import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>
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
        element: <div>Eror</div>
    },

])


export default router;