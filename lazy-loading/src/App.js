import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { loader as postsLoader } from "./pages/Blog";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import { lazy, Suspense } from "react";
const BlogPage = lazy(() => import("./pages/Blog"));
const PostPage = lazy(() => import("./pages/Post"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "posts",
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={"Blogs Loading..."}>
                <BlogPage />
              </Suspense>
            ),
            loader: () => import("./pages/Blog").then((module) => module.loader()),
          },
          {
            path: ":id",
            element: (
              <Suspense fallback={"Loading..."}>
                <PostPage />
              </Suspense>
            ),
            loader: (meta) => import("./pages/Post").then((m) => m.loader(meta)),
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
