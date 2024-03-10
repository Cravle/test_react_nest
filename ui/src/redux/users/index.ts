import { createSlice } from "@reduxjs/toolkit";
import { fetchUsersThunk } from "../thunks/users/fetchUsersThunk";
import { IUsersStore } from "./interfaces";
import { createUsersThunk } from "../thunks/users/createUserThunk";

const initialState: IUsersStore = {
  users: [],
  loading: false,
  errorMsg: "",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUsers: (state, action) => {
      state.users = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsersThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.errorMsg = "";
    });
    builder.addCase(fetchUsersThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsersThunk.rejected, (state, action) => {
      state.loading = false;
      state.errorMsg = action.error.message || "";
    });
    builder.addCase(createUsersThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
      state.errorMsg = "";
    });
    builder.addCase(createUsersThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createUsersThunk.rejected, (state, action) => {
      console.log(action, "action");
      state.loading = false;
      state.errorMsg = action.error.message || "";
    });
  },
});

export const { addUsers } = usersSlice.actions;

export default usersSlice.reducer;
