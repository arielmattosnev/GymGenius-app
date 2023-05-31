import React, { useRef } from "react";

import { Box, IconButton } from "@mui/material";

import { ArrowLeft, ArrowRight } from "lucide-react";

import BodyPart from "./BodyPart";
import ExerciseCard from "./ExerciseCard";

const HorizontalScrollbar = ({ data, setBodyPart, bodyPart, isBodyParts }) => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };

  return (
    <Box sx={{ position: "relative", overflowX: "hidden" }}>
      <Box
        ref={scrollContainerRef}
        sx={{
          display: "flex",
          flexWrap: "nowrap",
          padding: "0 20px",
          overflowX: "auto",
          scrollBehavior: "smooth",
          "&::-webkit-scrollbar": { display: "none" },
          "-ms-overflow-style": "none",
          scrollbarWidth: "none",
        }}
      >
        {data.map((item) => (
          <Box
            key={item.id || item}
            itemID={item.id || item}
            title={item.id || item}
            sx={{ flex: "0 0 auto", marginRight: "20px" }}
          >
            {isBodyParts ? (
              <BodyPart
                item={item}
                setBodyPart={setBodyPart}
                bodyPart={bodyPart}
              />
            ) : (
              <ExerciseCard exercise={item} />
            )}
          </Box>
        ))}
      </Box>
      <IconButton
        sx={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
        }}
        onClick={scrollLeft}
        aria-label="Scroll Left"
      >
        <ArrowLeft />
      </IconButton>
      <IconButton
        sx={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
        }}
        onClick={scrollRight}
        aria-label="Scroll Right"
      >
        <ArrowRight />
      </IconButton>
    </Box>
  );
};

export default HorizontalScrollbar;
