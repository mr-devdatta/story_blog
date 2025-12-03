import { createBrowserRouter } from "react-router-dom";
import EmployeeForm from "../features/employee/pages/EmployeeForm";
import EmployeeList from "../features/employee/pages/EmployeeList";
import MainLayout from "../components/layout/MainLayout";
import PublicLayout from "../components/layout/PublicLayout";
import Home from "../features/home/Home";
import AboutUs from "../features/aboutus/AboutUs";
import Layout1 from "../components/layout/Layout1";
import LoginPage from "../features/authentication/LoginPage";
import ForgetPassword from "../features/authentication/ForgetPassword";
import Layout2 from "../components/layout/Layout2";

const router = createBrowserRouter([
    {
        //path: "/",
        element: <MainLayout />,
        children: [
            {
                element: <PublicLayout />,
                children: [
                    {
                        index: true,
                        element: <Home />,
                    },
                    {
                        path: "aboutus",
                        element: <AboutUs />,
                    },
                    {
                        path: "home",
                        element: <Home />,
                    },
                ],
            },
            {
                element: <Layout1 />,
                children: [
                    {
                        path: "login",
                        element: <LoginPage />,
                    },
                    {
                        path: "forgetpassword",
                        element: <ForgetPassword />,
                    },
                ],
            },
            {
                element: <Layout2 />,
                children: [
                    {
                        path: "employee",
                        element: <EmployeeList />,
                    },
                    {
                        path: "employee/add",
                        element: <EmployeeForm />,
                    },
                ],
            },
        ],
    },
]);

export default router;
