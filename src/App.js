import React, { useState } from 'react';

const App = () => {

  const [temperatureValue, setTemperatureValue] = useState(30);
  const [temperatureColour, setTemperatureColour] = useState('cold');

  const increaseTemperature = () => {
    if (temperatureValue === 30) return;
    const newTEmperature = temperatureValue + 1;
    if (newTEmperature >= 15) {

      setTemperatureColour('hot');
    }
    setTemperatureValue(newTEmperature);
  };

  const decreaseTemperature = () => {
    if (temperatureValue === 0)
      return;
    const newTEmperature = temperatureValue - 1;
    if (newTEmperature < 15) {
      setTemperatureColour('cold');
    }
    setTemperatureValue(newTEmperature);
  };



  // string interpolation
  //  const age=28;
  //  const message=`my age is ${age}`
  //  op will be my age is 28;

  return (
    <div className='app-container'>
      <div className='temperature-display-container'>
        <div className={`temperature-display ${temperatureColour}`}>{temperatureValue}°C</div>
      </div>
      <div className='button-container'>
        <button onClick={() => increaseTemperature()}>+</button>
        <button onClick={() => decreaseTemperature()}>-</button>

      </div>
    </div>
  );
};
export default App;