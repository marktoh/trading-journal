import { sidebarItems } from "./config";
import { SidebarItems } from "./sidebar-items";

import "./index.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarItems sidebarItems={sidebarItems} />
    </div>
  );
};

export { Sidebar };
