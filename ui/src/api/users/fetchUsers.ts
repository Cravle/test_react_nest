import { apiClient } from "../client";

export const fetchUsers = async () => {
  return apiClient.get("/users");
};
