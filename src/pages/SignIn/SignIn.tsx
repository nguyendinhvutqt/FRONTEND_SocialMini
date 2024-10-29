import { Link } from "react-router-dom";
import "./style.scss";

const SignIn = () => {
  return (
    <section className="wrapper-sign-in">
      <div className="form-sign-in">
        <h2>Đăng nhập tài khoản</h2>
        <div className="input-control">
          <label>Email:</label>
          <input className="input" type="text" />
        </div>
        <div className="input-control">
          <label>Mật khẩu:</label>
          <input type="password" />
        </div>
        <button className="btn btn-sign-in">Đăng nhập</button>
        <p className="text-sign-in">
          Bạn chưa có tài khoản{" "}
          <Link className="link link-sign-up" to={"/sign-up"}>
            Đăng ký
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignIn;
