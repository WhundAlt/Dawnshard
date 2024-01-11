import { FC } from "react";
import { Box, Stack, Typography } from "@mui/joy";
import ColorSchemeToggle from "./ColorSchemeToggle.tsx";

const Header: FC = () => (
  <Box
    sx={{
      display: "flex",
      flexGrow: 1,
      justifyContent: "space-between",
    }}
  >
    <Stack direction="row" justifyContent="space-between" gap={1} flexGrow={1}>
      <Typography level="h2">Dawnshard</Typography>
      <ColorSchemeToggle />
    </Stack>
  </Box>
);

export default Header;
