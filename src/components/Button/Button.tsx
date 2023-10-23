import MUIButton from "@mui/material/Button";

interface IButtonProps {
  text: string;
  type?: "submit" | "button";
}

const Button = ({ text, type = "button" }: IButtonProps) => {
  return (
    <MUIButton type={type} fullWidth variant="contained">
      {text}
    </MUIButton>
  );
};

export default Button;
