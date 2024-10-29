import { IconAvatar } from "../IconAvatar";
import "./style.scss";
import avatar from "../../assets/avatar.jpg";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: ArticleFormData) => void;
};

export interface ArticleFormData {
  text: string;
  images?: string[];
}

const ModalAddArticle: React.FC<Props> = ({
  isOpen,
  onClose,
  onSubmit,
}: Props) => {
  const [value, setValue] = useState("");
  const [fileNames, setFileNames] = useState<string[]>([]);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const names = Array.from(files).map((file) => file.name);
      setFileNames(names);
    }
  };

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData: ArticleFormData = {
      text: value,
      images: fileNames, // Gửi danh sách hình ảnh đã chọn
    };
    onSubmit(formData); // Gọi hàm onSubmit với dữ liệu bài viết
  };

  useEffect(() => {
    setValue("");
    setFileNames([]);
  }, [isOpen]);

  if (!isOpen) {
    return;
  }
  return (
    <div className="modal-overlay">
      <form
        className="modal-content"
        onSubmit={handleSubmitForm}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-title">
          <h2>Tạo bài viết</h2>
          <IoClose className="icon-close" onClick={onClose} />
        </div>
        <div className="flex">
          <IconAvatar imageUrl={avatar} />
          <p>Nguyễn Đình Vũ</p>
        </div>
        <div className="content-article">
          <textarea
            id="multiline-input"
            value={value}
            onChange={handleChange}
            rows={5} // Số dòng hiển thị
            cols={30} // Số cột hiển thị
            placeholder="Bạn đang nghĩ gì thế..."
            className="custom-textarea"
          />
        </div>
        <div className="file-input-container">
          <input
            type="file"
            id="file-upload"
            className="file-input"
            multiple
            accept="image/*"
            onChange={handleFileChange}
          />
          <label htmlFor="file-upload" className="file-input-label">
            {fileNames.length > 0 ? fileNames.join(", ") : "Choose files..."}
          </label>
        </div>
        <button type="submit" className="btn-submit" onClick={onClose}>
          Đăng bài
        </button>
      </form>
    </div>
  );
};

export default ModalAddArticle;
