import styled from "styled-components";
import Card from "./Card";
import { useEffect, useState } from "react";

const CardList = ({ lat, lon, API_KEY }) => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    if (!lat || !lon) return;

    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
        );

        if (!res.ok) {
          return new Error("날씨 불러오기 실패");
        }

        const datas = await res.json();

        const weatherList = datas.list.filter((data) =>
          data.dt_txt.includes("12:00:00")
        );

        setWeatherData(weatherList.slice(0, 5));
      } catch (err) {
        return new Error(err);
      }
    };

    fetchWeather();
  }, [lat, lon]);

  return (
    <ListContainer>
      {weatherData.length === 0 ? (
        <p>날씨 데이터를 불러오는 중...</p>
      ) : (
        weatherData.map((el) => (
          <Card
            key={`${el.dt}`}
            date={el.dt_txt}
            temperature={el.main.temp}
            weather={el.weather}
          />
        ))
      )}
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
