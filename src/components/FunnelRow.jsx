import TrendDot from "./TrendDot";

const FunnelRow = ({ title, subtitle, value, indent = 0, bgColor }) => (
  <div
    className={`grid items-center border border-neutral-700 sm:grid-cols-[1fr_minmax(120px,220px)] grid-cols-1`}
    style={{
      marginInline: `${indent * 24}px`,
      background: bgColor,
      borderBottom: "1px solid rgba(255,255,255,0.04)",
    }}
  >
    <div className="px-4 py-4">
      <div className="text-white text-sm font-semibold">{title}</div>
      {subtitle && (
        <div className="text-[13px] text-slate-300 mt-1">{subtitle}</div>
      )}
    </div>

    <div className="flex items-center justify-between pl-6 gap-4 pr-6 sm:border-l border-t sm:border-t-0 border-white/5">
      <div className="text-white font-medium">{value}</div>
      <TrendDot direction="up" />
    </div>
  </div>
);

export default FunnelRow;
