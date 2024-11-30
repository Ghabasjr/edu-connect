/** @jsxImportSource theme-ui */
import React from "react";
import { Box } from "theme-ui";

type HorizontalProps = {
  borderColor?: string;
};

const HorizontalLine: React.FC<HorizontalProps> = ({
  borderColor = "black",
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        borderBottom: "0.3px solid",
        borderColor: borderColor,
      }}
    />
  );
};

export default HorizontalLine;
