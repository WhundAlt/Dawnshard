import Home from "./features/home/Home.tsx";
import {
  AccountTree,
  HouseRounded,
  SvgIconComponent,
} from "@mui/icons-material";
import { Test } from "./features/Test.tsx";
import { ReactElement } from "react";

export type Page = {
  label: string;
  path: string;
  element: ReactElement;
  icon: SvgIconComponent;
};

export const pages: Page[] = [
  {
    label: "Home",
    path: "/",
    element: <Home />,
    icon: HouseRounded,
  },
  {
    label: "Test",
    path: "/test",
    element: <Test />,
    icon: AccountTree,
  },
];
