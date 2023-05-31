import { Typography, Stack, Button } from "@mui/material";

import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const detailsExercisesCard = [
    {
      id: 1,
      href: BodyPartImage,
      name: bodyPart,
    },
    {
      id: 2,
      href: TargetImage,
      name: target,
    },
    {
      id: 3,
      href: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{
        flexDirection: { lg: "row" },
        padding: "20px",
        alignItems: "center",
      }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h3">{name}</Typography>
        <Typography variant="h6">
          Exercicios são feitos para nos manter fortes e saudáveis.{" "}
          <span className="exercise-bold">{name}</span> é um dos melhores
          exercícios para definir o seu{" "}
          <span className="exercise-bold">{target}</span>. Ele irá ajudar você a
          se sentir melhor, mais saudável e confiante
        </Typography>
        {detailsExercisesCard.map(({ id, href, name }) => (
          <Stack key={id} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: "#FFF2DB",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <img
                src={href}
                alt={bodyPart}
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <Typography variant="h6" textTransform="capitalize">
              {name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
