import MUISelect from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import styled from "styled-components";

interface ISelectProps {
  id: string;
  options: Array<{ id: string; label: string }>;
  label: string;
}

const Container = styled.div`
  width: 100%;

  fieldset {
    border-radius: 0;
    border-color: black;
  }
`;

const Select = ({ id, options = [], label }: ISelectProps): JSX.Element => {
  return (
    <Container>
      <FormControl style={{ width: "100%" }}>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>

        <MUISelect
          id={id}
          // value={age}
          label={label}
          // onChange={handcleChange}
          style={{ height: "52px" }}
        >
          {options.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.label}
            </MenuItem>
          ))}
        </MUISelect>
      </FormControl>
    </Container>
  );
};

export default Select;
