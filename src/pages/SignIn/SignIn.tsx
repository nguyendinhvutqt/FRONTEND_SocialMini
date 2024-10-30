import { Link, useNavigate } from "react-router-dom";
import "./style.scss";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  signInSchema,
  SignInValidateData,
} from "../../validation/signInSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignInFormData } from "../../types/signInFormData";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/features/user/userSlice";

const SignIn = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInValidateData>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(signInSchema),
  });

  const onSubmit = handleSubmit(async (data: SignInFormData) => {
    if (isLoading) return;

    try {
      setIsLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/auth/sign-in`,
        data
      );
      if (response.status === 201) {
        console.log(response.data);
        dispatch(
          setUser({
            userId: response.data.user.userId,
            displayName: response.data.user.displayName,
            email: response.data.user.email,
            avatar: response.data.user.avatar,
            birthDay: response.data.user.birthDay,
            sex: response.data.user.sex,
            isLoggedIn: true,
          })
        );
        localStorage.setItem("access_token", response.data.access_token);
        setIsLoading(false);
        toast.success("Đăng nhập thành công");
        navigate("/");
      }
    } catch (error) {
      setIsLoading(false);
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
      } else {
        toast.error("Đã xảy ra lỗi không xác định");
      }
    }
  });
  return (
    <section className="wrapper-sign-in">
      <form onSubmit={onSubmit} className="form-sign-in">
        <h2>Đăng nhập tài khoản</h2>
        <div className="input-control">
          <label>Email:</label>
          <input {...register("email")} className="input" type="text" />
          {errors.email && (
            <p className="text-error">{errors.email?.message}</p>
          )}
        </div>
        <div className="input-control">
          <label>Mật khẩu:</label>
          <input {...register("password")} type="password" />
          {errors.password && (
            <p className="text-error">{errors.password?.message}</p>
          )}
        </div>
        <button className="btn btn-sign-in">
          {isLoading ? "Đang xử lý" : "Đăng nhập"}
        </button>
        <p className="text-sign-in">
          Bạn chưa có tài khoản{" "}
          <Link className="link link-sign-up" to={"/sign-up"}>
            Đăng ký
          </Link>
        </p>
      </form>
    </section>
  );
};

export default SignIn;
