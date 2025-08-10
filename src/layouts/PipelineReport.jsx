import { ChevronDown } from "lucide-react";
import TargetBadge from "../components/TargetBadge";
import MetricRow from "../components/MetricRow";
import FunnelRow from "../components/FunnelRow";

const PipelineReport = () => {
  const funnelData = [
    {
      title: "Unique visitors",
      subtitle: "Unique visitor on the website",
      value: "1200",
      indent: 0,
      bgColor: "rgba(25,26,70,0.35)",
    },
    {
      title: "Email captures",
      subtitle: "Email input through opt in form",
      value: "142",
      indent: 1,
      bgColor: "rgba(25,26,70,0.45)",
    },
    {
      title: "Discord joins",
      subtitle: "Email invites to discord join",
      value: "52",
      indent: 2,
      bgColor: "rgba(25,26,70,0.55)",
    },
    {
      title: "Application sign-ins",
      subtitle: "% of discord user who signed-up",
      value: "45 (82%)",
      indent: 3,
      bgColor: "rgba(20,30,30,0.55)",
    },
  ];

  return (
    <div className="rounded-lg overflow-hidden border border-neutral-700">
      <div className="flex sm:items-center sm:justify-between gap-3 px-4 py-3 border-b border-white/5">
        <div className="text-white text-lg font-medium">
          Pipeline health report
        </div>
        <div className="flex items-center gap-3">
          <TargetBadge>6/6 on-Target</TargetBadge>
          <button
            className="w-9 h-9 flex items-center justify-center rounded-md text-white/70"
            aria-label="open"
          >
            <ChevronDown size={18} />
          </button>
        </div>
      </div>

      <MetricRow
        title="Cost per conversion"
        subtitle="Ad success conversion cost"
        value="$0.12"
      />

      {funnelData.map((item, index) => (
        <FunnelRow
          key={index}
          title={item.title}
          subtitle={item.subtitle}
          value={item.value}
          indent={item.indent}
          bgColor={item.bgColor}
        />
      ))}
    </div>
  );
};

export default PipelineReport;
