import React, { useState } from "react";

function BMI() {
  const [weight, setWeight] = useState("");
  const [feet, setFeet] = useState("");
  const [inch, setInch] = useState("");
  const [result, setResult] = useState("");

  const userEnterWeight = (event) => {
    setWeight(event.target.value);
  };

  const userEnterFeet = (event) => {
    setFeet(event.target.value);
  };

  const userEnterInch = (event) => {
    setInch(event.target.value);
  };

  const calculateBMI = () => {
    if (weight && inch && feet) {
      const heightInMeters = feet * 0.3048 + inch * 0.0254;
      const BMI = (weight / (heightInMeters * heightInMeters)).toFixed(2);

      let resultMessage;
      if (BMI < 18.5) {
        resultMessage = "- Your BMI falls in Underweight Range";
      } else if (BMI >= 18.5 && BMI <= 24.9) {
        resultMessage = "- Your BMI falls in Healthy Weight Range";
      } else {
        resultMessage = "- Your BMI falls in Overweight Range";
      }

      setResult(`${BMI} ${resultMessage}`);
      setFeet("");
      setWeight("");
      setInch("");
    } else {
      setResult("Please enter valid values for weight, inch, and feet.");
    }
  };

  return (
    <div className="grid lg:grid-cols-2 lg:grid-rows-1 sm:grid-rows-2 gap-1 p-4 place-items-center list ">
      <div >
        <p style={{ fontSize: "clamp(30px, 5vw, 35px)" }}>Calculate Your BMI</p>
        <hr />
        <p className="mt-9 mb-2 text-1xl">Weight</p>
        <input
          type="number"
          className="form-control border-orange-600"
          placeholder="Weight in KG"
          value={weight}
          onChange={userEnterWeight}
        />
        <p className="mb-2 text-1xl">Height</p>
        <div className="flex">
          <input
            type="number"
            className="form-control border-orange-600"
            placeholder="Feet"
            value={feet}
            onChange={userEnterFeet}
          />
          <input
            type="number"
            className="form-control border-orange-600"
            placeholder="Inch"
            value={inch}
            onChange={userEnterInch}
          />
        </div>
        <button className="b1 rounded-2xl mt-4" onClick={calculateBMI}>
          Calculate BMI
        </button>
        {result && <div className="m-2">{result}</div>}
      </div>
      <img
        className="lg:w-4/6 sm:w-full lg:rounded-tl-3xl "
        alt=""
        src="fitness_Gym.jpg"
      />
    </div>
  );
}

export default BMI;
