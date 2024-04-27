import React, { ReactElement, useState } from "react";
import SingleWeather from "./SingleWeather";

export interface CityWeather {
  ime: string;
  temperatura?: number;
  vlaznostVazduha?: number;
}

const cityWeatherInfo: CityWeather[] = [
  { ime: "Novi Sad", temperatura: 22, vlaznostVazduha: 80 },
  { ime: "Beograd", temperatura: 21, vlaznostVazduha: 85 },
  { ime: "Nis", vlaznostVazduha: 88 },
  { ime: "Zlatibor", temperatura: 17, vlaznostVazduha: 85 },
  { ime: "Sremska Mitrovica", temperatura: 22, vlaznostVazduha: 80 },
];

function CityWeatherList(): ReactElement {
  const [cities, setCities] = useState(cityWeatherInfo);

  const onRemove = (cityIndex: number) => {
    setCities(cities.filter((city, index) => cityIndex !== index));
  };
  const moveToTop =(cityIndex: number) => {
    setCities([cities[cityIndex], ...cities.filter((city, index) => cityIndex !== index )]);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Ime</th>
          <th>Temperatura</th>
          <th>Vlaznost Vazduha</th>
        </tr>
      </thead>
      <tbody>
        {cities.map((city, index) => (
          <SingleWeather key={index} city={city} onRemove={() =>onRemove(index)} moveToTop={() => moveToTop(index)} />
        ))}
      </tbody>
    </table>
  );
}

export default CityWeatherList;
