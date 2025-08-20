import { Home } from "lucide-react";

export const Sidebar = () => {
  return (
    <aside className="relative w-[217px] bg-white border-r border-gray-200 lg:block hidden">
      <div className="flex flex-col items-start p-6 gap-3 w-full min-h-[804px] h-full">
        <div className="flex flex-col items-start gap-2 w-full h-7">
          <div className="flex flex-row items-center px-2 py-1 gap-2 w-full h-7 bg-primary   rounded">
            <div className="flex-none order-0 flex-grow-0 w-4 h-4 relative">
              <Home className="w-4 h-4 text-black" />
            </div>
            <span className="flex-none order-1 flex-grow font-bold text-sm leading-[18px] text-black capitalize ">
              Units
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};
