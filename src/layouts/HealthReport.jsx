import { ChevronDown } from "lucide-react";
import TargetBadge from "../components/TargetBadge";
import MetricRow from "../components/MetricRow";

const HealthReport = () => {
  const metrics = [
    {
      title: "Reliability",
      subtitle: "Average page load speed",
      value: "1200 ms",
      trend: "up",
    },
    {
      title: "Bug Volume",
      subtitle: "New bug tickets open",
      value: "6",
      trend: "up",
    },
    {
      title: "Feature usage",
      subtitle: "Average activity log per user",
      value: "130",
      trend: "up",
    },
    {
      title: "Gamification",
      subtitle: "% of user who leveled up",
      value: "2%",
      trend: "up",
    },
    {
      title: "DB Freshness",
      subtitle: "CRON job success log",
      value: "98%",
      trend: "up",
    },
    {
      title: "Release velocity",
      subtitle: "Merged PRD and Deploy frequency",
      value: "4",
      trend: "down",
      highlight: true,
    },
  ];

  return (
    <div className="rounded-lg p-0 overflow-hidden bg-[#1e1c22] border border-neutral-700">
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
        <div className="text-white text-lg font-medium">
          Application health report
        </div>
        <div className="flex items-center gap-3">
          <TargetBadge>6/7 on-Target</TargetBadge>
          <button className="w-9 h-9 flex items-center justify-center rounded-md bg-transparent text-white">
            <ChevronDown size={18} />
          </button>
        </div>
      </div>

      <div>
        {metrics.map((m, idx) => {
          const isLast = idx === metrics.length - 1;
          return (
            <MetricRow
              key={m.title}
              title={m.title}
              subtitle={m.subtitle}
              value={m.value}
              trend={m.trend}
              highlight={!!m.highlight}
              roundedBottom={isLast}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HealthReport;
