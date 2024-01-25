import React from "react";

const Hero = () => {
  return (
    <div className="pt-[64px] px-4 py-4 bg-[#212244] flex flex-col rounded-b-xl space-y-4">
      <img
        src="/images/bnb-hero.png"
        alt=""
        className="w-full object-contain rounded-xl my-4"
      />
      <div className="flex flex-row justify-between items-center  ">
        <p className="font-semibold text-[24px]">
          0<span className="uppercase text-[rgb(112,128,179)]"> usd</span>
        </p>
        <button className="bg-[#6B54EB] text-white py-2 px-3 rounded-md text-[12px]">
          Participate
        </button>
      </div>

      <div className="flex flex-row justify-between items-center text-[12px] mt-5 mb-1">
        <p>Address</p>
        <p>*******</p>
      </div>

      <div className="py-2 border-y-[1px] border-[#2c2e55] flex flex-row justify-between">
        <div className="text-[14px] flex flex-col items-center space-y-1">
          <p className="text-gray-400 text-[12px]">Total output</p>
          <p>0</p>
          <p>USDT</p>
        </div>
        <div className="text-[14px] flex flex-col items-center space-y-1">
          <p className="text-gray-400 text-[12px]">Yesterday output</p>
          <p>0</p>
          <p>USDT</p>
        </div>
        <div className="text-[14px] flex flex-col items-center space-y-1">
          <p className="text-gray-400 text-[12px]">Today output</p>
          <p>0</p>
          <p>USDT</p>
        </div>
      </div>

      <div className="w-full flex flex-row justify-between items-center mt-4 space-x-0">
        <div className="flex-[0.4] flex flex-col justify-start space-y-2">
          <p className="text-[14px]">Wallet Balance</p>
          <button className="bg-gray-700 w-full text-white py-2 px-3 rounded-md text-[12px]">
            0 USDT
          </button>
        </div>
        <div className="flex-[0.4] flex flex-col justify-start space-y-2">
          <p className="text-[14px]">Daily Yield</p>
          <button className="bg-[#6B54EB] w-full text-white py-2 px-3 rounded-md text-[12px]">
            0.00%
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
