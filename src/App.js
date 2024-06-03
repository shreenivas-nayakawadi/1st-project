import "./App.css";
import React, { useState } from "react";

function App() {
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [bmi, setbmi] = useState("");
  const [message, setMessage] = useState("");
  let calcBmi = (e) => {
    e.preventDefault();
    if (height === 0 || weight === 0) {
      alert("enter the valid values");
    } else {
      let bmi = (weight / (height * height)) * 10000;
      setbmi(bmi.toFixed(1));

      if (bmi < 18.5) {
        setMessage("you are under weight");
      } else if (bmi > 18.5 && bmi < 29.9) {
        setMessage("you have a healthy weight");
      } else {
        setMessage("you have healthy weight");
      }
    }
  };
  let reload = (e) => {
    setHeight("");
    setWeight("");
    setbmi("");
    setMessage("");
  };
  return (
    <div className="container">
      <h2>BMI Calculator</h2>
      <div className="input">
        <div className="weight">
          <label className="label" htmlFor="weightPlaceHolder">
            Weight
          </label>
          <input
            className="weightPlaceHolder"
            type="text"
            placeholder="enter your weight (in Kgs)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="height">
          <label className="label" htmlFor="heightPlaceHolder">
            Height
          </label>
          <input
            className="heightPlaceHolder"
            type="text"
            placeholder="enter your height (in cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
      </div>
      <div className="btns">
        <button className="btn submit" type="submit" onClick={calcBmi}>
          Submit
        </button>
        <button className="btn reload" onClick={reload}>
          Reload
        </button>
      </div>
      <div className="message">
        <h3>Your BMI is:{bmi}</h3>
        <h5>{message}</h5>
      </div>
    </div>
  );
}
export default App;
