import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import { Box } from "@mui/material";

import {
  YoutubeOptions,
  exercisesOptions,
  fetchData,
} from "../utils/fetchData";

import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exercisesVideos, setExercisesVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchurl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exercisesOptions
      );
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(
        `${youtubeSearchurl}/search?query=${exerciseDetailData.name}`,
        YoutubeOptions
      );
      setExercisesVideos(exerciseVideosData.contents);
    };

    fetchExercisesData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exercisesVideos={exercisesVideos}
        name={exerciseDetail.name}
      />
    </Box>
  );
};

export default ExerciseDetail;
