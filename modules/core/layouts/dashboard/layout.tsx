import { Header } from "@/modules/core/components";
import { Sidebar } from "@/modules/core/components";
import "./layout.css";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Header />
      <div className="dashboard-layout">
        <Sidebar />
        {children}
      </div>
    </>
  );
};

export { DashboardLayout };
