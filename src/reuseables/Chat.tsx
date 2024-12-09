import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

const Chat = () => {
  const [ChatIsOpen, setChatIsOpen] = useState(false);
  return (
    <div className="fixed z-40 bottom-24 right-6 flex flex-col">
      <div
        className={`w-80 min-h-40 bg-teal-500 border border-solid rounded-lg shadow-md py-4 px-4 text-white font-mons ${
          ChatIsOpen ? "block" : "hidden"
        }`}
      >
        <h2>Hi there!</h2>
        <p className="text-xs ">Start a conversation with a support agent</p>

        <form action="">
          <textarea
            id="non-resizable-textarea"
            className="w-full h-24 px-2 py-2 text-xs font-mons font-semibold resize-none border-0 outline-none text-black mt-4"
            placeholder="Enter your message here..."
          ></textarea>
          <button className="text-xs font-mons bg-black px-2 py-2 rounded-sm capitalize">
            send message
          </button>
        </form>
      </div>
      <div
        className="self-end bg-white px-2 py-2 rounded-sm shadow-md mt-2 cursor-pointer"
        onClick={() => setChatIsOpen(!ChatIsOpen)}
      >
        {ChatIsOpen ? <X /> : <MessageCircle />}
      </div>
    </div>
  );
};

export default Chat;
