import React, { createElement, useEffect, useState } from "react";

function Nutrition() {
 
  const list=document.querySelector(".list");
  const[text ,setText]=useState([]);
  const [recipeValue, setRecipeValue] = useState("");
  const [articles, setArticles] = useState([]);
  const [submit, setSubmit] = useState(false);
  const appId = "3591a3c6940e41748bdf6b8936dfffe8";

 const createElement1 = () => {
   const list = document.querySelector(".list");

   if (articles!=[]) {
     // Check if articles is not null or undefined
     const elem = document.createElement("div");
     elem.classList.add("response");

     elem.innerHTML = `
      <div class="form-floating py-2">
       
        <div class="daily-nutrition">
         ${articles.calories} calories
          ${Object.keys(articles.totalDaily || {})
            .map(
              (key) => `
             ${articles.totalDaily[key].label} - ${articles.totalDaily[
                key
              ].quantity.toFixed(2)} ${articles.totalDaily[key].unit}
          `
            )
            .join("")}
        </div>
      </div>
    `;

     if (document.querySelector(".response")) {
       document.querySelector(".response").remove();
     }
     list.appendChild(elem);
   }
 };

  const updateResponse = async () => {
    // const a=document.querySelector("")
    
    const url = `https://api.edamam.com/api/nutrition-data?app_id=329b71b7&app_key=599bca3bc782f6dc1fa92fb08bf68679&nutrition-type=cooking&ingr=${recipeValue}`;
    
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setArticles(data);
    // createElement1();
   
   
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //updateResponse();
    
    setSubmit(true);
  };

  useEffect(() => {
   
     if(submit){
updateResponse();
     } 
     setSubmit(false)
     console.log(recipeValue);
    
  }, [submit]);
useEffect(() => {
  if (articles  && articles.calories !== undefined) {
    // Check if articles state is set
    createElement1(); // Invoke the createElement function only when articles state is set
  }
}, [articles]); 
  return (
    <div className="grid gap-2 md:grid-cols-2 sm:grid-rows-2   m-20">
      <div>
        <h3 className="text-red-400 py-4 font-extrabold"> Fitness Club</h3>
        <h1 className="text-4xl  font-extrabold">
          Sweat,Smile<br></br>
          And Repeat
        </h1>
        <p className="font-bold pb-4">
          Want to Know the nutrition of Your Meal?
        </p>
        {/* <button class="pushable">
          <span class="shadow"></span>
          <span class="edge"></span>
          <span class="front">Start</span>
        </button> */}
      </div>
      <div className="row-span-2 flex justify-center items-center">
        <img
          
          alt="banner"
          src="banner.png"
          width="550px"
        ></img>
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
          <button
            className="bg-orange-500 btn mt-4" // Added 'mt-4' for a bit of margin-top
            onClick={handleSubmit}
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}

export default Nutrition;
