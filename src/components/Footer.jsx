import { Box, Stack, Typography } from "@mui/material";

import Logo from "../assets/images/Logo.png";

import { GithubIcon, LinkedinIcon } from "lucide-react";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#FFF3F4">
      <Stack gap="40px" alignItems="center" px="40px" pt="14px" mb="15px">
        <img src={Logo} alt="" />
        <Typography variant="h6" color="#FF2625">
          GymGenius &copy;
        </Typography>
        <Stack direction="row" gap="10px">
          <a
            href="https://github.com/arielmattosnev"
            className="hoverAnimation"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon size={40} color="#FF2625" />
          </a>
          <a
            href="https://www.linkedin.com/in/ariel-mattos-03908022b/"
            className="hoverAnimation"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinIcon size={40} color="#FF2625" />
          </a>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
