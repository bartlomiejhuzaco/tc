import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomeScreen from "./screens/home/screen";
import ErrorScreen from "./screens/error/screen";


export default function App() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <HomeScreen />,
            errorElement: <ErrorScreen />,
        },
        {
            path: '/*',
            element: <ErrorScreen />
        }
    ]);

    return <RouterProvider router={router} />
}