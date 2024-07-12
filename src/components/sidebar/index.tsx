/* eslint-disable */

import { HiX } from "react-icons/hi";
import Links from "./components/Links";
import sidebarBanner from "assets/svg/sidebar-image.svg";
import routes from "routes";
import WhiteArrowUp from "components/icons/Sidebar/white-arror-up";
import WhiteArrowDown from "components/icons/Sidebar/white-arrow-down";

const Sidebar = (props: {
  open: boolean;
  onClose: React.MouseEventHandler<HTMLSpanElement>;
}) => {
  const { open, onClose } = props;
  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white shadow-sm shadow-white/5 transition-all dark:!bg-cyan-900 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <span
        className="absolute right-4 top-4 block cursor-pointer xl:hidden"
        onClick={onClose}
      >
        <HiX />
      </span>

      <ul
        className={`mx-[20px] mb-[35px] mt-[30px] flex-col items-center rounded-[10px] bg-orange-2000 p-[15px]`}
      >
        <li className="flex items-center justify-between">
          <p className="text-[16px] font-[700] text-white">General</p>
          <WhiteArrowUp />
        </li>
        <li className="flex items-center justify-between">
          <p className="text-[16px] font-[700] text-white">Dashboard</p>
          <WhiteArrowDown />
        </li>
      </ul>

      <ul className="mb-auto pt-1">
        <Links routes={routes} />
      </ul>
      <img className="" src={sidebarBanner} alt="Z" />
    </div>
  );
};

export default Sidebar;
