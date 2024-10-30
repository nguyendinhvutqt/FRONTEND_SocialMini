// src/features/user/userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  userId: string;
  displayName: string;
  email: string;
  avatar: string;
  birthDay: Date | undefined;
  sex: string;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  userId: "",
  displayName: "",
  email: "",
  avatar: "",
  birthDay: undefined,
  sex: "",
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.userId = action.payload.userId;
      state.email = action.payload.email;
      state.displayName = action.payload.displayName;
      state.avatar = action.payload.avatar;
      state.birthDay = action.payload.birthDay;
      state.sex = action.payload.sex;
      state.isLoggedIn = true;
    },
    clearUser: (state) => {
      state.userId = "";
      state.email = "";
      state.displayName = "";
      state.avatar = "";
      state.birthDay = undefined;
      state.sex = "";
      state.isLoggedIn = false;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
