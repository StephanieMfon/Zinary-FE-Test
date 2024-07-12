import MiniCalendar from "components/calendar/MiniCalendar";
import TotalSpent from "views/admin/default/components/TotalSpent";
import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";

import Widget from "components/widget/Widget";

import tableDataCheck from "./variables/tableDataCheck";
import tableDataComplex from "./variables/tableDataComplex";
import { useState } from "react";
import { durationList, financialData } from "data";
import ProductTable from "./components/TransactionTable";
import TabSection from "./components/TabSection";
import Card from "components/card";
import SummarySection from "./components/SummarySection";
import SummaryCard from "./components/SummaryCard";
import HeaderDropdown from "./components/HeaderDropdown";

const Dashboard = () => {
  return (
    <div className="mt-6">
      {/* Card widget */}

      <div className="flex justify-between">
        <h1 className="text-[30px] font-bold text-gray-1000">WalletOverview</h1>

        <div className="hidden items-center gap-4 md:flex">
          <p className="text-[16px] font-medium text-gray-200">Duration</p>
          <HeaderDropdown />
        </div>
      </div>
      <hr className="mb-4 mt-4 h-0.5 border-t-0 bg-gray-100 dark:bg-white/10" />

      {/* Chart and Data */}

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-[1fr_1fr] lg:grid-cols-[30%_270px_1fr]">
        <SummarySection />
        <SummaryCard />
        <TotalSpent />
      </div>
      {/* Tab Section */}
      <div className="mt-5">
        <TabSection />
      </div>
      {/* Tables */}

      <div className="mt-5">
        <ProductTable />
      </div>
      <div className="my-10 flex w-full justify-center">
        <button className="w-fit rounded-[10px] bg-orange-2000 px-5 py-3 text-[16px] font-bold text-white">
          View All
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
