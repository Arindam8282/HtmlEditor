import { createBrowserRouter,RouterProvider } from "react-router-dom";
import DashBoard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import SignUp from "./Pages/Signup";
import localstorage from "./Controllers/Localstorage";
import NotFound from "./Pages/NotFound";
import TemplateCreate from "./Pages/TemplateCreate";

const loggedInRoutes = createBrowserRouter(
  [
    {
      path:'',
      element: <DashBoard />
    }, {
      path:'template/create',
      element: <TemplateCreate />,
    },
    {
      path:'template/edit/:tempId',
      element: <TemplateCreate />,
    },        
    {
      path:'template/view/:tempId',
      element: <TemplateCreate />,
    },
    {
      path:'*',
      element: <NotFound />
    },
    
  ]
)
const openRoutes = createBrowserRouter(
  [
    {
      path:'',
      element: <Login />
    },{
      path:'signup',
      element: <SignUp />
    },
    {
      path:'*',
      element: <NotFound />
    },
  ]
)
const Router = () => {
  const routes = localstorage.currentUser() ? loggedInRoutes : openRoutes

  return ( <RouterProvider router={routes}></RouterProvider> );
}
 
export default Router;