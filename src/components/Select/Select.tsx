import styled from "styled-components";

interface ISelectProps {
  id: string;
  options: Array<{ id: string; label: string }>;
  label: string;
}

const Container = styled.div`
  position: relative;
  border: solid 1px;
  height: 30px;
  padding: 10px;

  @media screen and (min-width: 600px) {
    width: 100%;
  }
`;

const Select = ({ id, options, label }: ISelectProps): JSX.Element => {
  return <Container></Container>;
};

export default Select;
