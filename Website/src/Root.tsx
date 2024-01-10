import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import {
  Box,
  Button,
  CssBaseline,
  CssVarsProvider,
  Drawer,
  List,
  ListItem,
  Stack,
} from "@mui/joy";
import FolderRoundedIcon from "@mui/icons-material/FolderRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import InsertDriveFileRoundedIcon from "@mui/icons-material/InsertDriveFileRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import {
  Header as HeaderLayout,
  Root as RootLayout,
  Main as MainLayout,
} from "./Layout";
import Header from "./features/header/Header.tsx";

const Root: FC = () => (
  <CssVarsProvider>
    <CssBaseline />
    <RootLayout>
      <HeaderLayout>
        <Header />
      </HeaderLayout>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </RootLayout>
  </CssVarsProvider>
);
export default Root;
