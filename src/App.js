import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home/Home";
import ErrorPage from "./pages/Error/Error";
import Product from "./pages/Product/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "product/:id",
    element: <Product />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
