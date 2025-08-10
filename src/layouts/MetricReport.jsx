import { ChevronDown, List, TrendingUp } from "lucide-react";
import HealthReport from "./HealthReport";
import PipelineReport from "./PipelineReport";
import CommunityReport from "./CommunityReport";

const MetricReport = () => {
  return (
    <div className="flex flex-col border border-neutral-700 rounded-2xl mb-4">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="text-white text-lg font-medium">Metric report</div>
        <div className="flex items-center gap-3">
          <button
            className="w-9 h-9 flex items-center justify-center rounded-md"
            style={{
              background: "transparent",
              border: "none",
              color: "#9DEBA5B2",
            }}
            aria-label="open"
          >
            <List size={18} />
          </button>
          <button
            className="w-9 h-9 flex items-center justify-center rounded-md"
            style={{
              background: "transparent",
              border: "none",
              color: "rgba(255,255,255,0.7)",
            }}
            aria-label="open"
          >
            <TrendingUp size={18} />
          </button>
        </div>
      </div>
      <div className=" flex flex-col gap-6 p-4">
        <HealthReport />
        <PipelineReport />
        <CommunityReport />
      </div>
    </div>
  );
};

export default MetricReport;
