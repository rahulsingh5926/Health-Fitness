import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


import { exerciseOptions, fetchData } from "./fetchData";




const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});

  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";


      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );

      console.log(exerciseDetailData)
      setTargetMuscleExercises(exerciseDetailData);

      // const targetMuscleExercisesData = await fetchData(
      //   `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
      //   exerciseOptions
      // );
 

      // const equimentExercisesData = await fetchData(
      //   `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
      //   exerciseOptions
      // );
          
      
      //  console.log(equimentExercisesData);
      
    };

    fetchExercisesData();
  }, [id]);



  return (
    <>
      <div className="grid lg:grid-cols-2  sm:grid-rows-1 mt-40 mb-10  ">
        <div className="flex justify-center items-center flex-col">
          <i className="text-orange-500 font-bold text-2xl">
            Here is the perfect way to perform
          </i>
          <img
            alt="gif"
            className="w-[60%]"
            src={targetMuscleExercises.gifUrl}
          ></img>
        </div>
        <div className="mx-4">
          <p className="text-3xl text-orange-500 font-bold uppercase flex justify-center ">
            <div>{targetMuscleExercises.name}</div>
          </p>
          <div className="text-lg">
            Exercises keep you strong.{" "}
            <span style={{ textTransform: "capitalize" }}>
              {targetMuscleExercises.name}
            </span>{" "}
            bup is one of the best exercises to <br />
            target your {targetMuscleExercises.target}. It will help you improve
            your mood and gain energy.
          </div>
          <i className="text-lg text-orange-500 font-semibold">
            Here are the steps wise process:-
          </i>
          <ul className="list-disc">
            {targetMuscleExercises.instructions &&
              targetMuscleExercises.instructions.map((item) => (
                <li className="text-lg mx-2">* {item}</li>
              ))}
          </ul>

          <p className="text-lg lg:flex items-center">
            Secondary muscles targets are
            <div className="flex ml-[2px]">
              {targetMuscleExercises.secondaryMuscles &&
                targetMuscleExercises.secondaryMuscles.map((item) => {
                  return (
                    <p className="rounded-lg border-2 mx-2 p-2 bg-orange-400">
                      {item}
                    </p>
                  );
                })}
            </div>
          </p>
        </div>
      </div>
    </>
  );
};

export default ExerciseDetail;
