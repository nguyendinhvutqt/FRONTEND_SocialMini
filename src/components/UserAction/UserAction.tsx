import "./style.scss";
import { TbGridDots } from "react-icons/tb";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { WrapperDropdown } from "../WrapperDropdown";
import { IconAvatar } from "../IconAvatar";
import avatar from "../../assets/avatar.jpg";
import { FaBell } from "react-icons/fa";
import React, { useState } from "react";
import Tippy from "@tippyjs/react/headless";
import { Link, useNavigate } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../../redux/features/user/userSlice";
import { RootState } from "../../redux/store";

const UserAction: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user);
  console.log(user);

  const [openTippy, setOpenTippy] = useState({
    openGrid: false,
    openMessage: false,
    openNotification: false,
    openUser: false,
  });

  const handleOpen = (key: string) => {
    setOpenTippy((prevState) => ({
      openGrid: key === "openGrid" ? !prevState.openGrid : false,
      openMessage: key === "openMessage" ? !prevState.openMessage : false,
      openNotification:
        key === "openNotification" ? !prevState.openNotification : false,
      openUser: key === "openUser" ? !prevState.openUser : false,
    }));
  };

  const handleLogout = () => {
    dispatch(clearUser());
    navigate("/sign-in");
  };

  return (
    <div className="header-user flex">
      <div className="header-user flex">
        {/* Tippy Grid Dots */}
        <Tippy
          onClickOutside={() =>
            setOpenTippy({
              openGrid: false,
              openMessage: false,
              openNotification: false,
              openUser: false,
            })
          }
          visible={openTippy.openGrid}
          render={(attrs) => (
            <div className="box" tabIndex={-1} {...attrs}>
              My tippy box
            </div>
          )}
        >
          <div
            className="wrap-icon-action"
            onClick={() => handleOpen("openGrid")}
          >
            <TbGridDots className="icon-action" />
          </div>
        </Tippy>
      </div>

      <div>
        {/* Tippy Message */}
        <Tippy
          visible={openTippy.openMessage}
          render={(attrs) => (
            <div className="box" tabIndex={-1} {...attrs}>
              My tippy box
            </div>
          )}
        >
          <div
            className="wrap-icon-action"
            onClick={() => handleOpen("openMessage")}
          >
            <BiSolidMessageRoundedDetail className="icon-action" />
          </div>
        </Tippy>
      </div>

      <div>
        {/* Tippy Notification */}
        <Tippy
          visible={openTippy.openNotification}
          interactive={true}
          render={(attrs) => (
            <div className="box" tabIndex={-1} {...attrs}>
              <WrapperDropdown>
                <div className="wrapper-notify">
                  <h2>THÔNG BÁO</h2>
                  <p className="all">Tất cả</p>
                  <div className="flex notify">
                    <div className="avatar-notify">
                      <IconAvatar imageUrl={avatar} />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                  <div className="flex notify">
                    <div className="avatar-notify">
                      <IconAvatar imageUrl={avatar} />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                  <div className="flex notify">
                    <div className="avatar-notify">
                      <IconAvatar imageUrl={avatar} />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </WrapperDropdown>
            </div>
          )}
        >
          <div
            className="wrap-icon-action"
            onClick={() => handleOpen("openNotification")}
          >
            <FaBell className="icon-action" />
          </div>
        </Tippy>
      </div>

      <div>
        {/* Tippy User Avatar */}
        <Tippy
          visible={openTippy.openUser}
          interactive={true}
          render={(attrs) => (
            <div className="box" tabIndex={-1} {...attrs}>
              <WrapperDropdown>
                <Link to={"/"} className="flex profile-user link">
                  <IconAvatar imageUrl={avatar} />
                  <p>{user?.displayName}</p>
                </Link>
                <Link to={"/ad"} className="flex profile-btn hover-gray link">
                  <CiLogout />
                  <p>Profile</p>
                </Link>
                <div className="flex profile-btn hover-gray link">
                  <CiLogout />
                  <p>New</p>
                </div>
                <div
                  className="flex profile-btn hover-gray link"
                  onClick={handleLogout}
                >
                  <CiLogout />
                  <p>Đăng xuất</p>
                </div>
              </WrapperDropdown>
            </div>
          )}
        >
          <div
            className="wrap-icon-action"
            onClick={() => handleOpen("openUser")}
          >
            <IconAvatar imageUrl={user?.avatar} />
          </div>
        </Tippy>
      </div>
    </div>
  );
};

export default UserAction;
