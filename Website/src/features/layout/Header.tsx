import { FC } from "react";
import { Box, IconButton, Stack, Typography } from "@mui/joy";
import ColorSchemeToggle from "./ColorSchemeToggle.tsx";
import { MenuRounded } from "@mui/icons-material";
import useBreakpoint from "../../shared/hooks/useBreakpoint.ts";

const Header: FC<{ onClickMenu: () => void }> = ({ onClickMenu }) => {
  const small = useBreakpoint((breakpoints) => breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        flexGrow: 1,
        justifyContent: "space-between",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        gap={1}
        flexGrow={1}
      >
        {small && (
          <IconButton
            component={MenuRounded}
            onClick={onClickMenu}
          ></IconButton>
        )}
        <Typography level="h2" sx={{ alignSelf: "left" }}>
          Dawnshard
        </Typography>
        <ColorSchemeToggle />
      </Stack>
    </Box>
  );
};

export default Header;
