import { FC, ReactElement } from "react";
import { Button, Stack, SvgIcon } from "@mui/joy";
import { GitHub } from "@mui/icons-material";
import Patreon from "./icons/patreon.svg?react";
import BuyMeACoffee from "./icons/buyMeACoffee.svg?react";
import Discord from "./icons/discord.svg?react";

const Link: FC<{ href: string; decorator: ReactElement; children: string }> = ({
  href,
  decorator,
  children,
}) => (
  <Button
    component={"a"}
    startDecorator={decorator}
    href={href}
    variant="soft"
    color="neutral"
  >
    {children}
  </Button>
);

const Links: FC = () => (
  <Stack direction="row" gap={{ md: 1, xs: 0.5 }} flexWrap="wrap">
    <Link
      href="https://github.com/SapiensAnatis/Dawnshard/"
      decorator={<GitHub />}
    >
      Source code
    </Link>
    <Link
      href="https://discord.gg/j9zSttjjWj"
      decorator={<SvgIcon viewBox="0 0 125 90" component={Discord} />}
    >
      Discord
    </Link>
    <Link
      href="https://www.patreon.com/dawnshard"
      decorator={<SvgIcon viewBox="0 0 25 20" component={Patreon} />}
    >
      Patreon
    </Link>
    <Link
      href="https://buymeacoffee.com/dawnshard"
      decorator={<SvgIcon component={BuyMeACoffee} />}
    >
      Buy me a coffee
    </Link>
  </Stack>
);

export default Links;
