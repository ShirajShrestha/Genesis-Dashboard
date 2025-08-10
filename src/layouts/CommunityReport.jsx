import { ChevronDown } from "lucide-react";
import MetricRow from "../components/MetricRow";
import TargetBadge from "../components/TargetBadge";

const metrics = [
  {
    title: "Active users",
    subtitle: "Out of all users how many are active in the server",
    value: "68%",
  },
  {
    title: "Messages per active user",
    subtitle: "Average participation",
    value: "20",
  },
  {
    title: "Event attendance",
    subtitle: "% of RSVPs who joined live/event",
    value: "62%",
  },
  {
    title: "First week retention",
    subtitle: "New members who post on the first seven days of joining",
    value: "4",
  },
  {
    title: "Artist feedback loops",
    subtitle: "# tracks submitted to Song_workshop",
    value: "12",
  },
];

const CommunityReport = () => {
  return (
    <div className="w-full bg-[#1e1c22] rounded-2xl overflow-hidden border border-neutral-700">
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#3d3c5a]/40">
        <h3 className="text-white text-lg font-semibold">
          Community health report
        </h3>

        <div className="flex items-center gap-3">
          <TargetBadge>5/5 on-Target</TargetBadge>
          <button
            className="w-9 h-9 flex items-center justify-center rounded-md"
            style={{
              background: "transparent",
              border: "none",
              color: "rgba(255,255,255,0.7)",
            }}
            aria-label="open"
          >
            <ChevronDown size={18} />
          </button>
        </div>
      </div>

      <div>
        {metrics.map((item, index) => (
          <MetricRow
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            value={item.value}
            roundedBottom={index === metrics.length - 1}
            type="progress"
          />
        ))}
      </div>
    </div>
  );
};

export default CommunityReport;
