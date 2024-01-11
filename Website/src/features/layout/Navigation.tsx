import { FC } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  ListItemDecorator,
  ListSubheader,
  SvgIcon,
} from "@mui/joy";
import { NavLink } from "react-router-dom";
import { pages } from "../../Pages.tsx";

const Navigation: FC = () => {
  return (
    <List size="md" sx={{ "--ListItem-radius": "8px", "--List-gap": "4px" }}>
      <ListItem nested>
        <ListSubheader>Information</ListSubheader>
        {pages.map(({ label, path, icon }) => {
          return (
            // TODO: pass NavLink state to ListItem and set selected={true} when on page
            <ListItem key={path}>
              <ListItemButton component={NavLink} to={path}>
                <ListItemDecorator>
                  <SvgIcon component={icon} />
                </ListItemDecorator>
                <ListItemContent>{label}</ListItemContent>
              </ListItemButton>
            </ListItem>
          );
        })}
      </ListItem>
    </List>
  );
};

export default Navigation;
