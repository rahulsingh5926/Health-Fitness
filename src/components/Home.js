import React from "react";
import "./Style.css";
import BMI from './BMI';

function Home() {
  return (
    <>
      <section className=" grid lg:grid-cols-2 lg:grid-rows-1 sm:grid-rows-2 place-items-center  gap-2 p-4 mt-20">
        <img
          className="lg:rounded-br-3xl lg:w-4/5 sm:w-full"
          alt="Man Fitness"
          src="man-fitness.jpg"
        />
        <div>
          <div>
            <h1
              className="font-bold"
              style={{ fontSize: "clamp(25px,5vw,35px" }}
            >
              Welcome to{" "}
              <span className="text-orange-600 font-bold">
                <i>NutriFitJourney</i>
              </span>
            </h1>

            <p style={{ fontSize: "clamp(15px,5vw,25px)" }}>
              Start your journey to a healthier you with NutriFitJourney We're
              here to guide you through evidence-based nutrition and sustainable
              fitness practices.
            </p>
          </div>
          <div className="mt-2">
            <p className=" border p-2 inline bg-orange-600 font-bold text-white rounded-lg  ">
              Get Started
            </p>
          </div>
        </div>
      </section>

      <BMI />
    </>
  );
}

export default Home;
