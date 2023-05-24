import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../../store/bookActions";

import { v4 as uuidv4 } from "uuid";

interface AddBookFormModalProps {
	onClose: () => void;
}

const AddBookFormModal = ({ onClose }: AddBookFormModalProps) => {
	const dispatch = useDispatch();
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [category, setCategory] = useState("");
	const [description, setDescription] = useState("");

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		dispatch(addBook({ name, price, category, description, id: uuidv4() }));
		setName("");
		setPrice("");
		setCategory("");
		setDescription("");
		onClose();
	};

	return (
		<div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
			<div className="bg-white w-full max-w-md mx-4 sm:mx-auto rounded-lg shadow-lg p-8">
				<h2 className="text-2xl font-bold mb-4">Add a Book</h2>
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
							Add
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

export default AddBookFormModal;
