import { Home, X } from "lucide-react";

const Notification = ({
  setOpenNotification,
}: {
  setOpenNotification: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="w-full px-4 py-2">
      <div className="w-full flex justify-between items-center">
        <h2>Notification</h2>
        <X onClick={() => setOpenNotification(false)} />
      </div>

      <div className="flex flex-col gap-3 w-full mt-5">
        <div className="flex items-center">
          <div className="flex-shrink-0 flex-grow-0 basis-[15%] border-4 border-solid px-2 py-2 rounded-[50%]">
            <Home />
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
