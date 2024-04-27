import React, { ReactElement, useState } from "react";
import SingleWeather from "./SingleWeather";
import ConditionWeather from "./ConditionWeather";

export interface CityWeather {
  ime: string;
  temperatura?: number;
  vlaznostVazduha?: number;
  vremenskiUslovi?: string;
}

const cityWeatherInfo: CityWeather[] = [
  { ime: "Novi Sad", temperatura: 22, vlaznostVazduha: 80, vremenskiUslovi: "suncano"},
  { ime: "Beograd", temperatura: 21, vlaznostVazduha: 85, vremenskiUslovi: "suncano"},
  { ime: "Nis", vlaznostVazduha: 88 , vremenskiUslovi: "kisovito"},
  { ime: "Zlatibor", temperatura: 17, vlaznostVazduha: 85,  vremenskiUslovi: "oblacno"},
  { ime: "Sremska Mitrovica", temperatura: 12, vlaznostVazduha: 80, vremenskiUslovi: "kisovito"},
];
export const weatherConditions = [ "kisovito", "suncano", "snezno", "oblacno"];

function CityWeatherList(): ReactElement {
  const [cities, setCities] = useState(cityWeatherInfo);

  const onRemove = (cityIndex: number) => {
    setCities(cities.filter((city, index) => cityIndex !== index));
  };
  const moveToTop =(cityIndex: number) => {
    setCities([cities[cityIndex], ...cities.filter((city, index) => cityIndex !== index )]);
  };
  const handleAlert = (condition: string) =>  {
    const condtionCities = cityWeatherInfo.filter((city) => city.vremenskiUslovi === condition);
    const conditionCitiesNames = condtionCities.map((city) => city.ime).join(", ");
    alert (`Gradovi u kojima je ${condition}: ${conditionCitiesNames}`);
  }

  return (
    <>
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
    <table>
      <thead>
        <tr>
          <th>Ime</th>
        </tr>
      </thead>
      <tbody>
        {weatherConditions.map((condition) => (
          <ConditionWeather condition={condition} handleAlert={() =>handleAlert(condition)}/>
        ))}
      </tbody>
    </table>
    </>
  );
}

export default CityWeatherList;
