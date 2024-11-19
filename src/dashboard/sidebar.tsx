import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import {
  Bitcoin,
  HandHelping,
  LayoutDashboard,
  LogOutIcon,
  LucideHome,
  Settings,
  Wallet,
} from "lucide-react";
const items = [
  {
    title: "Home",
    url: "/",
    icon: LucideHome,
  },
  {
    title: "Dashboard",
    url: "#",
    icon: LayoutDashboard,
  },
  {
    title: "Deposit",
    url: "#",
    icon: Bitcoin,
  },
  {
    title: "Withdraw",
    url: "#",
    icon: Wallet,
  },
  {
    title: "Loan",
    url: "#",
    icon: HandHelping,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
  {
    title: "Log out",
    url: "#",
    icon: LogOutIcon,
  },
];

const SideNav = () => {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarFooter>
          <SidebarGroup>
            <SidebarGroupLabel className="mb-9">
              <h2 className="font-mons capitalize font-bold text-black">
                welcome back!
              </h2>
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="flex flex-col gap-4">
                {items.map((item) => (
                  <SidebarMenuItem
                    key={item.title}
                    className="font-mono font-medium text-black"
                  >
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  );
};

export default SideNav;
