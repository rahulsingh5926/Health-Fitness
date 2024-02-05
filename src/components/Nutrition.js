import React, { useEffect, useState } from "react";
import { CircleLoader } from "react-spinners";   
function Nutrition() {
  const [text, setText] = useState([]);
  const [recipeValue, setRecipeValue] = useState("");
  const [articles, setArticles] = useState([]);
  const [submit, setSubmit] = useState(false);
 const [loading, setLoading] = useState();
 const [condition, setCondition] = useState(false);
  const updateResponse = async () => {
   
    const url = `https://api.edamam.com/api/nutrition-data?app_id=329b71b7&app_key=599bca3bc782f6dc1fa92fb08bf68679&nutrition-type=cooking&ingr=${recipeValue.join(
      ","
    )}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      setArticles(data);
    
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    setCondition(true);
    setLoading(true);
  };

  useEffect(() => {
    if (submit) {
      updateResponse();
    }
    setSubmit(false);
  }, [submit, recipeValue]);

  useEffect(() => {
    console.log(articles);
  }, [articles]);

  return (
    <div className="grid gap-1 md:grid-cols-2 sm:grid-rows-2   m-20">
      <div>
        <h3 className="text-red-400 py-4 font-extrabold"> Fitness Club</h3>
        <h1 className="text-4xl  font-extrabold">
          Sweat, Smile<br></br>
          And Repeat
        </h1>
        <p className="font-bold pb-4">
          Want to Know the nutrition of Your Meal?
        </p>
      </div>
      <div className="row-span-2 flex justify-center items-center">
        <img alt="banner" src="banner.png" width="550px"></img>
      </div>

      <div className="p-4 border-2 border-black  list response-grid">
        <p>
          Enter an ingredient list for what you are cooking, like "1 cup rice,
          10 oz chickpeas", etc. Enter each ingredient on a new line.
        </p>
        <form className="flex flex-col items-center justify-center response-grid ">
          <div className="py-4 w-full">
            <textarea
              type="text"
              className="form-control w-full"
              placeholder="Enter your recipe"
              rows="3"
              onChange={(e) => setRecipeValue(e.target.value.split("\n"))}
            ></textarea>
          </div>
          <button className="bg-orange-500 btn mt-4" onClick={handleSubmit}>
            SUBMIT
          </button>
          <div className="my-2">
            {condition && loading ? (
              <CircleLoader color="#FF5733" loading={loading} size={45} />
            ) : (
              <div className="my-4">
                {articles.totalDaily &&
                  Object.keys(articles.totalDaily)
                    .map((key) => {
                      return `${articles.totalDaily[key].label}:
               ${articles.totalDaily[key].quantity.toFixed(2)} `;
                    })
                    .join(",")}
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Nutrition;
