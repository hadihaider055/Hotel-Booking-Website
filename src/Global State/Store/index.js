import { createStore } from "redux";
import { AppReducer } from "../Reducer";

export const store = createStore(AppReducer);
