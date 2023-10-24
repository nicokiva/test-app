import MUISelect, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import styled from "styled-components";

interface ISelectProps {
  id: string;
  options: Array<{ id: string; label: string }>;
  label: string;
  onChange: (event: SelectChangeEvent<HTMLSelectElement>) => void;
  errorMessage?: string;
  value?: string;
}

const Container = styled.div`
  width: 100%;

  fieldset {
    border-radius: 0;
    border-color: black;
  }
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
`;

const Select = ({
  id,
  options = [],
  label,
  onChange,
  errorMessage,
  value = "",
}: ISelectProps): JSX.Element => {
  return (
    <Container>
      <FormControl style={{ width: "100%" }}>
        <InputLabel>{label}</InputLabel>

        <MUISelect
          id={id}
          label={label}
          onChange={onChange}
          style={{ height: "52px" }}
          error={!!errorMessage}
          value={value as ""}
        >
          {options.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.label}
            </MenuItem>
          ))}
        </MUISelect>
      </FormControl>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
};

export default Select;
