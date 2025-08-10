import ProgressCard from "../components/ProgressCard";

const RevenueReportGroup = () => {
  const reportsData = [
    {
      title: "Active beta users",
      value: "275",
      target: "/1000",
      progressPercent: "72% from goal",
      progressValue: 275,
      progressTarget: 1000,
    },
    {
      title: "Monthly retention",
      value: "40%",
      target: "/60%",
      progressPercent: "18% from goal",
      progressValue: 40,
      progressTarget: 60,
    },
    {
      title: "Average time in-app",
      value: "25 min",
      target: "/30 min",
      progressPercent: "18% from goal",
      progressValue: 25,
      progressTarget: 30,
    },
    {
      title: "Artists at level 3",
      value: "90",
      target: "/250",
      progressPercent: "63% from goal",
      progressValue: 90,
      progressTarget: 250,
    },
    {
      title: "Brand collab pipeline",
      value: "Prospect 3",
      target: "/1",
      progressPercent: "63% from goal",
    },
    {
      title: "Subscription willingness",
      value: "",
      target: "",
      progressPercent: "72%",
    },
  ];

  return (
    <div className="w-full  p-6 space-y-4 bg-[#1e1c22] rounded-2xl shadow-xl border border-neutral-700">
      <div className="flex justify-between items-center pb-2">
        <h2 className="text-xl font-bold text-white">Revenue reports</h2>
        <div className="flex items-center space-x-2 text-[#71e88e]">
          <span className="text-sm font-semibold">✓ 1/6 Goals</span>
        </div>
      </div>

      <div className="space-y-4">
        {reportsData.map((data, index) => (
          <ProgressCard
            key={index}
            title={data.title}
            value={data.value}
            target={data.target}
            progressPercent={data.progressPercent}
            progressValue={data.progressValue}
            progressTarget={data.progressTarget}
          />
        ))}
      </div>
    </div>
  );
};

export default RevenueReportGroup;
