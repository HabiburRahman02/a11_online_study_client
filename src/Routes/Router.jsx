import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import CreateAssignments from "../pages/CreateAssignments/CreateAssignments";
import PrivateRoute from "./PrivateRoute";
import Assignments from "../pages/Assignments/Assignments";
import UpdateAssignment from "../pages/Assignments/UpdateAssignment";
import AssignmentDetails from "../pages/Assignments/AssignmentDetails";
import AssignmentSubmission from "../pages/Assignments/AssignmentSubmissoin";
import MySubmitted from "../pages/MySubmitted/MySubmitted";
import PendingAssignments from "../pages/PendingAssignments/PendingAssignments";
import GiveMark from "../pages/PendingAssignments/GiveMark";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Facility from "../pages/Facility/Facility";
import Contact from "../pages/Contact/Contact";
import Works from "../pages/Works/Works";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/createAssignments',
                element: <PrivateRoute><CreateAssignments></CreateAssignments></PrivateRoute>
            },
            {
                path: '/assignments',
                element: <Assignments></Assignments>
            },
            {
                path: '/facility',
                element: <Facility></Facility>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/works',
                element: <Works></Works>
            },
            {
                path: '/updateAssignment/:id',
                element: <PrivateRoute><UpdateAssignment></UpdateAssignment></PrivateRoute>,
                loader: ({ params }) => fetch(`https://a11-group-study-server-rho.vercel.app/assignmentById/${params.id}`)
            },
            {
                path: '/assignmentDetails/:id',
                element: <AssignmentDetails></AssignmentDetails>,
                loader: ({ params }) => fetch(`https://a11-group-study-server-rho.vercel.app/assignmentById/${params.id}`)
            },
            {
                path: '/assignmentSubmission/:id',
                element: <PrivateRoute><AssignmentSubmission></AssignmentSubmission></PrivateRoute>,
                loader: ({ params }) => fetch(`https://a11-group-study-server-rho.vercel.app/assignmentById/${params.id}`)
            },
            {
                path: '/mySubmitted',
                element: <PrivateRoute><MySubmitted></MySubmitted></PrivateRoute>,
            },
            {
                path: '/pendingAssignments',
                element: <PrivateRoute><PendingAssignments></PendingAssignments></PrivateRoute>,
            },
            {
                path: '/giveMark/:id',
                element: <PrivateRoute><GiveMark></GiveMark></PrivateRoute>,
                // loader: ({ params }) => fetch(`https://a11-group-study-server-rho.vercel.app/assignmentById/${params.id}`)
            },
        ]
    },
]);

export default router;