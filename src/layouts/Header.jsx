import { CalendarDays, Bell, ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-[#1e1c22] rounded-[20px] px-6 py-4 flex items-center justify-between border border-neutral-700">
      <h2 className="text-white text-xl font-semibold">Dashboard</h2>

      <div className="flex items-center space-x-4">
        <div className="flex items-center bg-[#131217] rounded-xl px-4 py-2 text-[#a7a6b5] text-sm cursor-pointer">
          <CalendarDays className="w-4 h-4 mr-2" />
          <span className="hidden md:block">Weekly</span>
          <ChevronDown className="w-4 h-4 ml-2" />
        </div>

        <button className="w-10 h-10 flex items-center justify-center rounded-full cursor-pointer">
          <Bell className="w-5 h-5 text-white" />
        </button>

        <div className="w-10 h-10 rounded-full bg-[#ddd] cursor-pointer"></div>
      </div>
    </header>
  );
};

export default Header;
