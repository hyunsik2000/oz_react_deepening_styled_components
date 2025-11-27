import styled from "styled-components";
import Card from "./Card";

const CardList = () => {
  return (
    <ListContainer>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </ListContainer>
  );
};

export default CardList;

const ListContainer = styled.section`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 24px;
`;
