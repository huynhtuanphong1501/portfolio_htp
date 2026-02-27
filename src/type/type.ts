import type { JSX } from "react";

export type RouteType = {
  path: string;
  element: React.LazyExoticComponent<() => JSX.Element>;
  nested?: RouteType[];
};

export type NavRoute = {
  to: string;
  content: string;
};

export type CopyCard = {
  label: string;
  value: string;
};
