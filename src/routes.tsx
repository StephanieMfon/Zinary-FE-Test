import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";
import RTLDefault from "views/rtl/default";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import DashboardIcon from "components/icons/Sidebar/dashboard";
import LoansIcon from "components/icons/Sidebar/loans";
import AuditIcon from "components/icons/Sidebar/audit";
import PaymentsIcon from "components/icons/Sidebar/payments";
import SettingsIcon from "components/icons/Sidebar/settings";
import StaffIcon from "components/icons/Sidebar/staff";
import TransactionIcon from "components/icons/Sidebar/transactions";
import UsersIcon from "components/icons/Sidebar/users";
import WalletIcon from "components/icons/Sidebar/wallet";
import DownArrow from "components/icons/Sidebar/down-arrow";
// TODO: Update with correct paths names, remove paths
const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "random",
    icon: <DashboardIcon />,
    component: <MainDashboard />,
    rightIcon: <DownArrow />,
  },
  {
    name: "Short Loan",
    layout: "/admin",
    path: "nft-marketplace",
    component: <NFTMarketplace />,
    secondary: true,
  },
  {
    name: "Installment Loan",
    layout: "/admin",
    path: "data-tables",
    component: <DataTables />,
  },
  {
    name: "Loans",
    layout: "/admin",
    path: "profile",
    icon: <LoansIcon />,
    component: <Profile />,
  },
  {
    name: "Transactions",
    layout: "/auth",
    path: "random",
    icon: <TransactionIcon />,
    component: <SignIn />,
  },
  {
    name: "Users",
    layout: "/rtl",
    path: "rtl",
    icon: <UsersIcon />,
    component: <RTLDefault />,
  },
  {
    name: "Payments",
    // layout: "/rtl",
    path: "rtl",
    icon: <PaymentsIcon />,
    component: <RTLDefault />,
  },
  {
    name: "Wallet",
    layout: "/admin",
    path: "default",
    icon: <WalletIcon />,
    component: <MainDashboard />,
  },
  {
    name: "Staff",
    // layout: "/rtl",
    path: "rtl",
    icon: <StaffIcon />,
    component: <RTLDefault />,
  },
  {
    name: "Audit Trail",
    // layout: "/rtl",
    path: "rtl",
    icon: <AuditIcon />,
    component: <RTLDefault />,
  },
  {
    name: "Settings",
    // layout: "/rtl",
    path: "rtl",
    icon: <SettingsIcon />,
    component: <RTLDefault />,
  },
];
export default routes;
