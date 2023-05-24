import { Book } from "../types";

export const addBook = (book: Book) => {
	return {
		type: "ADD_BOOK",
		payload: book
	};
};

export const deleteBook = (id?: string) => {
	return {
		type: "DELETE_BOOK",
		payload: id
	};
};

export const updateBook = (book: Book) => {
	return {
		type: "UPDATE_BOOK",
		payload: book
	};
};
