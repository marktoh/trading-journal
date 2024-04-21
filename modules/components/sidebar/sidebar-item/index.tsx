"use client";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

import "./index.css";

type SidebarItemProps = {
  href: string;
  displayName?: string;
  defaultIcon?: any;
  selectedIcon?: any;
};
const SidebarItem = ({
  href,
  displayName,
  defaultIcon,
  selectedIcon,
}: SidebarItemProps) => {
  const pathname = usePathname();
  const isSelected = pathname.startsWith(href);
  return (
    <div className={`sidebar-item ${isSelected ? "selected" : ""}`}>
      <NextLink href={href}>
        <div className="logo">{isSelected ? selectedIcon : defaultIcon}</div>
        <div className="display-name">{displayName}</div>
      </NextLink>
    </div>
  );
};

export { SidebarItem };
