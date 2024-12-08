import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import SideNav from "./sidebar";
import { Outlet } from "react-router-dom";
import { Coin } from "@/reuseables/Header";
import { useContext } from "react";
import LoginContext from "@/context/LoginContext";

const Dashboardlayout = () => {
  const context = useContext(LoginContext);
  if (context === null) {
    throw new Error("context is empty");
  }

  const { assetState } = context;
  return (
    <div>
      <SidebarProvider>
        <SideNav />
        <SidebarTrigger className="lg:hidden" />
        <div className="w-full py-2 bg-gray-100 lg:hidden">
          <div className="overflow-auto animate-scroll  flex items-center w-full flex-nowrap  gap-6 hide-scrollbar min-h-10">
            {assetState.map((value, index) => (
              <Coin coinData={value} key={index} />
            ))}
            {assetState.map((value, index) => (
              <Coin coinData={value} key={index} />
            ))}
          </div>
        </div>
        <main className="w-full relative ">
          <Outlet />
        </main>
      </SidebarProvider>
    </div>
  );
};

export default Dashboardlayout;
