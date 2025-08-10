import { Check } from "lucide-react";

const TargetBadge = ({ children }) => (
  <div
    className="flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium"
    style={{
      background:
        "linear-gradient(180deg, rgba(34,115,65,0.16), rgba(22,90,51,0.14))",
      color: "#d9f7e0",
      border: "1px solid rgba(30,110,60,0.2)",
    }}
  >
    <Check size={14} />
    <span>{children}</span>
  </div>
);

export default TargetBadge;
