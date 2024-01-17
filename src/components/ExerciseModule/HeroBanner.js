import React from 'react'

const HeroBanner = () => {
  return (
    <div className="grid lg:grid-cols-2 lg:grid-rows-1 m-20 gap-4 sm:grid-rows-2 sm:grid-cols-1">
      <div className="flex lg:justify-top lg:items-center flex-col">
        <h3 className="text-red-400 py-4 font-extrabold"> Fitness Club</h3>
        <h1
          style={{ fontSize: "clamp(30px, 5vw, 35px)" }}
          className="text-4xl  font-extrabold"
        >
          Sweat,Smile<br></br>
          And Repeat
        </h1>
        <p className="font-bold pb-4">
          Want to Know the nutrition of Your Meal?
        </p>
        <button class="pushable ">
          <span class="shadow "></span>
          <span class="edge"></span>
          <span class="front">Explore Exercise</span>
        </button>
      </div>
      <div className="flex lg:justify-start justify-center ">
        <img alt="banner" src="/banner.png" className='lg:w-1/2 md:w-full'></img>
      </div>
    </div>
  );
}

export default HeroBanner