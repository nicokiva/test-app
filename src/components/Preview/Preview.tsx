import styled from "styled-components";
import { usePerson } from "../../context/personContext";

const Container = styled.div`
  margin-top: 20px;
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

const Key = styled.span`
  font-weight: bolder;
`;

const ItemContainer = styled.div``;

const NoDataContainer = styled.p`
  font-size: 20px;
  font-weight: bolder;
`;

const Preview = (): JSX.Element => {
  const { person } = usePerson();
  if (!person) {
    return <NoDataContainer>Please, select a user.</NoDataContainer>;
  }

  return (
    <Container>
      <ItemContainer>
        <Key>Name:</Key> {person.name}
      </ItemContainer>

      <ItemContainer>
        <Key>Last name:</Key> {person.lastName}
      </ItemContainer>

      <ItemContainer>
        <Key>Age:</Key> {person.age}
      </ItemContainer>

      <ItemContainer>
        <Key>Country:</Key> {person.country}
      </ItemContainer>

      <ItemContainer>
        <Key>Hobbies:</Key> {person.hobbies}
      </ItemContainer>

      <ItemContainer>
        <Key>Spoken languages:</Key> {person.languages}
      </ItemContainer>
    </Container>
  );
};

export default Preview;
