const ProgressCard = ({
  title,
  value,
  target,
  progressPercent,
  progressValue,
  progressTarget,
}) => {
  const progressBarWidth =
    progressValue && progressTarget
      ? `${(progressValue / progressTarget) * 100}%`
      : "0%";
  const hasProgressContent = value || progressValue;

  return (
    <div className="flex flex-col p-4 space-y-2 w-full bg-[#1e1c22] rounded-2xl border border-gray-700/50">
      <div className="flex justify-between items-center">
        <h3 className="text-gray-400 font-medium">{title}</h3>
        <div className="bg-[#1e1c22] text-[#71e88e] text-xs font-semibold px-2 py-1 rounded-full">
          {progressPercent}
        </div>
      </div>

      {hasProgressContent && (
        <div className="flex justify-between items-center">
          <div className="text-gray-200 text-xl font-bold">
            {value}
            <span className="text-gray-400 text-base font-normal">
              {target}
            </span>
          </div>
          {progressValue && progressTarget && (
            <div className="w-1/3 bg-[#25202c] h-2 rounded-full">
              <div
                className="bg-[#71e88e] h-full rounded-full"
                style={{ width: progressBarWidth }}
              ></div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProgressCard;
