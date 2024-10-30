import { Link, useNavigate } from "react-router-dom";
import "./style.scss";
import { useForm } from "react-hook-form";
import {
  signUpSchema,
  SignUpValidateData,
} from "../../validation/signUpSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";

const SignUp = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const nagivate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpValidateData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      birthDay: undefined,
      sex: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = handleSubmit(async (data: SignUpValidateData) => {
    if (isLoading) {
      return;
    }
    try {
      // Định dạng lại `birthDay`
      setIsLoading(true);
      const formattedData = {
        ...data,
        birthDay: data.birthDay
          ? new Date(data.birthDay).toISOString().split("T")[0]
          : "",
      };

      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/auth/sign-up`,
        formattedData
      );

      if (response.status === 201) {
        setIsLoading(false);
        toast.success("Đăng ký thành công, vùi lòng xác thực email");
        nagivate("/sign-in");
      }
    } catch (error) {
      setIsLoading(false);
      if (axios.isAxiosError(error)) {
        // Lấy message từ AxiosError
        toast.error(error.response?.data?.message || "Đã xảy ra lỗi");
      } else {
        // Trong trường hợp lỗi khác không phải AxiosError
        toast.error("Đã xảy ra lỗi không xác định");
      }
    }
  });

  return (
    <section className="wrapper-sign-up">
      <form onSubmit={onSubmit} className="form-sign-up">
        <h2>Đăng ký tài khoản</h2>
        <div className="input-control">
          <label>Họ và tên đệm:</label>
          <input {...register("firstName")} className="input" type="text" />
          {errors.firstName && (
            <p className="text-error">{errors.firstName?.message}</p>
          )}
        </div>
        <div className="input-control">
          <label>Tên:</label>
          <input {...register("lastName")} className="input" type="text" />
          {errors.lastName && (
            <p className="text-error">{errors.lastName?.message}</p>
          )}
        </div>
        <div className="input-control">
          <label>Ngày sinh:</label>
          <input
            {...register("birthDay")}
            className="input input-date"
            type="date"
          />
          {errors.birthDay && (
            <p className="text-error">{errors.birthDay?.message}</p>
          )}
        </div>
        <div className="input-control">
          <label>Giới tinh:</label>
          <div className="box-gender">
            <select className="select-gender" {...register("sex")}>
              <option className="option-gender" value="Nam">
                Nam
              </option>
              <option className="option-gender" value="Nữ">
                Nữ
              </option>
            </select>
          </div>
          {errors.sex && <p className="text-error">{errors.sex?.message}</p>}
        </div>
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
        <div className="input-control">
          <label>Xác nhận mật khẩu:</label>
          <input {...register("confirmPassword")} type="password" />
          {errors.confirmPassword && (
            <p className="text-error">{errors.confirmPassword?.message}</p>
          )}
        </div>
        <button className="btn">{isLoading ? "Đang xử lý" : "Đăng ký"}</button>
        <p className="text-sign-up">
          Bạn đã có tài khoản{" "}
          <Link className="link link-sign-in" to={"/sign-in"}>
            Đăng nhập
          </Link>
        </p>
      </form>
    </section>
  );
};

export default SignUp;
