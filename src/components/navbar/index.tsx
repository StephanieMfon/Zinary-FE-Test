import React from "react";
import Dropdown from "components/dropdown";
import { FiAlignJustify } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import avatar from "assets/img/dashboards/avatar.png";
import SearchIcon from "components/icons/SearchIcon";
import DownArrow from "components/icons/Sidebar/down-arrow";

const Navbar = (props: {
  onOpenSidenav: () => void;
  brandText: string;
  secondary?: boolean | string;
}) => {
  const { onOpenSidenav, brandText } = props;
  const [darkmode, setDarkmode] = React.useState(false);

  return (
    <nav className="sticky top-4 z-40 mb-4 flex flex-row flex-wrap items-center justify-between rounded-xl p-2 backdrop-blur-xl">
      {/* <div className="ml-[6px]">
        <div className="h-6 w-[224px] pt-1">
          <a
            className="text-sm font-normal text-navy-700 hover:underline dark:text-white dark:hover:text-white"
            href=" "
          >
            Pages
            <span className="mx-1 text-sm text-navy-700 hover:text-navy-700 dark:text-white">
              {" "}
              /{" "}
            </span>
          </a>
          <Link
            className="text-sm font-normal capitalize text-navy-700 hover:underline dark:text-white dark:hover:text-white"
            to="#"
          >
            {brandText}
          </Link>
        </div>
        <p className="shrink text-[33px] capitalize text-navy-700 dark:text-white">
          <Link
            to="#"
            className="font-bold capitalize hover:text-navy-700 dark:hover:text-white"
          >
            {brandText}
          </Link>
        </p>
      </div> */}

      <div className="relative mt-[3px] flex h-[91px] w-full flex-grow items-center justify-between gap-2  bg-white px-10 py-3 shadow-xl shadow-shadow-500 dark:!bg-cyan-900 dark:shadow-none md:w-full md:flex-grow-0 md:gap-1 xl:w-full xl:gap-2">
        <div className="flex h-full items-center  text-navy-700 dark:bg-navy-900 dark:text-white xl:w-[225px]">
          <p className="pl-3 pr-2 text-xl">
            <FiSearch className="h-6 w-6  rotate-90 transform text-gray-700 dark:text-white" />
          </p>
          <input
            type="text"
            placeholder=""
            className="block h-full w-full  text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-900 dark:text-white dark:placeholder:!text-white sm:w-fit"
          />
        </div>
        <span
          className="flex cursor-pointer text-xl text-gray-600 dark:text-white xl:hidden"
          onClick={onOpenSidenav}
        >
          <FiAlignJustify className="h-5 w-5" />
        </span>
        {/* start Notification */}

        <div className="flex items-center gap-[20px]">
          <p className="text-gray-800 ">Sarah Shaibu</p>
          <Dropdown
            button={
              <img
                className="h-10 w-10 rounded-full"
                src={avatar}
                alt="Elon Musk"
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
                    className="text-sm text-gray-800 dark:text-white hover:dark:text-white"
                  >
                    Profile Settings
                  </a>
                  <a
                    href=" "
                    className="mt-3 text-sm text-gray-800 dark:text-white hover:dark:text-white"
                  >
                    Newsletter Settings
                  </a>
                  <a
                    href=" "
                    className="mt-3 text-sm font-medium text-red-500 hover:text-red-500"
                  >
                    Log Out
                  </a>
                </div>
              </div>
            }
            classNames={"py-2 top-8 -left-[180px] w-max"}
          />
          <div>
            <DownArrow />
          </div>
          <div
            className="cursor-pointer text-gray-600"
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
              <RiSunFill className="h-4 w-4 text-gray-600 dark:text-white" />
            ) : (
              <RiMoonFill className="h-4 w-4 text-gray-600 dark:text-white" />
            )}
          </div>
          {/* Profile & Dropdown */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
