import styled from "styled-components";

const Card = () => {
  return (
    <CardBox>
      <Title>
        <span>2025.11.27</span> <span>🌤️</span>
      </Title>
      <Weather>구름 조금</Weather>
      <Temperature>
        <span>🌡️</span>
        <span>10도</span>
      </Temperature>
    </CardBox>
  );
};

export default Card;

const CardBox = styled.article`
  height: 150px;
  background: white;
  padding: 30px 26px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

const Title = styled.div`
  display: flex;
  gap: 20px;
  font-size: 20px;
  font-weight: 600;
`;

const Weather = styled.p`
  text-align: center;
  font-size: 20px;
`;

const Temperature = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
`;
