import NextLink from "next/link";

import "./index.css";

type SidebarItemProps = {
  href: string;
  logo?: any;
  displayName?: string;
};
const SidebarItem = ({ href, logo, displayName }: SidebarItemProps) => {
  return (
    <div className="sidebar-item">
      <NextLink href={href}>
        <div className="logo">{logo}</div>
        <div className="display-name">{displayName}</div>
      </NextLink>
    </div>
  );
};

export { SidebarItem };
