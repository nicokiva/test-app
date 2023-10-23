import MUIButton from "@mui/material/Button";
import React from "react";

interface IButtonProps {
  text: string;
  style?: React.CSSProperties;
}

const Button = ({ text, style }: IButtonProps) => {
  return (
    <MUIButton style={style} fullWidth variant="contained">
      {text}
    </MUIButton>
  );
};

export default Button;
