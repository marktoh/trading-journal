import "./index.css";
import { SidebarItem } from "./sidebar-item";
import { CogIcon } from "@heroicons/react/24/solid";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import { ChartBarIcon } from "@heroicons/react/24/outline";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarItem
        href="/dashboard"
        logo={<ChartBarIcon />}
        displayName="Dashboard"
      />
      <SidebarItem
        href="/research"
        logo={<AcademicCapIcon />}
        displayName="Research"
      />
      <SidebarItem href="/settings" logo={<CogIcon />} displayName="Settings" />
    </div>
  );
};

export { Sidebar };
