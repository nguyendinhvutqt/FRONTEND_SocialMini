import axios from "axios";

// Tạo một instance của Axios
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL, // Địa chỉ API cơ bản
  timeout: 10000, // Thời gian chờ tối đa (10 giây)
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Interceptor cho request (Gửi yêu cầu)
axiosInstance.interceptors.request.use(
  (config) => {
    // Thêm token hoặc header tùy chỉnh vào request
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Xử lý lỗi trước khi gửi request
    return Promise.reject(error);
  }
);

// Interceptor cho response (Nhận phản hồi)
axiosInstance.interceptors.response.use(
  (response) => {
    // Xử lý phản hồi từ server
    return response;
  },
  (error) => {
    // Xử lý lỗi chung (ví dụ: token hết hạn)
    if (error.response && error.response.status === 401) {
      // Refresh token hoặc điều hướng đến trang đăng nhập
      console.error("Unauthorized! Redirecting to login...");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
