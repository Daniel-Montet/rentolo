import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../../components/layout/auth.layout.component";
import DefaultLayout from "../../components/layout/layout.component";
import LoginPage from "../../pages/auth/login";
import SignUpPage from "../../pages/auth/signUp";
import DashboardPage from "../../pages/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "sign-up",
        element: <SignUpPage />,
      },
    ],
  },
]);

export default router;
