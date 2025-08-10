import ActionItem from "./layouts/ActionItem";
import Header from "./layouts/Header";
import MetricReport from "./layouts/MetricReport";
import RevenueReport from "./layouts/RevenueReport";
import ScoreCard from "./layouts/ScoreCard";
import Sidebar from "./layouts/Sidebar";

function App() {
  return (
    <div className="bg-[#151420] flex w-full min-h-screen p-4">
      <Sidebar />
      <div className="flex flex-col w-full px-4 pb-4 gap-y-4">
        <Header />
        <ScoreCard />
        <div className="grid lg:grid-cols-[2fr_1fr] gap-x-4">
          <div className="">
            <MetricReport />
          </div>

          <div className=" gap-y-4">
            <RevenueReport />
            <ActionItem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
