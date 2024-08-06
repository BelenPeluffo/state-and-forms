import { Outlet } from "react-router-dom";
import { NavBar } from "../components";

const Layout = () => {
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <NavBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
