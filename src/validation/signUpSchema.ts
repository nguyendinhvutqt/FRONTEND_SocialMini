import * as yup from "yup";

export const signUpSchema = yup
  .object({
    firstName: yup.string().required("Họ và tên đệm không được để trống"),
    lastName: yup.string().required("Tên không được để trống"),
    birthDay: yup
      .date()
      .typeError("Ngày sinh không hợp lệ")
      .required("Ngày sinh không được để trống"),
    sex: yup.string().required("Giới tính không được để trống"),
    email: yup
      .string()
      .email("Email không đúng định dạng")
      .required("Email không được để trống"),
    password: yup
      .string()
      .min(6, "Mật khẩu phải lớn hơn 5 ký tự")
      .required("Mật khẩu không được để trống"),
    confirmPassword: yup
      .string()
      .min(6, "Xác nhận mật khẩu phải lớn hơn 5 ký tự")
      .oneOf([yup.ref("password")], "Mật khẩu không khớp")
      .required("Xác nhận mật khẩu không được để trống"),
  })
  .required();

export type SignUpValidateData = yup.InferType<typeof signUpSchema>;
