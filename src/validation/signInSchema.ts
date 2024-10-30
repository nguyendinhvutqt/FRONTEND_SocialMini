import * as yup from "yup";

export const signInSchema = yup
  .object({
    email: yup
      .string()
      .email("Email không đúng định dạng")
      .required("Email không được để trống"),
    password: yup
      .string()
      .min(6, "Mật khẩu phải lớn hơn 5 ký tự")
      .required("Mật khẩu không được để trống"),
  })
  .required();

export type SignInValidateData = yup.InferType<typeof signInSchema>;
