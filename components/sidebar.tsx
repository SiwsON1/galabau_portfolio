
import { SidebarRoutes } from "./sidebar-routes";

export const Sidebar = () => {
  return (
    <div className="h-full  flex flex-col overflow-y-auto font-lato bg-white shadow-sm">
      <h3>
        Galabau-Darius
      </h3>
      <div className="flex flex-col w-full mt-10">
        <SidebarRoutes />
      </div>
    </div>
  );
};
