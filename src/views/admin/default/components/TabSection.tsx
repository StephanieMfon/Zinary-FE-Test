import SearchIcon from "components/icons/Navbar/search";
import DownArrow from "components/icons/Sidebar/down-arrow";

export default function TabSection() {
  return (
    <div className="rounded-[10px] bg-white py-3 dark:!bg-cyan-900 dark:text-white">
      <div className="g-2 flex font-[800] text-gray-900">
        <p className="border-b-2 border-orange-2000 px-7 py-4 text-orange-2000">
          All
        </p>
        <p className="px-7 py-4">Withdrawals</p>
        <p className="px-7 py-4">Deposits</p>
        <p className="px-7 py-4">Payments</p>
      </div>
      <hr className="mb-2 mt-[-1.5px] h-0.5 border-t-0 bg-gray-100" />
      <div className="flex justify-between px-6 py-2">
        <div className="flex w-fit items-center gap-3 rounded-[10px] border-2 border-gray-100 bg-gray-50 px-3 py-0.5">
          <SearchIcon size="13" />
          <input
            type="text"
            placeholder="Search"
            className="outline!:none focus!:none block h-full w-full bg-gray-50 placeholder:!text-[15px] placeholder:!text-gray-200 sm:w-fit"
          />
        </div>
        <div className="flex items-center gap-5 text-[14px] text-gray-200">
          <span>Display</span>
          <div className="flex w-[52px] items-center justify-end gap-3 rounded-[10px] border border-gray-100 bg-gray-50 px-3 py-0.5">
            <DownArrow />
          </div>
          <span>Result</span>
        </div>
      </div>
    </div>
  );
}
