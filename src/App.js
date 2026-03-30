import react, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import About from "./components/about";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";

const Grocery = lazy(() => import("./components/Grocery"))

const AppLayout = () => (
  <div>
    <Header />
    <Outlet />
  </div>
)

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children : [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<Shimmer></Shimmer>}><Grocery /></Suspense>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<AppLayout />);
root.render(< RouterProvider router = {appRouter} />)