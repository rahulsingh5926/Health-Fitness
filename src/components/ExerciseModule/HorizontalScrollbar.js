import React, { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "./fetchData";
function HorizontalScrollbar(props) {
  const [exercises, setExercises] = useState([]);
  const [option, setOption] = useState("");
  
   useEffect(() => {
     const fetchExercisesData = async () => {
      let exercisesData = [];
      if (option === "all") {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises`,
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${option}`,
          exerciseOptions
        );
      }
      const searchedExcercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase()||
          exercise.target.toLowerCase()||
          exercise.equipment.toLowerCase() ||
          exercise.bodyPart.toLowerCase()
      );
      console.log(searchedExcercises);
      setExercises(searchedExcercises);
     };

     fetchExercisesData();
   }, [option]);
  return (
    <div>
      <div className="flex flex-wrap justify-around ">
        {props.data &&
          props.data.map((item) => {
            return (
              <div
                className="card cursor-pointer h-40 flex justify-center items-center text-orange-600 font-bold  hover:border-t-4 hover:border-t-orange-600  w-32"
                onClick={() => {
                
                  setOption(item);
                }}
              >
                <img src="/fitness_icon.png" width="80" alt="fitness_icon" />
                <p className="p-2">{item.toUpperCase()}</p>
              </div>
            );
          })}
      </div>
      <div className="flex justify-around flex-wrap" type="button">
        {exercises.map((exercise) => {
          return (
            <div
              className="border-t-4 border-orange-600 relative my-5 w-1/4 hover:border-2 p-3"
              style={{ maxWidth: "24rem", flex: "0 0 24rem" }}
              key={exercise.id} // Assuming each exercise has a unique id
            >
              <img
                src={exercise.gifUrl}
                className="card-img-top"
                alt="Exercise"
              />
              <div className="flex flex-col justify-center items-center my-2">
                <h5 className="card-title py-2">
                  {exercise.name.toUpperCase()}
                </h5>
                <h5 className="p-1 rounded-3 bg-orange-500 text-sm font-semibold absolute bottom-1">
                  {exercise.target.toUpperCase()}
                </h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HorizontalScrollbar;
