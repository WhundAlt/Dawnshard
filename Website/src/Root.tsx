import { FC, useState } from "react";
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

const Root: FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  console.log("open", drawerOpen);

  return (
    <CssVarsProvider>
      <CssBaseline />
      <RootLayout>
        <HeaderLayout>
          <Header onClickMenu={() => setDrawerOpen(true)} />
        </HeaderLayout>
        <SideNavLayout
          open={drawerOpen}
          onCloseDrawer={() => setDrawerOpen(false)}
        >
          <Navigation onClickItem={() => setDrawerOpen(false)} />
        </SideNavLayout>
        <MainLayout>
          <Outlet />
        </MainLayout>
      </RootLayout>
    </CssVarsProvider>
  );
};
export default Root;
