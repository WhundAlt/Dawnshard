import { Dispatch, FC, SetStateAction } from "react";
import { Card, CardContent, Chip, Stack, Typography } from "@mui/joy";

const maxDescriptionLength = 300;

const NewsItem: FC<{
  id: number;
  headline: string;
  description: string;
  date: Date;
  setActiveItem: Dispatch<SetStateAction<number>>;
}> = ({ id, headline, description, date, setActiveItem }) => {
  const trimmedDescription =
    description.length > maxDescriptionLength
      ? description.substring(0, maxDescriptionLength - 1) + "…"
      : description;

  return (
    <Card
      variant="outlined"
      orientation="horizontal"
      component="li"
      sx={{
        "&:hover": {
          boxShadow: "lg",
          borderColor: "var(--joy-palette-neutral-outlinedDisabledBorder)",
        },
      }}
      onClick={() => setActiveItem(id)}
    >
      <CardContent>
        <Stack direction="row" gap={2} alignItems="center">
          <Typography typography="h2">{headline}</Typography>
          <Chip color="primary" variant="solid" sx={{ height: "1rem" }}>
            New
          </Chip>
        </Stack>
        <Typography fontSize="small">{date.toLocaleString()}</Typography>
        <Typography width="100%">{trimmedDescription}</Typography>
      </CardContent>
    </Card>
  );
};

export default NewsItem;
