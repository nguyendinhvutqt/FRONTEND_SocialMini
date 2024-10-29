import "./style.scss";
import { SearchBar } from "../SearchBar";
import { Navigation } from "../Navigation";
import { UserAction } from "../UserAction";

const Header = () => {
  return (
    <section className="wrapper-header">
      <SearchBar />
      <Navigation />
      <UserAction />
    </section>
  );
};

export default Header;
