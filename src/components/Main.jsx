import styled from "styled-components";
import Header from "./Header";
import CardList from "./CardList";
import { useEffect, useState } from "react";

const Main = () => {
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [city, setCity] = useState("");
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        setLocation({ lat, lon });

        const res = await fetch(
          `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${API_KEY}`
        );

        const data = await res.json();
        if (!res.ok) {
          throw new Error("도시 불러오기 실패");
        }

        const city = data[0].name || "불러올 수 없는 장소";
        setCity(city);
      },
      (error) => {
        setError(error.message);
      }
    );
  }, []);

  return (
    <MainContainer>
      {error ? (
        <ErrorSign>{error}</ErrorSign>
      ) : (
        <>
          <Header city={city} />
          <CardList lat={location.lat} lon={location.lon} API_KEY={API_KEY} />
        </>
      )}
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.main`
  width: 80vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 10vh;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const ErrorSign = styled.p`
  color: red;
`;
