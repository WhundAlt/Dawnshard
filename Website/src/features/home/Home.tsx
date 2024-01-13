import { FC } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardCover,
  Grid,
  List,
  ListItem,
  ListItemContent,
  ListItemDecorator,
  Stack,
  Typography,
  useColorScheme,
} from "@mui/joy";
import { GitHub, Google, Image, ThreePOutlined } from "@mui/icons-material";
import storyBackground from "../../assets/story.png";
import storyDarkBackground from "../../assets/storyDark.png";
import dragalipatchInputs from "../../assets/dragalipatch.png";
import dragalipatchDarkInputs from "../../assets/dragalipatchDark.png";
import NumberedListItem from "./NumberedListItem.tsx";

const Home: FC = () => {
  const { mode, systemMode } = useColorScheme();
  console.log(mode, systemMode);

  const dragalipatchSrc =
    mode === "light" ? dragalipatchInputs : dragalipatchDarkInputs;

  return (
    <>
      <Box
        sx={(theme) => ({
          padding: 6,
          objectPosition: "100% 50%",
          backgroundColor: "background.level1",
          backgroundSize: "cover",
          backgroundPosition: "10% 11%",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${storyBackground})`,
          [theme.getColorSchemeSelector("dark")]: {
            backgroundImage: `url(${storyDarkBackground})`,
          },
        })}
      >
        <Grid container>
          <Grid
            lg={7}
            sm={12}
            sx={{
              position: "relative",
              padding: 2,
              borderRadius: "10px",
              border: "1px solid",
              borderColor: "divider",
              bgcolor: "background.surface",
            }}
          >
            <Stack direction="column" gap={4}>
              <div>
                <Typography typography="h1" gutterBottom>
                  Welcome to Dawnshard
                </Typography>
                <Typography typography="h2" fontSize="xl" gutterBottom>
                  Dawnshard is a server emulator project aimed at enabling
                  continued play of Dragalia Lost.
                </Typography>
                <Typography>
                  Ever since the official servers were discontinued in November
                  2022, Dawnshard has been in development as a fan-led
                  reimplementation of the game&apos;s web backend.
                </Typography>
              </div>
              <Stack direction="row" gap={2}>
                <Button
                  component={"a"}
                  startDecorator={<GitHub />}
                  href="https://github.com/SapiensAnatis/Dawnshard/"
                  variant="soft"
                  color="neutral"
                >
                  Source code
                </Button>
                <Button
                  component={"a"}
                  startDecorator={<Google />}
                  href="https://github.com/SapiensAnatis/Dawnshard/"
                  variant="soft"
                  color="neutral"
                >
                  Google
                </Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Stack direction="column" gap={2} sx={{ padding: 5 }}>
        <Box sx={{ maxWidth: "75%" }}>
          <Typography typography="h2" gutterBottom>
            About
          </Typography>
          <Typography>
            Dawnshard is attempting to reimplement the server infrastructure of
            Dragalia Lost. It aims to do so in a vanilla fashion, i.e. with
            limited changes to the original mechanics of the game. Though not
            all features are yet implemented, the game is in a playable state
            and it is possible to progress largely as normal.
          </Typography>
        </Box>
        <Box sx={{ maxWidth: "75%" }}>
          <Typography typography="h2" gutterBottom>
            How to play
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Setting up access to the server involves configuring a modified
            version of the original Dragalia Lost app to connect to this server
            at <a href="https://dawnshard.co.uk">https://dawnshard.co.uk</a>. It
            is possible to do so on both Android and iOS without jailbreaking or
            rooting your device. It is also possible to do this on an Android
            emulator, even though the original game could not be played on
            emulators.
          </Typography>
          <Typography>
            If you encounter any issues during the set-up process, consider
            joining the{" "}
            <a href="https://discord.gg/j9zSttjjWj">community Discord server</a>
            .
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
                  Dragalipatch app works by taking the files from the original
                  app and modifying them.
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
                  into the &apos;Server Address&apos; field, and leave the
                  &apos;CDN address&apos; field blank.
                </Typography>
              </NumberedListItem>
              <NumberedListItem number={3}>
                <Typography>
                  Press the &apos;Patch App&apos; button in the lower right
                  corner.
                </Typography>
              </NumberedListItem>
              <NumberedListItem number={4}>
                <Typography>
                  Wait for the app to finish patching the Dragalia Lost app.
                  Once it is done, press Install on the screen that follows.
                </Typography>
              </NumberedListItem>
              <NumberedListItem number={5}>
                <Typography>
                  Wait for the app to finish patching the Dragalia Lost app.
                  Once it is done, press Install on the screen that follows.
                </Typography>
              </NumberedListItem>
            </List>
          </Grid>
          <Grid xl={1} lg={0}></Grid>
          <Grid xl={4} lg={5} md={12}>
            <Card>
              <img
                style={{
                  margin: "auto",
                  height: "280px",
                  width: "300px",
                  objectFit: "cover",
                  objectPosition: "0 5%",
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
      </Stack>
    </>
  );
};

export default Home;
