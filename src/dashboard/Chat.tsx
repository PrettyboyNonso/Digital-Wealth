import LoginContext from "@/context/LoginContext";
import { ArrowLeftSquare } from "lucide-react";
import { useContext, useState } from "react";

const Chat = () => {
  const [chatOpened, setChatIsOpen] = useState(false);
  const context = useContext(LoginContext);
  if (context === null) {
    throw new Error("state is mismanaged");
  }

  const { admin } = context;
  const AllChat = () => {
    return (
      <div>
        <div className="w-full flex items-center gap-4 py-3 border-b border-solid">
          <ArrowLeftSquare
            className="ml-4"
            onClick={() => setChatIsOpen(false)}
          />
          <h1 className="font-bold  font-mons uppercase text-xs ">
            Jonathan Bleming
          </h1>
        </div>

        <div className="mt-6 flex flex-col gap-2 px-2 ">
          <AdminChat />
          <UserChat />
        </div>
      </div>
    );
  };
  const AdminChat = () => {
    return (
      <div className="self-start min-w-24 rounded-md max-w-44 min-h-10 max-h-fit px-2 py-2 bg-cyan-700">
        <p className="font-mons text-white text-sm font-semibold">
          hello, how can we help you?
        </p>
      </div>
    );
  };

  const ChatsClosed = () => {
    const Chats = () => {
      return (
        <div
          className="flex items-center bg-transparent border border-solid shadow-lg px-2 py-5 rounded-md mt-2"
          onClick={() => setChatIsOpen(true)}
        >
          <div className="flex-shrink-0 flex-grow-0 basis-[70%] flex gap-2">
            <div className="w-9 uppercase flex justify-center items-center font-black text-white rounded-[50%] bg-orange-500">
              {" "}
              jb
            </div>
            <div>
              <h1 className="font-mons capitalize text-xs font-bold">
                jonathan Bleming
              </h1>
              <p className="font-mons mt-1 text-xs font-medium">
                Hello, i need help...
              </p>
            </div>
          </div>
        </div>
      );
    };

    return (
      <>
        {chatOpened ? (
          <AllChat />
        ) : (
          <div>
            <h1 className="font-black ml-3 font-mons uppercase text-xs mt-2">
              chats
            </h1>

            <div className="px-2">
              <Chats />
              <Chats />
            </div>
          </div>
        )}
      </>
    );
  };

  const UserChat = () => {
    return (
      <div className="self-end min-w-24 rounded-md max-w-44 min-h-10 max-h-fit px-2 py-2 bg-black">
        <p className="font-mons text-white text-sm font-semibold">
          Hi, i need help with my account
        </p>
      </div>
    );
  };
  return (
    <>
      {admin ? (
        <ChatsClosed />
      ) : (
        <div className="w-full relative">
          <div className="w-full flex justify-center items-center py-2 border-b border-solid">
            <h2 className="font-mons font-black capitalize text-xs">
              chat with us
            </h2>
          </div>
          <div className="mt-4 flex flex-col gap-2 px-2">
            <AdminChat />
            <UserChat />
          </div>

          <div className="fixed bottom-0 px-2 w-full bg-white py-4">
            <form action="">
              <textarea
                id="non-resizable-textarea"
                className=" h-24 px-2 py-2 text-xs font-mons font-semibold resize-none border border-teal-300 outline-none text-black mt-4 w-full"
                placeholder="Enter your message here..."
              ></textarea>
              <button className="w-full mt-1 text-xs font-mons bg-black px-2 py-3 rounded-sm capitalize text-white">
                send message
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;
