import React, { useEffect, useState,Link } from "react";
import { exerciseOptions, fetchData } from "./fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";
import ExerciseDetail from "./ExerciseDetail";
import ExerciseTech from "./ExerciseTech";
function SearchBar() {

  const [exercises, setExercises] = useState([]);
  const[bodyParts,setBodyParts]=useState([]);
  const[shareState,setShareState]=useState("");
  const[search,setSearch]=useState("");
  useEffect(()=>{
    const fetchExercisesData=async ()=>{
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(['all',...bodyPartsData]);
     
    }
    fetchExercisesData();
     
  },[])
useEffect(() => {
  if (exercises.length > 0) {
    console.log(exercises); // Log the first exercise to inspect its structure
  }
}, [exercises]);


  const SearchItem = async () => {
    if (search) {
      const exercisesData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises`,
        exerciseOptions
      );
     console.log(exercisesData);
      const searchedExcercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      )
      setSearch('');
      setExercises(searchedExcercises);
    }
  };
  return (
    <div>
      <div className="flex flex-col  m-4">
        {/* Flex container to center content */}
        <p className="text-3xl flex items-center justify-center">
          Awesome Exercise
          <br />
          You Should Know
        </p>{" "}
        {/* mb-8 for some margin at the bottom */}
        <div className="flex items-center justify-center m-2">
          <div className="rounded-lg bg-gray-200 p-2 sm:w-3/4 lg:w-1/2 ">
            <div className="flex">
              <input
                type="text"
                className="w-full bg-white pl-2  font-semibold outline-0 "
                placeholder="Search Exercise"
                onChange={(e) => {
                  setSearch(e.target.value.toLowerCase());
                }}
              />
              <input
                type="button"
                value="Search"
                className="bg-orange-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors h-full"
                onClick={SearchItem}
              />
            </div>
          </div>
        </div>
      </div>
      <HorizontalScrollbar data={bodyParts} />
      <ExerciseTech exercises={exercises}/>
  
         
       
      </div>
   
  );
}
export default SearchBar;
