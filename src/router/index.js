import Error from '../pages/Error';
import Main from "../pages/Main";
import List from "../pages/List";
export const routes = [
    {
        path: "/",
        element: <Main/>,
        errorElement: <Error/>,
    },
    {
        path: "list",
        element: <List/>
    }
]