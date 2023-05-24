import { BookAction, BookState } from "../types";

const initialState: BookState = {
	books: []
};

const bookReducers = (state = initialState, action: BookAction): BookState => {
	switch (action.type) {
		case "ADD_BOOK":
			return {
				...state,
				books: [...state.books, action.payload]
			};
		case "DELETE_BOOK":
			return {
				...state,
				books: state.books.filter((book) => book.id !== action.payload)
			};
		case "UPDATE_BOOK":
			return {
				...state,
				books: state.books.map((book) =>
					book.id === action.payload.id ? action.payload : book
				)
			};
		default:
			return state;
	}
};

export default bookReducers;
