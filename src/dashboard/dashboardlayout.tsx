import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import SideNav from "./sidebar";

const Dashboardlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <SideNav />
      <SidebarTrigger />
      <main className="w-full">{children}</main>
    </SidebarProvider>
  );
};

export default Dashboardlayout;
