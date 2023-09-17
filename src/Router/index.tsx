import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { BASE_URL } from "../constants/url";

import App from "../App";
import ContainerPage from "../pages/ContainerPage";
import GridPage from "../pages/GridPage";
import FlexPage from "../pages/FlexPage";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: BASE_URL,
      element: <App />,
      children: [
        {
          path: "component/layout",
          children: [
            {
              path: "container",
              element: <ContainerPage />,
            },
            {
              path: "grid",
              element: <GridPage />,
            },
            {
              path: "flex",
              element: <FlexPage />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
