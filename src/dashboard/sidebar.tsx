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
import LoginContext from "@/context/LoginContext";

import {
  BadgeCheck,
  BarChartBig,
  Bell,
  Bitcoin,
  Briefcase,
  Copy,
  EyeIcon,
  HandHelping,
  HistoryIcon,
  LayoutDashboard,
  LogOutIcon,
  Wallet,
} from "lucide-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
const adminItems = [
  {
    title: "Home",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Deposit",
    url: "/dashboard/deposit",
    icon: Bitcoin,
  },

  {
    title: "Withdrawals",
    url: "/dashboard/withdraw",
    icon: Wallet,
  },
  {
    title: "Push Notifications",
    url: "/dashboard/notify",
    icon: Bell,
  },
];
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
    title: "User Fund Log",
    url: "/dashboard/logs",
    icon: HistoryIcon,
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
  {
    title: "Purchase Signals",
    url: "/dashboard/signals",
    icon: BarChartBig,
  },

  {
    title: "Log out",
    url: "#",
    icon: LogOutIcon,
  },
];

const SideNav = () => {
  const context = useContext(LoginContext);
  if (context === null) {
    throw new Error("state is mismanaged");
  }

  const { admin } = context;
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
                {admin
                  ? adminItems.map((item) => (
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
                    ))
                  : items.map((item) => (
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
