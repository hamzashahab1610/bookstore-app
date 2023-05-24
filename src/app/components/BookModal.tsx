import { Book } from "@/types";
import React, { useState } from "react";

interface BookModalProps {
	book: Book | null;
	onClose: () => void;
	onUpdate: (updatedBook: Book) => {
		type: string;
		payload: Book;
	};
}

const BookModal = ({ book, onClose, onUpdate }: BookModalProps) => {
	const [name, setName] = useState(book?.name || "");
	const [price, setPrice] = useState(book?.price || "");
	const [category, setCategory] = useState(book?.category || "");
	const [description, setDescription] = useState(book?.description || "");

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		onUpdate({ ...book, name, price, category, description });
		onClose();
	};

	return (
		<div
			className={`fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50 ${
				book ? "" : "hidden"
			}`}
		>
			<div className="bg-white w-full max-w-md mx-4 sm:mx-auto rounded-lg shadow-lg p-8">
				<h2 className="text-2xl font-bold mb-4">Edit Book</h2>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label className="block text-lg font-semibold">
							Name:
						</label>
						<input
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="border border-gray-400 p-2 w-full rounded"
						/>
					</div>
					<div className="mb-4">
						<label className="block text-lg font-semibold">
							Price:
						</label>
						<input
							type="number"
							value={price}
							onChange={(e) => setPrice(e.target.value)}
							className="border border-gray-400 p-2 w-full rounded"
						/>
					</div>
					<div className="mb-4">
						<label className="block text-lg font-semibold">
							Category:
						</label>
						<input
							type="text"
							value={category}
							onChange={(e) => setCategory(e.target.value)}
							className="border border-gray-400 p-2 w-full rounded"
						/>
					</div>
					<div className="mb-4">
						<label className="block text-lg font-semibold">
							Description:
						</label>
						<input
							type="text"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							className="border border-gray-400 p-2 w-full rounded"
						/>
					</div>
					<div className="flex justify-end">
						<button
							type="submit"
							className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
						>
							Save
						</button>
						<button
							onClick={onClose}
							className="px-4 py-2 ml-2 bg-gray-400 text-white rounded hover:bg-gray-500"
						>
							Cancel
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default BookModal;
