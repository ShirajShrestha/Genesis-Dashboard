import TrendDot from "./TrendDot";

const MetricRow = ({
  title,
  subtitle,
  value,
  trend,
  highlight = false,
  roundedBottom = false,
  type = "trend",
}) => {
  const highlightStyle = highlight
    ? {
        background:
          "linear-gradient(180deg, rgba(88,50,55,0.16), rgba(70,40,45,0.14))",
        borderTop: "1px solid rgba(255,255,255,0.02)",
      }
    : {};

  return (
    <div
      className="grid items-stretch border-b border-white/5 sm:grid-cols-[1fr_minmax(120px,220px)] grid-cols-1"
      style={{
        ...highlightStyle,
        borderBottomLeftRadius: roundedBottom ? 10 : undefined,
        borderBottomRightRadius: roundedBottom ? 10 : undefined,
      }}
    >
      <div className="px-4 py-4 flex flex-col justify-center">
        <div className="text-white text-sm font-semibold leading-tight">
          {title}
        </div>
        {subtitle && (
          <div className="text-[13px] text-slate-400 mt-1">{subtitle}</div>
        )}
      </div>

      <div className="flex items-center justify-between pl-6 gap-4 pr-6 sm:border-l border-t sm:border-t-0 border-white/5">
        {type === "progress" ? (
          <div className="bg-green-700 px-3 py-1 rounded-md text-white font-semibold text-sm w-full sm:w-auto">
            {value}
          </div>
        ) : (
          <>
            <div className="text-white font-medium">{value}</div>
            <TrendDot direction={trend} />
          </>
        )}
      </div>
    </div>
  );
};

export default MetricRow;
