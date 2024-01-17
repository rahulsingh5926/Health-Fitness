import React, { useState } from "react";
import axios from "axios";

const Fitness = () => {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [workoutPlan, setWorkoutPlan] = useState("");
  const [nutritionPlan, setNutritionPlan] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const generatePlans = async () => {
    // Reset error message and plans
    setError("");
    setWorkoutPlan("");
    setNutritionPlan("");
    setIsLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:3001/generate-plans",
        {
          age,
          weight,
          height,
        }
      );

      const { workoutPlan, nutritionPlan } = response.data;

      setWorkoutPlan(workoutPlan);
      setNutritionPlan(nutritionPlan);
    } catch (error) {
      setError("Error generating plans. Please try again.");
      console.error("Error generating plans:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const isValidInput = age && weight && height;

  return (
    <div className="App">
      <h1>Personalized Workout & Nutrition Plans Generator</h1>

      <div>
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label>
          Weight (kg):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label>
          Height (feet):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>
      </div>

      <button onClick={generatePlans} disabled={!isValidInput || isLoading}>
        {isLoading ? "Generating..." : "Generate Plans"}
      </button>

      {error && <p className="error-message">{error}</p>}

      <div>
        <h2>Generated Workout Plan:</h2>
        <p>{workoutPlan}</p>
      </div>

      <div>
        <h2>Generated Nutrition Plan:</h2>
        <p>{nutritionPlan}</p>
      </div>
    </div>
  );
};

export default Fitness;
