import {
  Box,
  Card,
  CardContent,
  Grid,
  List,
  Stack,
  Typography,
  useColorScheme,
} from "@mui/joy";
import NumberedListItem from "./NumberedListItem.tsx";
import { FC } from "react";
import dragalipatchInputs from "../../assets/dragalipatch.png";
import dragalipatchDarkInputs from "../../assets/dragalipatchDark.png";

const HowToPlay: FC = () => {
  const { mode } = useColorScheme();

  const dragalipatchSrc =
    mode === "light" ? dragalipatchInputs : dragalipatchDarkInputs;

  return (
    <>
      <Box sx={{ width: { sm: "100%", md: "75%" } }}>
        <Typography typography="h2" gutterBottom>
          How to play
        </Typography>
        <Typography sx={{ mb: 2 }}>
          Setting up access to the server involves configuring a modified
          version of the original Dragalia Lost app to connect to this server at{" "}
          <a href="https://dawnshard.co.uk">https://dawnshard.co.uk</a>. It is
          possible to do so on both Android and iOS without jailbreaking or
          rooting your device. It is also possible to do this on an Android
          emulator, even though the original game could not be played on
          emulators.
        </Typography>
        <Typography>
          If you encounter any issues during the set-up process, consider
          joining the{" "}
          <a href="https://discord.gg/j9zSttjjWj">community Discord server</a>.
        </Typography>
      </Box>
      <Grid container>
        <Grid lg={7}>
          <Typography typography="h3" gutterBottom>
            Android
          </Typography>
          <List component="ol">
            <NumberedListItem number={1}>
              <Typography>
                Ensure you have the original Dragalia Lost app installed. The
                Dragalipatch app works by taking the files from the original app
                and modifying them.
              </Typography>
            </NumberedListItem>
            <NumberedListItem number={2}>
              <Typography>
                Download the Dragalipatch app by LukeFZ from the{" "}
                <a href="https://github.com/lukefz/dragalipatch/releases/latest">
                  GitHub releases page.
                </a>
              </Typography>
            </NumberedListItem>
            <NumberedListItem number={3}>
              <Typography>
                Enter{" "}
                <a href="https://dawnshard.co.uk">https://dawnshard.co.uk</a>{" "}
                into the &apos;Server Address&apos; field.
              </Typography>
            </NumberedListItem>
            <NumberedListItem number={4}>
              <Typography>
                Leave the CDN address field blank. You can try entering{" "}
                <a href={"https://cdn.minty.sbs"}>https://cdn.minty.sbs</a> if
                this is not accepted.
              </Typography>
            </NumberedListItem>
            <NumberedListItem number={5}>
              <Typography>
                Press the &apos;Patch App&apos; button in the lower right
                corner.
              </Typography>
            </NumberedListItem>
            <NumberedListItem number={6}>
              <Typography>
                Wait for the app to finish patching the Dragalia Lost app. Once
                it is done, press Install on the screen that follows.
              </Typography>
            </NumberedListItem>
            <NumberedListItem number={7}>
              <Typography>
                Launch the new Dragalia Found app, and play!
              </Typography>
            </NumberedListItem>
          </List>
        </Grid>
        <Grid xl={1} lg={0}></Grid>
        <Grid xl={4} lg={5} md={12}>
          <Card
            sx={{
              padding: 1,
            }}
          >
            <img
              style={{
                margin: "auto",
                height: "auto",
                maxWidth: "min(300px, 100%)",
                objectFit: "cover",
                objectPosition: "0 6%",
                borderRadius: 4,
              }}
              alt="Example inputs of Dawnshard server address in Dragalipatch interface"
              src={dragalipatchSrc}
            ></img>
            <Stack direction="column" alignItems="center">
              <CardContent>
                <Typography fontStyle="italic">
                  Example Dragalipatch inputs
                </Typography>
              </CardContent>
            </Stack>
          </Card>
        </Grid>
      </Grid>
      <Box sx={{ width: { sm: "100%", md: "75%" } }}>
        <Typography typography="h3" gutterBottom>
          iOS
        </Typography>
        <Typography>
          For information on how to play on iOS, please see{" "}
          <a href="https://twitter.com/FloppyEarsRCute/status/1672549774870953985">
            this tweet, containing a guide on Google Docs
          </a>
          . At a high level, you will need to use{" "}
          <a href="https://sideloadly.io/">Sideloadly</a> to install a
          pre-patched IPA file that allows configuring the server address.
        </Typography>
      </Box>
    </>
  );
};

export default HowToPlay;
