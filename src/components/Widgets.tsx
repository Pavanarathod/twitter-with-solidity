import { SearchIcon } from "@heroicons/react/outline";
import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

function Widgets() {
  return (
    <div className="col-span-2 hidden lg:inline-grid pl-3">
      <div className="flex mt-3 items-center space-x-2 bg-gray-100 rounded-full p-3">
        <SearchIcon className="h-7 text-gray-400" />
        <input
          type="text"
          placeholder="Search Twitter"
          className="w-full focus:outline-none border border-none bg-transparent"
        />
      </div>

      <div>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="BBCWorld"
          options={{ height: 1000 }}
        />
      </div>
    </div>
  );
}

export default Widgets;
