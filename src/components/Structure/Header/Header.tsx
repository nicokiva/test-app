import styled from "styled-components";

const RawHeader = styled.header`
  background-color: lightblue;
  padding: 50px 10px;
  text-align: center;
  font-size: 30px;
  font-weight: bolder;

  @media screen and (min-width: 300px) {
  }
`;

const Header = (): JSX.Element => <RawHeader>Test app header</RawHeader>;

export default Header;
