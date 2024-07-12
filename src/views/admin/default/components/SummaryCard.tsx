import { financialData } from "data";
import balancesBackground from "../../../../assets/img/admin/account-balance-overlay.png";

export default function SummaryCard() {
  return (
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
  );
}
