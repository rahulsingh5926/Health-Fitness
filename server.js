// server.js
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const bodyParser = require("body-parser");
require("dotenv").config(); // Load environment variables

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post("/", (req, res) => {
  res.send(
    "Welcome to the Personalized Workout & Nutrition Plans Generator API!"
  );
});

app.post("/generate-plans", async (req, res) => {
  const { age, weight, height } = req.body;

  const prompt = `Generate a personalized workout plan for a ${age}-year-old individual weighing ${weight}kg and with a height of ${height} feet. Also, provide a nutrition plan based on their requirements.`;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/engines/davinci/completions",
      {
        prompt,
        max_tokens: 150,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    const generatedContent = response.data.choices[0]?.text.trim();
    const [generatedWorkoutPlan, generatedNutritionPlan] =
      generatedContent.split("Nutrition Plan:");

    res.json({
      workoutPlan: generatedWorkoutPlan.trim(),
      nutritionPlan: generatedNutritionPlan.trim(),
    });
  } catch (error) {
    console.error("Error generating plans:", error);
    res.status(500).json({ error: "Failed to generate plans." });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
