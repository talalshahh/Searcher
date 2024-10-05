import React, { useState } from "react";
import { useResultsContext } from "../context/ResultContextProvider";

const Search = () => {
	const { setSearchTerm } = useResultsContext();
	const [searched, setSearched] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		setSearchTerm(searched);
	};

	return (
		<div className="flex justify-center items-center mt-5">
			<form
				onSubmit={handleSubmit}
				className="flex items-center rounded-lg p-2 shadow-lg sm:w-[400px] lg:w-[600px]"
			>
				<input
					type="text"
					placeholder="Search here..."
					value={searched}
					onChange={(e) => setSearched(e.target.value)}
					className="w-full p-2 text-sm bg-transparent border-none outline-none rounded-lg focus:ring-2 focus:ring-green-500"
				/>
				<button
					type="submit"
					className="ml-3 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition duration-300 focus:ring-2 focus:ring-green-300"
				>
					Search
				</button>
			</form>
		</div>
	);
};

export default Search;
