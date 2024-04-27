import { CityWeather } from "./CityWeatherList";
import React, { FC } from "react";


interface CityWeatherProp {
    city: CityWeather;
    onRemove: () => void;
    moveToTop: () => void;
}
const SingleWeather: FC<CityWeatherProp> = ({city, onRemove, moveToTop}: CityWeatherProp) => {
   
    return (
        <tr >
            <td>{city.ime}</td>
            <td>{city.temperatura ?? "Nepoznato"}</td>
            <td>{city.vlaznostVazduha ?? "Nepoznato"}</td>
            <td>
              <button onClick={(onRemove)}>Remove</button>
            </td>
            <td>
                <button onClick={(moveToTop)}>Move to Top</button>
            </td>
          </tr>
        
        
    );
};

export default SingleWeather;