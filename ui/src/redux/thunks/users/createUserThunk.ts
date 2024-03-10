import { createAsyncThunk } from "@reduxjs/toolkit";
import { usersAPI } from "../../../api/users";
import { CreateUserDto } from "../../../api/users/createUser";
import { AxiosError } from "axios";

export const createUsersThunk = createAsyncThunk(
  "users/createUser",
  async (user: CreateUserDto) => {
    try {
      const response = await usersAPI.createUser(user);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new AxiosError(error.response?.data.message || error.message);
      }
      throw new Error("Something went wrong");
    }
  },
);
