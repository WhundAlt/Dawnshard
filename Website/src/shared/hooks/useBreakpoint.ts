import { useMediaQuery } from "usehooks-ts";
import { Breakpoints } from "@mui/system";
import { useTheme } from "@mui/joy";

const useBreakpoint = (func: (breakpoints: Breakpoints) => string) => {
  const { breakpoints } = useTheme();

  // MUI media query generators prefix with @media, which useMediaQuery does not like.
  const mediaQueryString = func(breakpoints).replace("@media ", "");

  return useMediaQuery(mediaQueryString);
};

export default useBreakpoint;
