import DropDownArrow from "components/icons/Dashboard/DropdownArrow";
import { durationList } from "data";
import { useState } from "react";

export default function HeaderDropdown() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };
  return (
    <div>
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className="inline-flex items-center gap-7 rounded-lg border-2  border-solid border-gray-100 bg-white px-5 py-2.5 text-center text-sm font-medium hover:bg-orange-1000"
        type="button"
      >
        Today
        <DropDownArrow />
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
  );
}
