import React from "react";
import Dropdown from "components/dropdown";
import { FiAlignJustify } from "react-icons/fi";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import avatar from "assets/img/dashboards/avatar.png";
import DownArrow from "components/icons/Sidebar/down-arrow";
import SearchIcon from "components/icons/Navbar/search";

const Navbar = (props: {
  onOpenSidenav: () => void;
  secondary?: boolean | string;
}) => {
  const { onOpenSidenav } = props;
  const [darkmode, setDarkmode] = React.useState(false);

  return (
    <nav className="sticky top-4 z-40 mb-4 flex flex-row flex-wrap items-center justify-between rounded-xl p-2 backdrop-blur-xl">
      <div className="dark:!bg-cyan-900 relative mt-[3px] flex h-[91px] w-full flex-grow items-center justify-between gap-2  rounded-[10px] bg-white px-10 py-3 shadow-xl shadow-shadow-500 dark:shadow-none md:w-full md:flex-grow-0 md:gap-1 xl:w-full xl:gap-2">
        <div className="flex h-full items-center  text-navy-700   xl:w-[225px]">
          <p className="pl-3 pr-2 text-xl">
            <SearchIcon />
          </p>
          <input
            type="text"
            placeholder=""
            className="dark:!bg-cyan-900 block h-full w-full outline-none dark:text-white sm:w-fit"
          />
        </div>

        {/* start Notification */}

        <div className="flex items-center gap-[20px]">
          <p className="whitespace-nowrap text-gray-200">Sarah Shaibu</p>
          <Dropdown
            button={
              <img
                className="h-10 w-10 rounded-full"
                src={avatar}
                alt="Sarah Shaibu"
              />
            }
            children={
              <div className="flex h-48 w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
                <div className="ml-4 mt-3">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-bold text-navy-700 dark:text-white">
                      👋 Hey, Sarah
                    </p>{" "}
                  </div>
                </div>
                <div className="mt-3 h-px w-full bg-gray-200 dark:bg-white/20 " />

                <div className="ml-4 mt-3 flex flex-col">
                  <a
                    href=" "
                    className="text-gray-800 text-sm dark:text-white hover:dark:text-white"
                  >
                    Profile Settings
                  </a>
                  <a
                    href=" "
                    className="text-gray-800 mt-3 text-sm dark:text-white hover:dark:text-white"
                  >
                    Newsletter Settings
                  </a>
                  <a
                    href=" "
                    className="text-red-500 hover:text-red-500 mt-3 text-sm font-medium"
                  >
                    Log Out
                  </a>
                </div>
              </div>
            }
            classNames={"py-2 top-8 -left-[180px] w-max"}
          />
          <div className="hidden md:block">
            <DownArrow />
          </div>
          <div
            className="text-gray-600 cursor-pointer"
            onClick={() => {
              if (darkmode) {
                document.body.classList.remove("dark");
                setDarkmode(false);
              } else {
                document.body.classList.add("dark");
                setDarkmode(true);
              }
            }}
          >
            {darkmode ? (
              <RiSunFill className="h-4 w-4 text-gray-200 dark:text-white" />
            ) : (
              <RiMoonFill className="h-4 w-4 text-gray-200 dark:text-white" />
            )}
          </div>
          <span
            className="flex cursor-pointer text-xl text-gray-200 dark:text-white xl:hidden"
            onClick={onOpenSidenav}
          >
            <FiAlignJustify className="h-5 w-5" />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
