import { ChevronDown } from "lucide-react";

const ActionItem = () => {
  return (
    <div className="flex justify-center items-center w-full mt-4">
      <div className="bg-[#1e1c22] rounded-xl p-6 w-full  font-sans shadow-lg border border-neutral-700">
        <div className="flex items-center justify-between pb-1">
          <h2 className="text-white text-xl font-semibold">Action items</h2>
          <ChevronDown className="text-white w-6 h-6" />
        </div>

        <div className="mt-4 p-4 rounded-xl bg-[#1e1c22] border border-neutral-700">
          <p className="text-neutral-400 leading-relaxed">
            Look into the development workflow for higher release cadence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActionItem;
