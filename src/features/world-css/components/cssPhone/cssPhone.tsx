import React, { useState } from "react";

const Phone = () => {
  const [sentMessages, setSentMessages] = useState([]);
  const [moreMessages, setMoreMessages] = useState(true);

  const addReply = () => {
    const newMessage = "This is a new message";
    setSentMessages([...sentMessages, newMessage]);
    setMoreMessages(false);
  };

  return (
    <div className="mx-auto my-4 p-2 bg-black rounded-lg w-[200px] sm:w-[300px]">
      <div className="flex justify-center my-2">
        <div className="w-2.5 h-2.5 bg-blue-900 rounded-full shadow-[0_0_0_3px_#212226] mr-6"></div>
        <div className="w-12 h-2.5 bg-[#212226] rounded-full mb-4"></div>
      </div>

      <div className="bg-white mb-2 relative">
        <div className="flex justify-center items-center h-12 w-12 p-1 bg-primary-darkest text-white uppercase mb-4 font-cursive relative">
          My Bot
          <img
            className="w-24 h-24 rounded-full ml-4 absolute top-1 right-1 object-cover"
            src="/images/bot.jpg"
            alt="Ali"
          />
        </div>

        <div id="screen" className="p-4 h-48 sm:h-72 overflow-auto relative">
          {sentMessages.map((message, index) => (
            <div key={index} className="mb-2">
              <div className="bg-gray-300 rounded-lg p-2">{message}</div>
            </div>
          ))}
        </div>

        <div className="bg-[#e4e9f7] h-12 flex justify-center items-center">
          <button
            onClick={addReply}
            className={`px-4 py-2 rounded-lg ${
              moreMessages ? "bg-blue-500" : "bg-blue-700"
            } text-white`}
          >
            Send
          </button>
        </div>
      </div>

      <div className="w-12 h-12 bg-white rounded-full mx-auto border-[4px] border-white/40"></div>
    </div>
  );
};

export default Phone;
