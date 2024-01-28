import React from "react";

const MinePage = () => {
  return (
    <section className="flex flex-col space-y-4">
      <div className="pt-[64px] px-4 py-4 bg-[#212244] flex flex-col rounded-b-xl">
        {/* <h1>Loading</h1> */}
      </div>
      <div className="mx-3 px-4 py-4 bg-[#212244] flex flex-row justify-between rounded-md">
        <p>Withdraw Balance</p>
        <p>******</p>
      </div>

      <div className="mx-3 px-4 py-4 bg-[#212244] flex flex-col space-y-2  rounded-md">
        <p className="text-right">0 USDT</p>

        <button className="bg-[#6B54EB] w-full text-white py-3 px-3 rounded-md text-[12px]">
          Withdraw
        </button>
        <button className="bg-[#2a2c52] w-full text-white py-3 px-3 rounded-md text-[12px]">
          Withdrawal Record
        </button>
      </div>

      <div className="mx-2 p-4  bg-[#212244] flex flex-col rounded-xl space-y-4">
        <div className="flex flex-row justify-between items-center">
          <p>My Earnings</p>
          <button className="capitalize rounded-full py-2 px-4 text-[12px] bg-[#372D3D] text-[#FF9900]">
            see all
          </button>
        </div>
        <div className=" p-4 bg-[#2A2C52] flex flex-row justify-between rounded-lg capitalize">
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
      <div className="mx-2 p-4  bg-[#212244] flex flex-col rounded-xl space-y-4">
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
      <div className="px-2">
        <button className="bg-[#6B54EB] w-full text-white py-4 px-3 rounded-md text-[12px]">
          <p>Invite Friends</p>
        </button>
      </div>
    </section>
  );
};

export default MinePage;
