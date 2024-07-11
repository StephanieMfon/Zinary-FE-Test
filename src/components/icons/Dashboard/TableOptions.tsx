import WhiteArrowUp from "../Sidebar/white-arror-up";
import WhiteArrowDown from "../Sidebar/white-arrow-down";

export default function TableOptions() {
  return (
    <div className="f w-[1px] flex-col">
      <WhiteArrowUp width="8" />

      <WhiteArrowDown width="8" />
    </div>
  );
}
