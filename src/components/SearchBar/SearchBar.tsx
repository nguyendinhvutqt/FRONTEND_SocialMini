import { IoMdCloseCircle } from "react-icons/io";
import "./style.scss";
import { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import axiosInstance from "../../utils/axiosInstance";
import Tippy from "@tippyjs/react";
import { WrapperDropdown } from "../WrapperDropdown";
import { IconAvatar } from "../IconAvatar";
import { Link } from "react-router-dom";

interface SeachUser {
  _id: string;
  displayName: string;
  avatarUrl: string;
}

const SearchBar = () => {
  const [text, setText] = useState<string>("");
  const [users, setUsers] = useState<SeachUser[]>([]);
  const debounceSearch = useDebounce(text);

  const fetchSearchUser = async (value: string) => {
    try {
      const response = await axiosInstance.get(
        `${import.meta.env.VITE_BACKEND_URL}/users/search?q=${value}`
      );
      console.log(response);
      if (response.status === 200) {
        setUsers(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (debounceSearch) {
      fetchSearchUser(debounceSearch);
    }
  }, [debounceSearch]);

  const handleCloseSearch = () => {
    setText("");
    setUsers([]);
  };

  return (
    <div>
      <div className="search-bar">
        <p className="title">Social mini</p>
        <Tippy
          visible={users.length > 0}
          interactive={true}
          render={(attrs) => (
            <div className="box" tabIndex={-1} {...attrs}>
              <WrapperDropdown>
                <div className="box-search">
                  {users?.map((user: SeachUser) => (
                    <Link
                      to={`user/profile?id=${user._id}`}
                      key={user._id}
                      className="user-search"
                    >
                      <IconAvatar imageUrl={user.avatarUrl} />
                      <p>{user.displayName}</p>
                    </Link>
                  ))}
                </div>
              </WrapperDropdown>
            </div>
          )}
        >
          <div className="search-group">
            <input
              className="input-search"
              type="text"
              placeholder="Nhập thông tin tìm kiếm..."
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
            {text.length > 0 && (
              <IoMdCloseCircle
                className="icon-close"
                onClick={handleCloseSearch}
              />
            )}
          </div>
        </Tippy>
      </div>
    </div>
  );
};

export default SearchBar;
