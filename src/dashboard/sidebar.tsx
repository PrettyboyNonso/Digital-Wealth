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
  useSidebar,
} from "@/components/ui/sidebar";

import {
  BadgeCheck,
  // BarChartBig,
  Bitcoin,
  Briefcase,
  Copy,
  EyeIcon,
  HandHelping,
  LayoutDashboard,
  LogOutIcon,
  // Settings,
  Wallet,
} from "lucide-react";
import { NavLink } from "react-router-dom";
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Deposit",
    url: "/dashboard/deposit",
    icon: Bitcoin,
  },
  {
    title: "Withdraw",
    url: "/dashboard/withdraw",
    icon: Wallet,
  },
  {
    title: "Loan",
    url: "/dashboard/loan",
    icon: HandHelping,
  },
  {
    title: "View Loans",
    url: "/dashboard/view-loans",
    icon: EyeIcon,
  },
  {
    title: "Upgrade Account",
    url: "/dashboard/upgrade",
    icon: BadgeCheck,
  },
  {
    title: "Plans",
    url: "/dashboard/plans",
    icon: Briefcase,
  },
  {
    title: "Copy Experts",
    url: "/dashboard/copy-trading",
    icon: Copy,
  },
  // {
  //   title: "Purchase Signals",
  //   url: "/dashboard/signals",
  //   icon: BarChartBig,
  // },
  // {
  //   title: "Settings",
  //   url: "/dashboard/settings",
  //   icon: Settings,
  // },

  {
    title: "Log out",
    url: "#",
    icon: LogOutIcon,
  },
];

const SideNav = () => {
  const { setOpenMobile } = useSidebar();
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
                    onClick={() => setOpenMobile(false)}
                  >
                    <SidebarMenuButton asChild>
                      <NavLink to={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </NavLink>
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
