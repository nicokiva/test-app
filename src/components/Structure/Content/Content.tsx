import styled from "styled-components";

const Container = styled.section`
  padding: 20px 50px;
`;

interface IContentProps {
  children: Array<React.ReactNode> | React.ReactNode;
}

const Content = ({ children }: IContentProps): JSX.Element => (
  <Container>{children}</Container>
);

export default Content;
