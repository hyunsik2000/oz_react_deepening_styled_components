import styled from "styled-components";

const Header = ({ city }) => {
  return (
    <HeaderContainer>
      <Logo>{city} - 5Days Weather</Logo>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  width: 100%;
  padding: 16px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;
