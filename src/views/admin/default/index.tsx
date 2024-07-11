import MiniCalendar from "components/calendar/MiniCalendar";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import TotalSpent from "views/admin/default/components/TotalSpent";
import PieChartCard from "views/admin/default/components/PieChartCard";
import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";

import Widget from "components/widget/Widget";
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import TaskCard from "views/admin/default/components/TaskCard";
import tableDataCheck from "./variables/tableDataCheck";
import tableDataComplex from "./variables/tableDataComplex";
import balancesBackground from "../../../assets/img/admin/account-balance-overlay.png";
import { useState } from "react";
import { durationList, financialData } from "data";
import ProductTable from "./components/TransactionTable";
import TabSection from "./components/TabSection";

const items = ["Item 1", "Item 2", "Item 3", "Item 4"]; // Your dynamic items array

const Dashboard = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };
  return (
    <div>
      {/* Card widget */}

      <div className="flex justify-between">
        <h1 className="text-[30px] font-bold text-gray-1000">WalletOverview</h1>

        <div className="flex items-center gap-4">
          <p className="text-[16px] font-medium text-gray-800">Duration</p>

          <div>
            <button
              id="dropdownDefaultButton"
              onClick={toggleDropdown}
              className="inline-flex items-center gap-7 rounded-lg border-2  border-solid border-gray-400 bg-white px-5 py-2.5 text-center text-sm font-medium hover:bg-orange-1000"
              type="button"
            >
              Today
              {/* TODO: Extract this CSV somewhere */}
              <svg
                width="8"
                height="6"
                viewBox="0 0 6 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.995212 0.906356C1.04669 0.854839 1.1077 0.829102 1.17821 0.829102H4.82175C4.89229 0.829102 4.95326 0.854839 5.00478 0.906356C5.05629 0.95793 5.08203 1.0189 5.08203 1.08939C5.08203 1.15987 5.05629 1.22084 5.00478 1.27237L3.183 3.09415C3.13142 3.14567 3.07045 3.17146 2.99997 3.17146C2.9295 3.17146 2.86847 3.14567 2.81699 3.09415L0.995212 1.27236C0.943752 1.22084 0.917915 1.15987 0.917915 1.08938C0.917915 1.0189 0.943752 0.95793 0.995212 0.906356Z"
                  fill="#505050"
                />
              </svg>
            </button>

            {isDropdownOpen && (
              <div
                id="dropdown"
                className="absolute right-6 z-10 mt-2 w-[120px] divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  {durationList.map((item, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-orange-1000 dark:hover:bg-orange-1000 dark:hover:text-white"
                        onClick={closeDropdown}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <hr className="mb-4 mt-6 h-0.5 border-t-0 bg-gray-500 dark:bg-white/10" />

      {/* Charts */}

      {/* <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3"> */}
      {/* <div className=" mt-5"> */}

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-[30%_270px_1fr]">
        {/* <WeeklyRevenue /> */}
        {/* <p>Hello</p> */}
        <div className="rounded-[10px] bg-white p-5">
          <div className="grid grid-cols-2 gap-5 ">
            {Array.from({ length: 4 }, (_, index) => (
              <div
                key={index}
                className="rounded-[12px] bg-orange-100 px-[17px] py-[24px]"
              >
                <p className="font-200 text-[16px] font-bold text-gray-800">
                  Withdrawals
                </p>
                <p className="mt-5 text-left text-[23px] font-bold text-orange-2000">
                  N3,402,300
                </p>
                <span className="font-200 text-[15px] text-gray-800">
                  722 cases
                </span>
              </div>
            ))}
          </div>

          <div className=" mt-8 flex items-center justify-between rounded-[8px] bg-gray-900 px-[17px] py-[27px]">
            <p className="text-[17px] font-bold text-white">Total Amount</p>
            <p className="text-[23px] font-bold text-white">N3,402,300</p>
          </div>
        </div>

        <div className="w-[260px] rounded-[10px] bg-orange-2000 p-4">
          <div
            className="space-y-1"
            style={{
              backgroundImage: `url(${balancesBackground})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            {financialData.map(({ title, amount }, i) => (
              <li
                key={i}
                className="list-none border-b  border-solid border-white  p-4  last:border-b-0"
              >
                <p className="text-200  text-[14px] text-white">{title}</p>
                <p className="text-[22px] font-bold text-white">{amount}</p>
              </li>
            ))}
          </div>
        </div>
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
