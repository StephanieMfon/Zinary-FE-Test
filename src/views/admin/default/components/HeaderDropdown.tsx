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
  );
}
