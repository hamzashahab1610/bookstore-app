"use client";

import React, { useState } from "react";
import { useSelector, useDispatch, Provider } from "react-redux";
import { RootState } from "../store";
import { deleteBook, updateBook } from "../store/bookActions";
import { Book } from "@/types";
import store from "../store";
import BookModal from "./components/BookModal";
import AddBookFormModal from "./components/AddBookFormModal";

const BookList = () => {
	const state = useSelector((state: RootState) => state.books);
	const dispatch = useDispatch();
	const [selectedBook, setSelectedBook] = useState<Book | null>(null);

	const handleDelete = (id?: string) => {
		dispatch(deleteBook(id));
	};

	const handleEdit = (book: Book) => {
		setSelectedBook(book);
	};

	if (state.books.length === 0) {
		return (
			<div className="container mx-auto text-center">
				<p className="text-gray-500">No books found.</p>
			</div>
		);
	}

	return (
		<div className="container mx-auto">
			<div className="overflow-x-auto">
				<table className="min-w-full border border-gray-300">
					<thead>
						<tr>
							<th className="px-6 py-3 bg-gray-200 text-left text-sm font-semibold uppercase">
								Name
							</th>
							<th className="px-6 py-3 bg-gray-200 text-left text-sm font-semibold uppercase">
								Price
							</th>
							<th className="px-6 py-3 bg-gray-200 text-left text-sm font-semibold uppercase">
								Category
							</th>
							<th className="px-6 py-3 bg-gray-200 text-right text-sm font-semibold uppercase">
								Actions
							</th>
						</tr>
					</thead>
					<tbody>
						{state.books.map((book: Book) => (
							<tr key={book.id} className="bg-white">
								<td className="px-6 py-4">{book.name}</td>
								<td className="px-6 py-4">${book.price}</td>
								<td className="px-6 py-4">{book.category}</td>
								<td className="px-6 py-4 text-right">
									<button
										onClick={() => handleEdit(book)}
										className="px-4 py-2 text-white bg-blue-500 rounded mr-0 mb-2 sm:mb-0 sm:mr-2"
									>
										Edit
									</button>
									<button
										onClick={() => handleDelete(book.id)}
										className="px-4 py-2 text-white bg-red-500 rounded"
									>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<BookModal
				book={selectedBook}
				onClose={() => setSelectedBook(null)}
				onUpdate={(updatedBook) => dispatch(updateBook(updatedBook))}
			/>
		</div>
	);
};

const Bookstore = () => {
	const [showAddModal, setShowAddModal] = useState(false);

	const handleAddClick = () => {
		setShowAddModal(true);
	};

	const handleAddModalClose = () => {
		setShowAddModal(false);
	};
	return (
		<Provider store={store}>
			<div className="container mx-auto py-8 max-w-5xl w-11/12">
				<h1 className="text-4xl font-bold text-center">Bookstore</h1>
				<div className="flex justify-between items-center my-6">
					<h2 className="text-3xl font-bold">Book List</h2>
					<button
						onClick={handleAddClick}
						className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
					>
						Add Book
					</button>
				</div>
				<BookList />
				{showAddModal && (
					<AddBookFormModal onClose={handleAddModalClose} />
				)}
			</div>
		</Provider>
	);
};

export default Bookstore;
