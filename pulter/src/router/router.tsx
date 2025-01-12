import { createBrowserRouter } from "react-router-dom";
import { ROUTER_URLS } from "@/constants/urls";

import { lazy, Suspense } from "react";
import App from "../App";

const INTRO_PAGE = lazy(() => import("@/pages/Intro/Intro"));
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>왜 안되는거야!!!</div>}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: ROUTER_URLS.home,
        element: <INTRO_PAGE />,
      },
    ],
  },
]);
export default router;
