import { X } from "lucide-react";

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
    </div>
  );
};

export default Notification;
