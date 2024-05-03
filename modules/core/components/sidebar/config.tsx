import { CogIcon } from "@heroicons/react/24/outline";
import { CogIcon as SolidCogIcon } from "@heroicons/react/24/solid";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import { AcademicCapIcon as SolidAcademicCapIcon } from "@heroicons/react/24/solid";
import { ChartBarIcon } from "@heroicons/react/24/outline";
import { ChartBarIcon as SolidChartBarIcon } from "@heroicons/react/24/solid";
import { DocumentIcon } from "@heroicons/react/24/outline";
import { DocumentIcon as SolidDocumentIcon } from "@heroicons/react/24/solid";

const sidebarItems = [
  {
    href: "/dashboard",
    displayName: "Dashboard",
    defaultIcon: <ChartBarIcon />,
    selectedIcon: <SolidChartBarIcon />,
  },
  {
    href: "/tickers",
    displayName: "Tickers",
    defaultIcon: <DocumentIcon />,
    selectedIcon: <SolidDocumentIcon />,
  },
  {
    href: "/research",
    displayName: "Research",
    defaultIcon: <AcademicCapIcon />,
    selectedIcon: <SolidAcademicCapIcon />,
  },
  {
    href: "/settings",
    displayName: "Settings",
    defaultIcon: <CogIcon />,
    selectedIcon: <SolidCogIcon />,
  },
];

export { sidebarItems };
