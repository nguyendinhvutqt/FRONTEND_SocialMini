import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import "./style.scss";

const MainLayout = () => {
  return (
    <div className="wrapper-main">
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
