import { io } from "socket.io-client";

// Sử dụng userId khi kết nối socket
const userId = "<USER_ID>"; // Lấy userId của người dùng hiện tại
const socket = io(import.meta.env.VITE_BACKEND_URL, {
  query: { userId },
});

export default socket;
