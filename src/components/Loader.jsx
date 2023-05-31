import { Stack } from "@mui/material";

import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      width="100%"
    >
      <InfinitySpin color="red" />
    </Stack>
  );
};

export default Loader;
