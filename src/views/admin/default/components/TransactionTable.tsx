import TableOptions from "components/icons/Dashboard/TableOptions";
import elipse from "assets/img/dashboards/elipse.png";
import { tableData } from "data";

const ProductTable = () => {
  return (
    <div className="overflow-x-scroll">
      <div className="flex flex-col space-y-4 ">
        {/* Table Head */}
        <div className="min-w-[1000px]  rounded-lg bg-gray-1100 p-4 text-white">
          <div className="flex items-center">
            <div className="min-w-[100px] flex-1 whitespace-nowrap font-bold">
              S/N
            </div>
            <div className="flex  min-w-[100px] flex-1 items-center  gap-3.5 whitespace-nowrap font-bold">
              <TableOptions />
              Name
            </div>
            <div className="min-w-[230px] flex-1 whitespace-nowrap  font-bold">
              Transaction Reference
            </div>
            <div className="min-w-[100px]  flex-1 whitespace-nowrap font-bold">
              Type
            </div>
            <div className="min-w-[100px]  flex-1 whitespace-nowrap font-bold">
              Amount
            </div>
            <div className=" flex  min-w-[130px] flex-1 items-center  gap-3.5 whitespace-nowrap font-bold">
              <TableOptions />
              Date
            </div>
            <div className="flex  min-w-[100px] flex-1 items-center  gap-3.5 whitespace-nowrap font-bold">
              <TableOptions />
              Status
            </div>
            <div className="min-w-[100px]  flex-1 whitespace-nowrap font-bold"></div>
          </div>
        </div>

        {/* Table Body */}
        <div className="space-y-3 ">
          {tableData.map((item, index) => (
            <div
              key={index}
              className="dark:!bg-cyan-900 min-w-[1000px] rounded-lg bg-white px-5 py-6 font-[15px] text-gray-1000 shadow-[0px_5px_9px_-5px_#0000000D] shadow-none dark:text-white"
            >
              <div className="flex items-center">
                <div className="min-w-[100px]  flex-1 whitespace-nowrap text-left">
                  {item.id}
                </div>
                <div className="min-w-[100px]  flex-1 whitespace-nowrap text-left">
                  {item.name}
                </div>
                <div className="min-w-[230px] flex-1 whitespace-nowrap  text-left">
                  {item.email}
                </div>
                <div className="min-w-[100px]  flex-1 whitespace-nowrap text-left">
                  {item.transactionType}
                </div>
                <div className="min-w-[100px]  flex-1 whitespace-nowrap text-left">
                  {item.amount}
                </div>
                <div className="min-w-[130px]  flex-1 whitespace-nowrap text-left">
                  {item.date}
                </div>
                <div className="min-w-[100px]  flex-1 whitespace-nowrap text-left">
                  <div
                    className={`flex w-fit flex-1 items-center gap-1.5 rounded-[8px] px-1.5 py-0.5 text-[11px] text-white ${
                      item.status === "Successful" && " bg-green-50 "
                    } ${item.status === "Failed" && "bg-red-50 "} ${
                      item.status === "Pending" && "bg-orange-200"
                    }`}
                  >
                    <img src={elipse} alt="elipse" /> {item.status}
                  </div>
                </div>
                <div className="min-w-[100px]  flex-1 whitespace-nowrap text-left">
                  <button className="w-fit rounded-[10px] bg-orange-2000 px-2.5 py-1 text-[16px] font-bold text-white">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
