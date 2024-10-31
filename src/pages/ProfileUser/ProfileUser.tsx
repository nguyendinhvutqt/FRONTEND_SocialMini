import "./style.scss";

import { FaUserFriends } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import socket from "../../socket";

interface ProfileUser {
  avatarUrl: string;
  birthDay: Date;
  displayName: string;
  email: string;
  friends: string[];
  posts: string[];
  sex: string;
  _id: string;
}

const ProfileUser = () => {
  const user = useSelector((state: RootState) => state.user);
  const [profileUser, setProfileUser] = useState<ProfileUser | undefined>(
    undefined
  );
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("id");

  const fetchProfileUser = async (userId: string) => {
    try {
      const response = await axiosInstance.get(
        `${import.meta.env.VITE_BACKEND_URL}/users/profile-user?id=${userId}`
      );
      console.log(response);
      if (response.status === 200) {
        setProfileUser(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddFriend = () => {
    if (userId && user) {
      socket.emit("sendFriendRequest", {
        requesterId: user.userId,
        receiverId: profileUser?._id,
      });
    }
  };

  useEffect(() => {
    socket.on("friendRequestStatus", (data) => {
      console.log("Friend request status:", data);
      // Cập nhật trạng thái kết bạn trong UI nếu cần
    });

    return () => {
      socket.off("friendRequestStatus");
    };
  }, []);

  useEffect(() => {
    if (userId) {
      fetchProfileUser(userId);
    }
  }, [userId]);
  return (
    <section className="wrap-profile">
      <div className="header-profile">
        <div className="info-user">
          <img className="" src={profileUser?.avatarUrl} alt="avatar" />
          <p>{profileUser?.displayName}</p>
        </div>
        <div className="action-user">
          <button className="btn btn-profile" onClick={handleAddFriend}>
            <FaUserFriends /> Thêm bạn bè
          </button>
          <button className="btn btn-profile">
            <AiFillMessage /> Nhắn tin
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfileUser;
