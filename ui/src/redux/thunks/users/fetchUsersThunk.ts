import { createAsyncThunk } from "@reduxjs/toolkit";
import { usersAPI } from "../../../api/users";

export const fetchUsersThunk = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    const response = await usersAPI.fetchUsers();
    return response.data;
  },
);
