import React from "react";
import { Link } from "react-router-dom";


function ExerciseTech({ exercises }) {

  return (
    <>
      <div className="flex justify-around flex-wrap" type="button">

          {/* {exercises.map((item) => (
            <Link
              to={`/ExerciseDetail/${item.id}`}
              key={item.id}
              className="exercise-link"
            >
              <div className="border-t-4 border-orange-600 hover:border-2 w-44">
                <img
                  src={item.gifUrl}
                  className="card-img-top"
                  alt="Exercise"
                />
                <div className="flex flex-col justify-center items-center my-2 border-t-4">
                  <h5 className="card-title py-2">{item.name.toUpperCase()}</h5>
                  <h5 className="p-1 rounded-3 bg-orange-500 text-sm font-semibold absolute bottom-1">
                    {item.target.toUpperCase()}
                  </h5>
                </div>
              </div>
            </Link>
          ))}
     */}
      </div>
    </>
  );
}

export default ExerciseTech;
