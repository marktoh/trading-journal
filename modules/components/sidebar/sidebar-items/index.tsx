import { SidebarItem } from "../sidebar-item";

type SidebarItemsProps = {
  sidebarItems: any;
};

const SidebarItems = ({ sidebarItems }: SidebarItemsProps) => {
  return sidebarItems?.map((sidebarItem: any) => (
    <SidebarItem {...sidebarItem} />
  ));
};

export { SidebarItems };
