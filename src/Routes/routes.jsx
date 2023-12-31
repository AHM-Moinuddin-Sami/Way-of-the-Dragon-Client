import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Homepage from "../Components/Homepage/Homepage";
import Login from "../Components/Authorization/Login/Login";
import Register from "../Components/Authorization/Register/Register";
import ManageUsers from "../Components/Dashboards/AdminDashboard/ManageUsers/ManageUsers";
import AdminDashboard from "../Layouts/AdminDashboard";
import AdminDashboardHome from "../Components/Dashboards/AdminDashboard/AdminDashboardHome";
import ManageClasses from "../Components/Dashboards/AdminDashboard/ManageClasses/ManageClasses";
import InstructorDashboard from "../Layouts/InstructorDashboard";
import InstructorDashboardHome from "../Components/Dashboards/InstructorDashboard/InstructorDashboardHome";
import AddAClass from "../Components/Dashboards/InstructorDashboard/AddAClass/AddAClass";
import MyClasses from "../Components/Dashboards/InstructorDashboard/MyClasses/MyClasses";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import Instructors from "../Components/Instructors/Instructors";
import Classes from "../Components/Classes/Classes";
import Feedback from "../Components/Dashboards/AdminDashboard/ManageClasses/ManageClassCard/Feedback/Feedback";
import UpdateClass from "../Components/Dashboards/InstructorDashboard/MyClasses/UpdateClass/UpdateClass";
import StudentDashboard from "../Layouts/StudentDashboard";
import StudentRoute from "./StudentRoute";
import StudentDashboardHome from "../Components/Dashboards/StudentDashboard/StudentDashboardHome";
import EnrolledClasses from "../Components/Dashboards/StudentDashboard/EnrolledClasses/EnrolledClasses";
import Payment from "../Components/Dashboards/StudentDashboard/Payment/Payment";
import SelectedClasses from "../Components/Dashboards/StudentDashboard/SelectedClasses/SelectedClasses";
import ErrorPage from "../SharedComponents/ErrorPage/ErrorPage";
import PaymentHistory from "../Components/Dashboards/StudentDashboard/PaymentHistory/PaymentHistory";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Homepage></Homepage>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/instructors",
                element: <Instructors></Instructors>
            },
            {
                path: "/classes",
                element: <Classes></Classes>
            },
            {
                path: "dashboard/admin",
                element: <AdminRoute><AdminDashboard></AdminDashboard></AdminRoute>,
                children: [
                    {
                        path: "",
                        element: <AdminDashboardHome></AdminDashboardHome>
                    },
                    {
                        path: "users",
                        element: <ManageUsers></ManageUsers>
                    },
                    {
                        path: "classes",
                        element: <ManageClasses></ManageClasses>
                    },
                    {
                        path: "feedback/:id",
                        element: <Feedback></Feedback>
                    }
                ]
            },
            {
                path: "dashboard/instructor",
                element: <InstructorRoute><InstructorDashboard></InstructorDashboard></InstructorRoute>,
                children: [
                    {
                        path: "",
                        element: <InstructorDashboardHome></InstructorDashboardHome>
                    },
                    {
                        path: "addclass",
                        element: <AddAClass></AddAClass>
                    },
                    {
                        path: "myclasses",
                        element: <MyClasses></MyClasses>
                    },
                    {
                        path: "update/:id",
                        element: <UpdateClass></UpdateClass>
                    }
                ]
            },
            {
                path: "dashboard/student",
                element: <StudentRoute><StudentDashboard></StudentDashboard></StudentRoute>,
                children: [
                    {
                        path: "",
                        element: <StudentDashboardHome></StudentDashboardHome>
                    },
                    {
                        path: "enrolled",
                        element: <EnrolledClasses></EnrolledClasses>
                    },
                    {
                        path: "payment/:id",
                        element: <Payment></Payment>
                    },
                    {
                        path: "selected",
                        element: <SelectedClasses></SelectedClasses>
                    },
                    {
                        path: "paymentHistory",
                        element:<PaymentHistory></PaymentHistory>
                    }

                ]
            }
        ]
    },
    {
        path: '*',
        element:<ErrorPage></ErrorPage>
    }
]);

export default router;