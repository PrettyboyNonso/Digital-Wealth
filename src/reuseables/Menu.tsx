import LoginContext from "@/context/LoginContext";
import { Menu } from "lucide-react";
import { useContext } from "react";

const MenuBar = () => {
  const context = useContext(LoginContext);
  if (context === null) {
    throw new Error("context is empty");
  }

  const { setNavIsOpen } = context;
  function openNavClose() {
    setNavIsOpen((prev: boolean) => {
      const newState = !prev;
      const bodyTag = document.querySelector("body");
      if (bodyTag) {
        console.log(bodyTag);
        if (newState) {
          bodyTag.style.overflowY = "hidden";
        } else {
          bodyTag.style.overflowY = "auto";
        }
      }
      return newState;
    });
  }
  return (
    <div className="lg:hidden">
      <Menu onClick={openNavClose} className="w-7 h-7" />
    </div>
  );
};

export default MenuBar;
