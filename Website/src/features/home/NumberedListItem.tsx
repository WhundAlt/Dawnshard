import { FC, ReactNode } from "react";
import {
  ListItem,
  ListItemContent,
  ListItemDecorator,
  Typography,
} from "@mui/joy";

const NumberedListItem: FC<{ number: number; children: ReactNode }> = ({
  number,
  children,
}) => (
  <ListItem>
    <ListItemDecorator>
      <Typography fontSize="l" fontWeight="bold">
        {number}.
      </Typography>
    </ListItemDecorator>
    <ListItemContent>{children}</ListItemContent>
  </ListItem>
);

export default NumberedListItem;
