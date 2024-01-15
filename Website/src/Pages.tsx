import Home from "./features/home/Home.tsx";
import News from "./features/news/News.tsx";
import {
  HouseRounded,
  NewspaperRounded,
  SvgIconComponent,
} from "@mui/icons-material";

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
    label: "News",
    path: "/news",
    element: <News />,
    icon: NewspaperRounded,
  },
];
