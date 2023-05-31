import { Box, Button, Stack, Typography } from "@mui/material";

import heroImage from "../assets/images/banner.png";
import { Dumbbell } from "lucide-react";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "220px", xs: "70px" },
        ml: { lg: "70px" },
        textAlign: { xs: "center", lg: "start" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        GymGenius <Dumbbell />
      </Typography>
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: "44px", sm: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Suor, Sorriso <br /> e Persistência
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Veja os exercícios mais efetivos!
      </Typography>
      <Button
        href="#exercises"
        sx={{ backgroundColor: "#FF2625", color: "#FFF", padding: "10px" }}
        className="search-btn"
      >
        Explore os Exercícios
      </Button>
      <Typography
        fontWeight="600"
        fontSize="200px"
        color="#FF2625"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
      >
        Exercicíos
      </Typography>
      <img
        src={heroImage}
        alt="Imagem de destaque"
        className="hero-banner-img"
      />
    </Box>
  );
};

export default HeroBanner;
