import React from 'react'

function Footer() {
  return (
    <div
      className="font-bold  relative bottom-0 w-100 bg-orange-600 "
      style={{ fontSize: "clamp(5px,2vw,15px)" }}
    >
      <div className="flex justify-evenly p-4  flex-wrap">
        <div className=" grid place-items-center">
          <img src="/location.png"></img>
          <p className="text-red-600">LOCATION</p>
          25th sector,NOIDA
        </div>
        <div className="grid place-items-center">
          <img src="/phone.png"></img>
          <p className="text-red-600">CALL US</p>
          +91xxxxxxxxxx
        </div>
        <div className="grid place-items-center">
          <img src="/mail.png"></img>
          <p className="text-red-600">MAIL US</p>
          fitnessguru966@gmail.com
        </div>
        <div className="flex items-center justify-center  ">
          <h3>Connect us on</h3>

          <img alt="instagram" src="/instagram.png" style={{ width: "4vw" }} />
          <img alt="twitter" src="/twitter.png" style={{ width: "4vw" }} />
          <img alt="whatsapp" src="/whatsapp.png" style={{ width: "4vw" }} />
          <img alt="telegram" src="/telegram.png" style={{ width: "4vw" }} />
        </div>
      </div>

     
    </div>
  );
}

export default Footer