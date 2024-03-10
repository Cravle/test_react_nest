import { IUser } from "../../types/user";

export interface IUsersStore {
  users: IUser[];
  loading: boolean;
  errorMsg: string;
}
