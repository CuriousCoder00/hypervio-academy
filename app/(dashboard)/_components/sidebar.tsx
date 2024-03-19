import { Logo } from "./logo";
import { SidebarRoutes } from "./sidebar-routes";

export const Sidebar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
      <div className="p-6 flex gap-2 font-medium text-blue-900">
        <Logo />
        <div>
          <div className=" text-xs">HYPERVIO ACADEMY</div>
          <div className=" text-xs">Innovative Vision</div>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
};
