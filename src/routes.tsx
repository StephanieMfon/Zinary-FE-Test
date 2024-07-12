import React from "react";

import MainDashboard from "views/admin/default";

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

const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "dashboard",
    icon: <DashboardIcon />,
    component: <MainDashboard />,
    rightIcon: <DownArrow />,
  },
  {
    name: "Short Loan",
    layout: "/admin",
    path: "short-loan",
    secondary: true,
  },
  {
    name: "Installment Loan",
    layout: "/admin",
    path: "installment-loans",
  },
  {
    name: "Loans",
    path: "loans",
    icon: <LoansIcon />,
  },
  {
    name: "Transactions",
    path: "transactions",
    icon: <TransactionIcon />,
  },
  {
    name: "Users",
    path: "users",
    icon: <UsersIcon />,
  },
  {
    name: "Payments",
    path: "payments",
    icon: <PaymentsIcon />,
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
    path: "staff",
    icon: <StaffIcon />,
  },
  {
    name: "Audit Trail",
    path: "audit-trail",
    icon: <AuditIcon />,
  },
  {
    name: "Settings",
    path: "settings",
    icon: <SettingsIcon />,
  },
];
export default routes;
