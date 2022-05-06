import { UserIcon } from "@heroicons/react/solid";
import { useState } from "react";
import iconsData from "../utils/tweetBoxIcons";
import clsx from "clsx";

const TweetBox = () => {
  const [text, setText] = useState<string>("");
  return (
    <div className="flex flex-col sm:flex-row space-x-4 w-full">
      <div>
        <UserIcon className="mt-4 h-14 w-14 text-gray-400 bg-gray-200 rounded-full p-2" />
      </div>
      <div className="w-full">
        <form className="">
          <input
            type="text"
            placeholder="What's Happening"
            className="h-20 w-full focus:outline-none"
          />
        </form>
        <div className="flex  items-center justify-between">
          <div className="flex items-center space-x-2">
            {iconsData.map((Item, index) => (
              <Item
                key={index}
                className={
                  "h-6 text-twitter transition-transform duration-150 easeout hover:scale-150 cursor-pointer"
                }
              />
            ))}
          </div>
          <button
            disabled={text === ""}
            className={clsx(
              "bg-twitter text-white rounded-full px-5 py-2 font-bold",
              text === "" && "bg-red-500"
            )}
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

export default TweetBox;
