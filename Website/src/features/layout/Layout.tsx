import { FC, ReactNode } from "react";
import {
  Box,
  BoxProps,
  Drawer,
  GlobalStyles,
  ModalClose,
  Typography,
} from "@mui/joy";
import useBreakpoint from "../../shared/hooks/useBreakpoint.ts";

export const RootLayout: FC<BoxProps> = (props: BoxProps) => {
  return (
    <Box
      {...props}
      sx={[
        {
          display: "flex",
          minHeight: "100vh",
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
};

export const HeaderLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Box
      component="header"
      className="Header"
      sx={[
        {
          p: 2,
          gap: 2,
          bgcolor: "background.surface",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gridColumn: "1 / -1",
          borderBottom: "1px solid",
          borderColor: "divider",
          position: "fixed",
          width: "100vw",
          height: "var(--Header-height)",
          top: 0,
          zIndex: 1100,
        },
      ]}
    >
      <GlobalStyles
        styles={{
          ":root": {
            "--Header-height": "60px",
          },
        }}
      />
      {children}
    </Box>
  );
};

export const SideNavLayout: FC<{
  open: boolean;
  onCloseDrawer: () => void;
  children: ReactNode;
}> = ({ open, onCloseDrawer, children }) => {
  const small = useBreakpoint((breakpoints) => breakpoints.down("sm"));
  console.log({ drawerOpen: open, small: small });

  return small ? (
    <Drawer
      open={open}
      onClose={onCloseDrawer}
      component="nav"
      className="navigation"
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 0.5,
          ml: "auto",
          mt: 1,
          mr: 2,
        }}
      >
        <Typography
          component="label"
          htmlFor="close-icon"
          fontSize="sm"
          fontWeight="lg"
          sx={{ cursor: "pointer" }}
        >
          Close
        </Typography>
        <ModalClose id="close-icon" sx={{ position: "initial" }} />
      </Box>
      <GlobalStyles
        styles={{
          ":root": {
            "--SideNav-width": "0",
          },
        }}
      />
      <Box sx={{ padding: "1rem" }}>{children}</Box>
    </Drawer>
  ) : (
    <Box
      component="nav"
      className="Navigation"
      sx={[
        {
          p: 2,
          backgroundColor: "background.surface",
          borderRight: "1px solid",
          borderColor: "divider",
          height: "100%",
          top: "var(--Header-height)",
          width: "var(--SideNav-width)",
          position: "fixed",
        },
      ]}
    >
      <GlobalStyles
        styles={{
          ":root": {
            "--SideNav-width": "min(25%, 300px)",
          },
        }}
      />
      {children}
    </Box>
  );
};

export const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Box
      component="main"
      className="Main"
      sx={{
        paddingTop: "var(--Header-height)",
        paddingLeft: "var(--SideNav-width)",
      }}
    >
      {children}
    </Box>
  );
};
