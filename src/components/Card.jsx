import styled from "styled-components";

const Card = ({ date, temperature, weather }) => {
  return (
    <CardBox>
      <Title>
        <span>{date}</span>{" "}
        <img
          src={`https://openweathermap.org/img/wn/${weather[0].icon}.png`}
          alt="weather-icon"
          width={40}
        />
      </Title>
      <Weather>{weather[0].description}</Weather>
      <Temperature>
        <span>🌡️</span>
        <span>{temperature}도</span>
      </Temperature>
    </CardBox>
  );
};

export default Card;

const CardBox = styled.article`
  min-width: 260px;
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
  align-items: center;
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
