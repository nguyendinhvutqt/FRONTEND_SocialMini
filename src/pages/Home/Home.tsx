import "./style.scss";
import avatar from "../../assets/avatar.jpg";
import { useState } from "react";
import ModalAddArticle, {
  ArticleFormData,
} from "../../components/ModalAddArticle/ModalAddArticle";
import { IoMdImages } from "react-icons/io";
import { Article } from "../../components/Article";

const Home = () => {
  const [openModalArticle, setOpenModalArticle] = useState<boolean>(false);
  const handleCloseModalArticle = () => {
    setOpenModalArticle(false);
  };

  const handleOpenModalArticle = () => {
    setOpenModalArticle(true);
  };

  const handleSubmitForm = (formData: ArticleFormData) => {
    console.log(formData);
    // Gọi API ở đây để gửi bài viết
  };

  return (
    <section className="wrapper-content">
      {/* sidebar left */}
      <div className="sidebar">1</div>

      {/* main content */}
      <div className="main-content">
        {/* modal add new article */}
        <ModalAddArticle
          isOpen={openModalArticle}
          onClose={handleCloseModalArticle}
          onSubmit={handleSubmitForm}
        />

        {/* header content */}
        <div className="header-content">
          <div className="flex group-create">
            <img className="img-avatar" src={avatar} alt="avatar" />
            <button className="btn btn-create" onClick={handleOpenModalArticle}>
              Bạn đang nghĩ gì thế?
            </button>
          </div>
          <div className="flex create-img">
            <IoMdImages className="icon-image" />
            <p className="text">Ảnh</p>
          </div>
        </div>

        {/* body content */}
        <div className="body-content">
          {/* article */}
          <Article />
        </div>
      </div>

      {/* sidebar right */}
      <div className="sidebar">1</div>
    </section>
  );
};

export default Home;
