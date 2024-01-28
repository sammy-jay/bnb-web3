import React from "react";

const TeamPage = () => {
  return (
    <div className="pt-[104px] py-4 flex flex-col px-3 rounded-b-xl space-y-4">
      <div className="p-4  bg-[#212244] flex flex-col rounded-xl space-y-4">
        <div className="flex flex-row justify-between items-center">
          <p>My Earnings</p>
          <button className="capitalize rounded-full py-2 px-4 text-[12px] bg-[#372D3D] text-[#FF9900]">
            see all
          </button>
        </div>
        <div className="p-4 bg-[#2A2C52] flex flex-row justify-between rounded-lg capitalize">
          <div className="text-[14px] flex flex-col items-center space-y-1">
            <p>USDT</p>
            <p>0</p>
            <p className="text-gray-400 text-[12px] text-wrap text-center">
              Total revenue
            </p>
          </div>
          <div className="text-[14px] flex flex-col items-center space-y-1">
            <p>USDT</p>
            <p>0</p>
            <p className="text-gray-400 text-[12px] text-wrap text-center">
              Yesterday earnings
            </p>
          </div>
          <div className="text-[14px] flex flex-col items-center space-y-1">
            <p>USDT</p>
            <p>0</p>
            <p className="text-gray-400 text-[12px] text-wrap text-center">
              Today earnings
            </p>
          </div>
        </div>
      </div>
      <div className="p-4  bg-[#212244] flex flex-col rounded-xl space-y-4">
        <div className="flex flex-row justify-between items-center">
          <p>My Team</p>
          <button className="capitalize rounded-full py-2 px-4 text-[12px] bg-[#372D3D] text-[#FF9900]">
            see all
          </button>
        </div>
        <div className="p-4 bg-[#2A2C52] flex flex-row justify-between capitalize rounded-lg">
          <div className="text-[14px] flex flex-col items-center space-y-1">
            <p>People</p>
            <p>0</p>
            <p className="text-gray-400 text-[12px] text-wrap text-center">
              Total People
            </p>
          </div>
          <div className="text-[14px] flex flex-col items-center space-y-1">
            <p>USDT</p>
            <p>0</p>
            <p className="text-gray-400 text-[12px] text-wrap text-center">
              Yesterday earnings
            </p>
          </div>
          <div className="text-[14px] flex flex-col items-center space-y-1">
            <p>USDT</p>
            <p>0</p>
            <p className="text-gray-400 text-[12px] text-wrap text-center">
              Today earnings
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
