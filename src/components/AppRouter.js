import { useContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { routes } from "../router";

const AppRouter = () => {
    const router = createBrowserRouter(routes);

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
};

export default AppRouter;