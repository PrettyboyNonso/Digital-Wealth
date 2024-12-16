const Chat = () => {
  const AdminChat = () => {
    return (
      <div className="self-start min-w-24 rounded-md max-w-44 min-h-10 max-h-fit px-2 py-2 bg-cyan-700">
        <p className="font-mons text-white text-sm font-semibold">
          hello, how can we help you?
        </p>
      </div>
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
  );
};

export default Chat;
