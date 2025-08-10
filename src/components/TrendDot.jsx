import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const TrendDot = ({ direction = "up" }) => {
  const up = direction === "up";
  const color = up ? "rgba(40,200,120,0.95)" : "rgba(220,100,120,0.95)";
  const border = up ? "rgba(40,200,120,0.12)" : "rgba(220,100,120,0.12)";

  return (
    <div
      className="w-8 h-8 rounded-full flex items-center justify-center"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: `1px solid ${border}`,
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.02)",
      }}
    >
      {up ? (
        <ArrowUpRight size={14} style={{ color }} />
      ) : (
        <ArrowDownRight size={14} style={{ color }} />
      )}
    </div>
  );
};

export default TrendDot;
