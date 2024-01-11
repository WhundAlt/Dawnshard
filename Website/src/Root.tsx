import { FC } from "react";
import { Outlet } from "react-router-dom";
import { CssBaseline, CssVarsProvider } from "@mui/joy";
import {
  HeaderLayout,
  RootLayout,
  MainLayout,
  SideNavLayout,
} from "./features/layout/Layout.tsx";
import Header from "./features/layout/Header.tsx";
import Navigation from "./features/layout/Navigation.tsx";

const Root: FC = () => (
  <CssVarsProvider>
    <CssBaseline />
    <RootLayout>
      <HeaderLayout>
        <Header />
      </HeaderLayout>
      <SideNavLayout>
        <Navigation />
      </SideNavLayout>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </RootLayout>
  </CssVarsProvider>
);
export default Root;
