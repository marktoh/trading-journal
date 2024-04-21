import { Header } from "@/modules/components";
import { Sidebar } from "@/modules/components";
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
