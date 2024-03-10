import { apiClient } from "../client";

export type CreateUserDto = {
  name: string;
  phoneNumber: string;
  maskedPhoneNumber: string;
  password: string;
};

export const createUser = async (data: CreateUserDto) => {
  return apiClient.post("/users", data);
};
