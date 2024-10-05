import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();

const baseUrl = "https://google-search74.p.rapidapi.com/";
const options = {
	method: "GET",
	headers: {
		"x-rapidapi-key": "e5a1e8f3c6msh1218268b288bf76p141a13jsn86cf30ed3382",
		"x-rapidapi-host": "google-search74.p.rapidapi.com",
	},
};

export const ResultContextProvider = ({ children }) => {
	const [results, setResults] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");

	const getResults = async (search) => {
		setIsLoading(true);
		const response = await fetch(
			`${baseUrl}?query=${search}&limit=100&related_keywords=true`,
			options
		);
		const data = await response.json();
		console.log(data);
		setResults(data);
		setIsLoading(false);
	};

	return (
		<ResultContext.Provider
			value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}
		>
			{children}
		</ResultContext.Provider>
	);
};

export const useResultsContext = () => useContext(ResultContext);
