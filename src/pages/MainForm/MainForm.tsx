import styled from "styled-components";
import { Input, Select } from "../../components";
import { Button } from "../../components/Button";

const FormContainer = styled.form`
  border: solid 1px;
  padding: 50px 20px;
`;

const InputsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  gap: 25px;

  margin-bottom: 25px;

  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const BottomBar = styled.div`
  display: flex;

  button {
    max-width: 400px;
  }

  @media screen and (min-width: 600px) {
    justify-content: center;
  }
`;

const MainForm = (): JSX.Element => {
  return (
    <FormContainer>
      <InputsContainer>
        <Input type="text" label="Name" id="name" />
        <Input type="text" label="Last name" id="last-name" />
        <Input type="number" label="Age" id="age" />

        <Select
          label="Country"
          id="country"
          options={[
            { id: "ar", label: "Argentina" },
            { id: "ca", label: "Canada" },
            { id: "us", label: "USA" },
          ]}
        />

        <Input type="text" label="Hobbies" id="hobbies" />
        <Input type="text" label="Spoken languages" id="languages" />
      </InputsContainer>

      <BottomBar>
        <Button text="Submit" />
      </BottomBar>
    </FormContainer>
  );
};

export default MainForm;
