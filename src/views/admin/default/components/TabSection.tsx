export default function TabSection() {
  return (
    <div className="dark:bg-dark rounded-[10px] bg-white py-3">
      <div className="g-2 flex font-[800] text-gray-700">
        <p className="border-b-2 border-orange-2000 px-7 py-4 text-orange-2000">
          All
        </p>
        <p className="px-7 py-4">Withdrawals</p>
        <p className="px-7 py-4">Deposits</p>
        <p className="px-7 py-4">Payments</p>
      </div>
      <hr className="mb-2 mt-[-2px] h-0.5 border-t-0 bg-gray-500 dark:bg-white/10" />
    </div>
  );
}
