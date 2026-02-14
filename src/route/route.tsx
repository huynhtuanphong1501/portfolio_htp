import { lazy } from "react";
import { Route, NavLink } from "react-router-dom";
import type { RouteType, NavRoute } from "../type/type";

const routes: RouteType[] = [
  {
    path: "",
    element: lazy(() => import("../page/HomeTemp/index")),
    nested: [
      { path: "", element: lazy(() => import("../page/HomeTemp/Home/index")) },
      { path: "/cv", element: lazy(() => import("../page/HomeTemp/Cv/index")) },
      {
        path: "/project",
        element: lazy(() => import("../page/HomeTemp/Projects/index")),
      },
      {
        path: "/contact",
        element: lazy(() => import("../page/HomeTemp/Contact/index")),
      },
    ],
  },
  {
    path: "*",
    element: lazy(() => import("../page/PageNotFound/index")),
  },
];

const navRoutes: NavRoute[] = [
  { to: "", content: "Home" },
  { to: "/cv", content: "CV" },
  { to: "/project", content: "Projects" },
  { to: "/contact", content: "Contact" },
];

export const renderRoutesMain = () => {
  return routes.map((route) => {
    if (route.nested) {
      return (
        <Route key={route.path} path={route.path} element={<route.element />}>
          {route.nested.map((nestedRoute) => (
            <Route
              key={nestedRoute.path}
              path={nestedRoute.path}
              element={<nestedRoute.element />}
            />
          ))}
        </Route>
      );
    }
    return (
      <Route key={route.path} path={route.path} element={<route.element />} />
    );
  });
};

export const navRender = (onClickEvent: () => void) => {
  return navRoutes.map((route, index) => {
    return (
      <li key={index}>
        <NavLink
          to={route.to}
          onClick={onClickEvent}
          className={({ isActive }) =>
            `
          block py-2 px-3 rounded md:p-0 flex flex-col justify-center items-center text-sm
          ${
            isActive
              ? " text-white md:text-white"
              : "text-gray-300 md:hover:text-white"
          }
        `
          }
        >
          {route.content}
        </NavLink>
      </li>
    );
  });
};
