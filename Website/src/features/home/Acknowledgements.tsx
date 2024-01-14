import { FC, ReactElement } from "react";
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemContent,
  ListItemDecorator,
  Typography,
} from "@mui/joy";

import lukeFz from "../../assets/acknowledgement/lukefz.webp";
import ceris from "../../assets/acknowledgement/ceris.webp";
import nano from "../../assets/acknowledgement/nano.png";
import nightmerp from "../../assets/acknowledgement/nightmerp.webp";
import skazord from "../../assets/acknowledgement/skazord.webp";
import sockperson from "../../assets/acknowledgement/sockperson.webp";
import lati from "../../assets/acknowledgement/lati.jpg";
import fatestimelines1337 from "../../assets/acknowledgement/fatestimelines1337.webp";

const Acknowledgement: FC<{
  name: string;
  avatarSrc: string;
  children: string | (string | ReactElement)[];
}> = ({ name, avatarSrc, children }) => (
  <ListItem>
    <ListItemDecorator sx={{ marginRight: "0.125rem" }}>
      <Avatar src={avatarSrc} alt={`${name} profile icon`} />
    </ListItemDecorator>
    <ListItemContent>
      <Typography>
        <Typography fontWeight="bold">{name}</Typography>, {children}
      </Typography>
    </ListItemContent>
  </ListItem>
);

const Acknowledgements: FC = () => (
  <Box sx={{ maxWidth: { xs: "100%", md: "75%" } }}>
    <Typography gutterBottom typography="h2">
      Acknowledgements
    </Typography>
    <Typography gutterBottom>
      Special thanks to the following people, who have contributed to the server
      source code or its development in other ways:
    </Typography>
    <List>
      <Acknowledgement name="LukeFZ" avatarSrc={lukeFz}>
        for developing the BaaS account system, DragaliPatch, and implementing
        features including the event compendium, endeavours, and more.
      </Acknowledgement>
      <Acknowledgement name="Ceris" avatarSrc={ceris}>
        for developing <a href="https://orchis.cherrymint.live">Orchis</a>,
        another server revival project for Dragalia Lost.
      </Acknowledgement>
      <Acknowledgement name="Nano" avatarSrc={nano}>
        for contributing character, summoning and dragon functionality to the
        server
      </Acknowledgement>
      <Acknowledgement name="Nightmerp" avatarSrc={nightmerp}>
        for developing helper, wyrmprint, and quest-related features.
      </Acknowledgement>
      <Acknowledgement name="Skazord" avatarSrc={skazord}>
        for working on the Halidom.
      </Acknowledgement>
      <Acknowledgement name="sockperson" avatarSrc={sockperson}>
        for implementing the Mercurial Gauntlet.
      </Acknowledgement>
      <Acknowledgement name="LatiWednesday" avatarSrc={lati}>
        for working on character story epithets.
      </Acknowledgement>
      <Acknowledgement name="FatesTimelines1337" avatarSrc={fatestimelines1337}>
        for adding treasure chests to the main campaign.
      </Acknowledgement>
    </List>
  </Box>
);

export default Acknowledgements;
