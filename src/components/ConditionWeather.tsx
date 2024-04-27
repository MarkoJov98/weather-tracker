const ConditionWeather = ({condition, handleAlert}: {condition: string; handleAlert:() => void}) => {
    return (
        <>
        <tr>
            <td>{condition}</td>
            <td><button onClick={handleAlert}>Check Cities</button></td>
        </tr>
        
        </>
    );
};

export default ConditionWeather;