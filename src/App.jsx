import RoutesConfig from './routes/Routes'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

export default function App(){

    const router = createBrowserRouter([
        ...RoutesConfig
    ])
    return (
        <>
            <RouterProvider router={router}>
            </RouterProvider>
        </>
    )
}
