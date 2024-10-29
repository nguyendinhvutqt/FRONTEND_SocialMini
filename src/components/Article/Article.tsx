import { IoMdClose } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentDots, FaRegShareSquare } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { IoShareSocialOutline } from "react-icons/io5";
import "./style.scss";
import avatar from "../../assets/avatar.jpg";

const images = [avatar, avatar, avatar, avatar, avatar];

const Article = () => {
  const maxImages = 4;
  // Chọn class dựa trên số lượng ảnh
  let layoutClass = "";
  if (images.length === 1) layoutClass = "one-image";
  else if (images.length === 2) layoutClass = "two-images";
  else if (images.length === 3) layoutClass = "three-images";
  else layoutClass = "more-than-four"; // Cho 4 hình trở lên
  // Tính toán số lượng hình ảnh còn lại
  const remainingImages =
    images.length > maxImages ? images.length - maxImages : 0;
  return (
    <>
      <div className="cart">
        <div className="title-cart">
          <div className="flex">
            <img className="img-avatar" src={avatar} alt="avatar" />
            <p>Nguyễn đình Vũ</p>
          </div>
          <div className="group-icon">
            <BsThreeDotsVertical className="icon-handle" />
            <IoMdClose className="icon-handle" />
          </div>
        </div>
        <div className="des-cart">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
            harum facere fuga officia tempore laudantium iste non? Quae vitae
            eligendi, quia inventore accusamus illo ducimus tempore eos repellat
            recusandae consectetur animi voluptatum!
          </p>
        </div>
        <div className={`img-cart ${layoutClass}`}>
          {images.slice(0, maxImages).map((image, index) => (
            <div
              key={index}
              className={
                index === maxImages - 1 && images.length > maxImages
                  ? "extra-image"
                  : ""
              }
              style={
                index === maxImages - 1 && images.length > maxImages
                  ? ({
                      "--remaining-images": remainingImages,
                    } as React.CSSProperties)
                  : {}
              }
            >
              <img src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="react-cart">
          <div className="react flex">
            <AiOutlineLike className="icon-react" />
            <FcLike className="icon-react" />
            <FaRegCommentDots className="icon-react" />
            <p>12k</p>
          </div>
          <div className="react flex">
            <p>123</p>
            <FaRegCommentDots className="icon-react" />
            <p>123</p>
            <FaRegShareSquare className="icon-react" />
          </div>
        </div>
        <div className="btn-cart">
          <div className="btn-icon">
            <AiOutlineLike className="icon-btn" /> Thích
          </div>
          <div className="btn-icon">
            <FaRegCommentDots className="icon-btn" /> Bình luận
          </div>
          <div className="btn-icon">
            <IoShareSocialOutline className="icon-btn" /> Chia sẻ
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
