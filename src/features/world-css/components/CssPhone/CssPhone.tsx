import React from "react";
import Image from "next/image";

/**
 * Displays a simulated phone UI with chat messages. Messages appear on the screen in a styled layout, distinguishing between messages sent by the bot and the user.
 *
 * ```javascript
 * import CssPhone from "@/features/world-css/components/CssPhone/CssPhone";
 *
 * <CssPhone sentMessages={[{ text: "Hello!", sender: "bot" }, { text: "Hi!", sender: "user" }]} />
 * ```
 */
const CssPhone = ({
  sentMessages,
}: {
  sentMessages: { text: string; sender: string }[];
}) => {
  return (
    <div className="mx-auto my-4 p-2 bg-black rounded-lg w-[200px] sm:w-[300px]">
      <div className="flex justify-center my-2">
        <div className="w-2.5 h-2.5 bg-blue-900 rounded-full shadow-[0_0_0_3px_#212226] mr-6"></div>
        <div className="w-12 h-2.5 bg-neutral-700 rounded-full mb-4"></div>
      </div>

      <div className="bg-white mb-2 relative">
        <div className="flex gap-4 w-[100%] justify-between items-center h-12 w-12 p-1 bg-primary-darkest text-white uppercase mb-4 font-cursive relative bg-cyan-950 p-2">
          <span className="w-12"></span>
          <span>My Bot</span>
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <Image
              className="w-[200%] h-[200%] object-cover object-[50%_calc(50%-8px)]"
              src="/images/bot.jpg"
              alt="Bot"
              width={120}
              height={120}
            />
          </div>
        </div>

        <div
          id="screen"
          className="p-4 h-52 sm:h-80 overflow-auto relative no-overflow-anchor"
        >
          {sentMessages &&
            sentMessages.map((message, index) => (
              <div
                key={index}
                className={`mb-2 p-2 rounded-lg relative ${
                  message.sender === "bot"
                    ? "bg-teal-700 text-right ml-auto"
                    : "bg-cyan-700 text-left mr-auto"
                } max-w-[80%]`}
              >
                {message.text}
                <span
                  className={`absolute w-0 h-0 border-[8px] ${
                    message.sender === "bot"
                      ? "border-teal-700 border-l-transparent border-t-transparent right-[-10px] top-[50%] rotate-[-45deg] translate-x-[-4px] translate-y-[-4px]"
                      : "border-cyan-700 border-r-transparent border-t-transparent left-[-10px] top-[50%] rotate-45 translate-x-1 translate-y-[-4px]"
                  }`}
                />
              </div>
            ))}
        </div>
      </div>

      <div className="w-12 h-12 flex items-center p-[2px] bg-neutral-900 rounded-full mx-auto border-[4px] border-white/40"></div>
    </div>
  );
};

export default CssPhone;
