import "./style.scss";

type Props = {
  imageUrl: string;
};

const IconAvatar = ({ imageUrl }: Props) => {
  return (
    <section className="icon-avatar">
      <img src={imageUrl} alt="avatar-icon" />
    </section>
  );
};

export default IconAvatar;
