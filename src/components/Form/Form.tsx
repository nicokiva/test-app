import styled from "styled-components";
import { Input, Select } from "..";
import { Button } from "../Button";
import useMainForm from "./useForm";

const ContainerForm = styled.form`
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

const Form = (): JSX.Element => {
  const {
    actions: { onFormSubmit, onInputChange, onSelectChange },
    state: { countries, errors },
  } = useMainForm();

  return (
    <ContainerForm onSubmit={onFormSubmit}>
      <InputsContainer>
        <Input
          type="text"
          label="Name *"
          id="name"
          onChange={onInputChange}
          errorMessage={errors.name ? "Please provide a valid name" : undefined}
        />
        <Input
          type="text"
          label="Last name *"
          id="lastName"
          onChange={onInputChange}
          errorMessage={
            errors.name ? "Please provide a valid last name" : undefined
          }
        />
        <Input
          type="number"
          label="Age *"
          id="age"
          onChange={onInputChange}
          errorMessage={errors.name ? "Please provide a valid age" : undefined}
        />

        <Select
          onChange={onSelectChange}
          label="Country *"
          id="country"
          options={countries}
          errorMessage={
            errors.name ? "Please provide a valid country" : undefined
          }
        />

        <Input
          type="text"
          label="Hobbies"
          id="hobbies"
          onChange={onInputChange}
        />
        <Input
          type="text"
          label="Spoken languages"
          id="languages"
          onChange={onInputChange}
        />
      </InputsContainer>

      <BottomBar>
        <Button text="Submit" type="submit" />
      </BottomBar>
    </ContainerForm>
  );
};

export default Form;
