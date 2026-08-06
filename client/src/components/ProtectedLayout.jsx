import { Outlet } from "react-router-dom";
import LeftSideNavBar from "./LeftSideNavBar";

const ProtectedLayout = () => {
  return (
    <div className="flex  min-h-screen w-full justify-between">
      <LeftSideNavBar />
        <Outlet />
    </div>
  );
};

export default ProtectedLayout;