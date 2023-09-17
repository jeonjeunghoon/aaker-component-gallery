import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import ContainerPage from "../pages/ContainerPage";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/component/layout",
          children: [
            {
              path: "container",
              element: <ContainerPage />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
