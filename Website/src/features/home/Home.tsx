import { FC } from "react";
import { Box, Grid, Stack, Typography } from "@mui/joy";
import storyBackground from "../../assets/story.png";
import storyDarkBackground from "../../assets/storyDark.png";
import HowToPlay from "./HowToPlay.tsx";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions.tsx";
import Acknowledgements from "./Acknowledgements.tsx";
import Links from "./Links.tsx";

const Home: FC = () => {
  return (
    <>
      <Box
        sx={(theme) => ({
          padding: {
            xs: 4,
            sm: 6,
          },
          objectPosition: "100% 50%",
          backgroundColor: "background.level1",
          backgroundSize: "cover",
          backgroundPosition: "10% 10%",
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
              backgroundColor: "background.surface",
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
              <Links />
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Stack
        direction="column"
        gap={3}
        sx={{ padding: 5, borderTop: "1px solid", borderColor: "divider" }}
      >
        <Box sx={{ width: { xs: "100%", md: "75%" } }}>
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
        <HowToPlay />
        <FrequentlyAskedQuestions />
        <Acknowledgements />
      </Stack>
    </>
  );
};

export default Home;
