import TableOptions from "components/icons/Dashboard/TableOptions";
import elipse from "assets/img/dashboards/elipse.png";

// TODO: If there's time create a type for this model it after the type for the
const ProductTable = () => {
  // TODO: Move this up to a parent component- the data
  const tableData = [
    {
      id: "0000001",
      name: "Tife Balogun",
      email: "tanya.hill@example.com",
      transactionType: "Deposit",
      amount: "₦34,694.145",
      date: "Dec 4, 2019 21:42",
      status: "Successful",
    },
    {
      id: "0000001",
      name: "Kelechi Nwosu",
      email: "georgia.young@example.com",
      transactionType: "Withdrawal",
      amount: "₦784,324.34",
      date: "Dec 7, 2019 23:26",
      status: "Failed",
    },
    {
      id: "0000001",
      name: "Temi Obadofin",
      email: "deanna.curtis@example.com",
      transactionType: "Payments",
      amount: "₦11,784.22",
      date: "Dec 30, 2019 05:18",
      status: "Pending",
    },
  ];

  return (
    <div className="flex flex-col space-y-4">
      {/* Table Head */}
      <div className="rounded-lg bg-gray-1100 p-4 text-white">
        <div className="flex">
          <div className="flex-1 font-bold">S/N</div>
          <div className="flex flex-1  items-center gap-3.5 font-bold">
            <TableOptions />
            Name
          </div>
          <div className="flex-1 font-bold">Transaction Reference</div>
          <div className="flex-1 font-bold">Type</div>
          <div className="flex-1 font-bold">Amount</div>
          <div className="flex flex-1  items-center gap-3.5 font-bold">
            <TableOptions />
            Date
          </div>
          <div className="flex flex-1  items-center gap-3.5 font-bold">
            <TableOptions />
            Status
          </div>
          <div className="flex-1 font-bold"></div>
        </div>
      </div>

      {/* Table Body */}
      <div className="space-y-2 ">
        {tableData.map((item, index) => (
          <div
            key={index}
            className="rounded-lg bg-white px-5 py-6 font-[15px] text-gray-900 shadow"
          >
            <div className="j flex">
              <div className="flex-1 text-left">{item.id}</div>
              <div className="flex-1 text-left">{item.name}</div>
              <div className="flex-1 text-left">{item.email}</div>
              <div className="flex-1 text-left">{item.transactionType}</div>
              <div className="flex-1 text-left">{item.amount}</div>
              <div className="flex-1 text-left">{item.date}</div>
              <div className="flex-1 text-left">
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
              <div className="flex-1 text-left">
                <button className="w-fit rounded-[10px] bg-orange-2000 px-2.5 py-1 text-[16px] font-bold text-white">
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductTable;
