import { ThunkDispatch, UnknownAction, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import reducers from "./index";

export const store = configureStore({
  reducer: reducers,
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppThunkDispatch = ThunkDispatch<RootStore, any, UnknownAction>;
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
