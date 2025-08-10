import TrendDot from "./TrendDot";

const ScoreCardBlock = ({ title, status }) => {
  return (
    <div className="flex flex-col justify-between px-6 py-4 w-full  bg-[#1e1c22] rounded-2xl shadow-xl border border-neutral-700">
      <div className="flex justify-between items-start">
        <h3 className="text-gray-400 text-lg font-normal tracking-tight">
          {title}
        </h3>
      </div>

      <div className="flex justify-between items-end w-full px-2">
        <p className="text-2xl font-normal text-[#9DEBA5B2] tracking-tight">
          {status}
        </p>
        <TrendDot />
      </div>
    </div>
  );
};

export default ScoreCardBlock;
