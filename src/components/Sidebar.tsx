import React from "react";
import sidBarData from "../utils/sidBar";

const Sidebar = () => {
  return (
    <div className="flex flex-col space-y-4 col-span-2 border-r px-3">
      <div className="py-5">
        <img src="/images/Logo.png" alt="" className="h-10 w-10" />
      </div>
      <div>
        {sidBarData.map(({ title, Icon }) => (
          <div
            key={title}
            className="flex w-full items-center space-x-2 rounded-full py-3 hover:bg-gray-100 cursor-pointer transition-all duration-200 group"
          >
            <Icon className="h-8 w-8 text-gray-700" />
            <p className="group-hover:text-twitter hidden lg:inline-flex">
              {title}
            </p>
          </div>
        ))}
      </div>
      <div className="hidden lg:inline-block">
        <button className="bg-twitter py-3 w-full rounded-full text-white text-xl">
          Tweet
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
