import styled from "styled-components";
import { Input } from "../../components";

const FormContainer = styled.form`
  border: solid 1px;
  padding: 50px 20px;

  display: grid;
  grid-template-columns: repeat(1, 1fr);

  gap: 25px;

  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const MainForm = (): JSX.Element => {
  return (
    <FormContainer>
      <Input type="text" label="Name" id="name" />

      <Input type="text" label="Last name" id="last-name" />

      <Input type="number" label="Age" id="age" />
    </FormContainer>
  );
};

export default MainForm;
