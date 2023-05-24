export interface Book {
	id?: string;
	name: string;
	price: string;
	category: string;
	description: string;
}

export interface BookState {
	[x: string]: any;
	books: Book[];
}

export interface AddBookAction {
	type: "ADD_BOOK";
	payload: Book;
}

export interface DeleteBookAction {
	type: "DELETE_BOOK";
	payload: string;
}

export interface UpdateBookAction {
	type: "UPDATE_BOOK";
	payload: Book;
}

export type BookAction = AddBookAction | DeleteBookAction | UpdateBookAction;
