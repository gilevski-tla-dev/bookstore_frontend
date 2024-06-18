import { FC, ReactElement } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { RootState } from "../entites/redux/store";
import { RouteType } from "../types/router.types";
import Home from "./Home";
import Login from "../features/Login";
import ProtectedPage from "../features/ProtectedPage";
import BookdetailsPage from "./BookdetailsPage";

const routeConfig: RouteType[] = [
  { title: "Home", path: "/home", element: <Home />, protected: false },
  { title: "Login", path: "/login", element: <Login />, protected: false },
  {
    title: "Bookdetails",
    path: "/book_details/:id",
    element: <BookdetailsPage />,
    protected: false,
  },
  // add other routes here
  {
    title: "Protected",
    path: "/protected",
    element: <ProtectedPage />,
    protected: true,
  },
];

interface RequireAuthProps {
  children: ReactElement;
}

const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  const location = useLocation();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  console.log(isAuthenticated);

  if (!isAuthenticated) {
    // Redirect to login page, storing current route in state.location
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

const Router: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      {routeConfig.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            route.protected ? (
              <RequireAuth>{route.element}</RequireAuth>
            ) : (
              route.element
            )
          }
        />
      ))}
    </Routes>
  );
};

export default Router;
