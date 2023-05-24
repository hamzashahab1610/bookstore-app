import { combineReducers, createStore } from "redux";
import bookReducers from "./bookReducers";

const rootReducer = combineReducers({
	books: bookReducers
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
