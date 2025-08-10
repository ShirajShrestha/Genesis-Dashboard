import {
  Home,
  List,
  Users,
  FileText,
  Grid,
  Repeat,
  ChevronLeft,
} from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-[360px] h-screen bg-gradient-to-b from-[#15142b] to-[#191622] text-white hidden lg:flex flex-col justify-between rounded-3xl p-4 border border-neutral-700">
      <div>
        <div className="flex items-center justify-between px-2 mb-4">
          <h1 className="text-xl font-bold tracking-widest flex items-center">
            GENESIS
            <span className="border border-white px-2 py-0.5 rounded-sm text-xs ml-1">
              EVOLVE
            </span>
          </h1>
          <button className="w-10 h-10 bg-[#262542] rounded-full flex items-center justify-center">
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
        </div>

        <hr className="border-[#4c4c4c]/40 mb-4" />

        <div className="bg-[#1b1c2b] rounded-xl p-3 mb-2 flex items-center justify-between hover:bg-[#272842] transition">
          <span className="text-lg">Dashboard</span>
          <Home className="w-5 h-5" />
        </div>

        <p className="text-xs text-[#8cd0c4] uppercase mt-6 mb-2 tracking-widest">
          Admin
        </p>

        <div className="p-3 rounded-xl mb-2 flex items-center justify-between hover:bg-[#272842] transition">
          <span className="text-lg">Leads</span>
          <List className="w-5 h-5" />
        </div>

        <div className="p-3 rounded-xl mb-2 flex items-center justify-between hover:bg-[#272842] transition">
          <span className="text-lg">Active user</span>
          <Users className="w-5 h-5" />
        </div>

        <div className="p-3 rounded-xl mb-2 flex items-center justify-between hover:bg-[#272842] transition">
          <span className="text-lg">Reports</span>
          <FileText className="w-5 h-5" />
        </div>

        <p className="text-xs text-[#8cd0c4] uppercase mt-6 mb-2 tracking-widest">
          Partner Platforms
        </p>

        <div className="p-3 rounded-xl mb-2 flex items-center justify-between hover:bg-[#272842] transition">
          <span className="text-lg">Services</span>
          <Grid className="w-5 h-5" />
        </div>

        <div className="p-3 rounded-xl flex items-center justify-between hover:bg-[#272842] transition">
          <span className="text-lg">Partnerships/managers</span>
          <Repeat className="w-5 h-5" />
        </div>
      </div>

      <div className="text-center p-4 mt-8">
        <h1 className="text-xl font-bold tracking-widest">
          GENESIS
          <span className="border border-white px-2 py-0.5 rounded-sm text-xs ml-1">
            EVOLVE
          </span>
        </h1>
        <p className="text-sm text-[#aaa] mt-2">@username</p>
        <p className="text-xs text-[#888] mt-1">
          Genesis evolve artist management
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
