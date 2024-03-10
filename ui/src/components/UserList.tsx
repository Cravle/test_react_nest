import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootStore, useAppDispatch } from "../redux/store";
import { fetchUsersThunk } from "../redux/thunks/users/fetchUsersThunk";
import { UserItem } from "./UserItem";

export const UserList = () => {
  const users = useSelector((state: RootStore) => state.users.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsersThunk());
  }, []);
  return (
    <>
      {users.map((user) => (
        <UserItem item={user} key={user.id} />
      ))}
    </>
  );
};
