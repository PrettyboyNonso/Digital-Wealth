import { BellIcon } from "lucide-react";

const Bell = ({
  setOpenNotification,
}: {
  setOpenNotification: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <BellIcon
      className="text-gray-700"
      onClick={() => setOpenNotification(true)}
    />
  );
};

export default Bell;
