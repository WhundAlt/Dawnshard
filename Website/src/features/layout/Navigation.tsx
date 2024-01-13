import { FC, useMemo } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  ListItemDecorator,
  ListSubheader,
  SvgIcon,
} from "@mui/joy";
import { NavLink, useLocation } from "react-router-dom";
import { pages } from "../../Pages.tsx";
import { SvgIconComponent } from "@mui/icons-material";

const NavigationListItem: FC<{
  label: string;
  path: string;
  icon: SvgIconComponent;
  selected: boolean;
  onClickItem: () => void;
}> = ({ label, path, icon, selected, onClickItem }) =>
  useMemo(() => {
    return (
      <ListItem>
        <ListItemButton
          component={NavLink}
          to={path}
          selected={selected}
          onClick={onClickItem}
        >
          <ListItemDecorator>
            <SvgIcon component={icon} />
          </ListItemDecorator>
          <ListItemContent>{label}</ListItemContent>
        </ListItemButton>
      </ListItem>
    );
  }, [icon, label, path, selected]);

const Navigation: FC<{ onClickItem: () => void }> = ({ onClickItem }) => {
  const { pathname } = useLocation();

  return useMemo(() => {
    return (
      <List size="md" sx={{ "--ListItem-radius": "8px", "--List-gap": "4px" }}>
        <ListItem nested>
          <ListSubheader>Information</ListSubheader>
          {pages.map(({ label, path, icon }) => (
            <NavigationListItem
              key={path}
              label={label}
              path={path}
              icon={icon}
              selected={pathname === path}
              onClickItem={onClickItem}
            />
          ))}
        </ListItem>
      </List>
    );
  }, [pathname, onClickItem]);
};

export default Navigation;
