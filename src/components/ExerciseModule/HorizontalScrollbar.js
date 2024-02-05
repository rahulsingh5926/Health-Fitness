import React, { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "./fetchData";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CircleLoader } from "react-spinners";   
function HorizontalScrollbar(props) {
  
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
      };
      const [loading, setLoading] = useState(true);
  const [exercises, setExercises] = useState([]);
  const [option, setOption] = useState("");
  const[condition,setCondition]=useState(false);
  
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
setLoading(true);
     fetchExercisesData();
  
   }, [option]);
 
  return (
    <div className="">
      <div className="m-auto  lg:w-[35%] sm:w-[45%] flex justify-center flex-col my-4 ">
        <p className="flex justify-center text-orange-500 lg:text-[1.4vw] sm:text-[2.4vw] font-medium">
          Click on Cards to know more
        </p>
        <Slider {...settings} className="mx-2 text-black">
          {props.data &&
            props.data.map((item) => {
              return (
                <div>
                  <div
                    className="card cursor-pointer h-40 flex justify-center items-center text-orange-600 font-bold  hover:border-t-4 hover:border-t-orange-600  w-30  "
                    onClick={() => {
                      setOption(item);
                      setCondition(true);
                    }}
                  >
                    <img
                      src="/fitness_icon.png"
                      width="50%"
                      alt="fitness_icon"
                    />
                    <p className="p-2">{item.toUpperCase()}</p>
                  </div>
                </div>
              );
            })}
        </Slider>
      </div>
      <div
        type="button "
        className="flex justify-around  items-center flex-wrap"
      >
        {condition &&
          (loading ? (
            <CircleLoader color="#FF5733" loading={loading} size={45} />
          ) : (
            exercises.map((exercise) => (
              <Link
                to={`/ExerciseDetail/${exercise.id}`}
                key={exercise.id}
                className="flex justify-center items-center p-4  "
              >
                <div
                  className="border-t-4 border-orange-600 relative my-5 w-3/4  "
                  style={{ maxWidth: "24rem", flex: "0 0 24rem" }}
                  key={exercise.id}
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
              </Link>
            ))
          ))}
      </div>
    </div>
  );
}

export default HorizontalScrollbar;
