import { IoMdCloseCircle } from "react-icons/io";
import "./style.scss";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <p className="title">Social mini</p>
      <div className="search-group">
        <input
          className="input-search"
          type="text"
          placeholder="Nhập thông tin tìm kiếm..."
        />
        <IoMdCloseCircle className="icon-close" />
      </div>
    </div>
  );
};

export default SearchBar;
