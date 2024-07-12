import Card from "components/card";

export default function SummarySection() {
  return (
    <Card extra="rounded-[10px] bg-white p-5">
      <div className="grid grid-cols-2 gap-5 ">
        {Array.from({ length: 4 }, (_, index) => (
          <div
            key={index}
            className="rounded-[12px] bg-orange-100 px-[17px] py-[24px] dark:bg-gray-1000"
          >
            <p className="font-200 text-[16px] font-bold text-gray-1000 dark:text-orange-100">
              Withdrawals
            </p>
            <p className="mt-5 text-left text-[1rem] font-bold text-orange-2000 md:text-[1.438rem] ">
              N3,402,300
            </p>
            <span className="font-200 text-[15px] text-gray-1000 dark:text-orange-100">
              722 cases
            </span>
          </div>
        ))}
      </div>

      <div className=" mt-8 flex items-center justify-between rounded-[8px] bg-gray-1000 px-[17px] py-[27px]">
        <p className="text-[17px] font-bold text-white">Total Amount</p>
        <p className="md:text-[1.438rem]font-bold text-[1rem] text-white">
          N3,402,300
        </p>
      </div>
    </Card>
  );
}
