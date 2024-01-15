import { FC, useMemo, useState } from "react";
import useNews from "./useNews.ts";
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
import NewsItem from "./NewsItem.tsx";
import news from "../../assets/news.png";
import newsDark from "../../assets/newsDark.png";

const News: FC = () => {
  const newsItems = useNews();
  const { mode } = useColorScheme();
  const [activeItem, setActiveItem] = useState(0);

  const activeNewsItem = useMemo(
    () => newsItems.find((x) => x.id === activeItem),
    [activeItem, newsItems],
  );

  return (
    <Stack width="100%" height="100%" direction="row">
      <Box width="60%">
        <Box
          sx={{
            p: 2,
            backgroundColor: "background.surface",
            borderColor: "divider",
          }}
        >
          <Typography typography="h1">News and updates</Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "background.body",
            borderTop: "1px solid",
            borderColor: "divider",
            p: 2,
          }}
        >
          <List sx={{ display: "flex", gap: 2 }}>
            {newsItems.map(({ id, headline, description, date }) => (
              <NewsItem
                key={id}
                id={id}
                headline={headline}
                description={description}
                date={date}
                setActiveItem={setActiveItem}
              />
            ))}
          </List>
        </Box>
      </Box>
      <Box
        sx={(theme) => ({
          width: "40%",
          height: "100%",
          borderLeft: "1px solid",
          borderColor: "divider",
          backgroundSize: "fill",
          backgroundPosition: "10% 10%",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${news})`,
          [theme.getColorSchemeSelector("dark")]: {
            backgroundImage: `url(${newsDark})`,
          },
        })}
      >
        <Box sx={{ p: 4, height: "100%" }}>
          {activeNewsItem && (
            <Card
              sx={{
                height: "100%",
              }}
            >
              <CardContent>
                <Typography typography="h2">
                  {activeNewsItem.headline}
                </Typography>
                <Typography fontSize="small">
                  {activeNewsItem.date.toLocaleString()}
                </Typography>
                <Typography width="100%">
                  {activeNewsItem.description}
                </Typography>
              </CardContent>
            </Card>
          )}
        </Box>
      </Box>
    </Stack>
  );
};

export default News;
