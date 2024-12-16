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

      <div className="flex flex-col gap-6 w-full mt-6">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 flex-grow-0  border-4 border-solid px-2 py-2 rounded-[50%]">
            <Home className="w-4 h-4" />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="font-mons text-xs capitalize font-bold">
              welcome apoloski
            </h2>
            <p className="font-mons text-xs capitalize font-semibold">
              welcome to digital wealth, your beginning to financial freedom
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
