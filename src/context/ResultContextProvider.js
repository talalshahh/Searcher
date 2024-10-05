import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const apiKey = process.env.REACT_APP_API_KEY;
const apiHost = process.env.REACT_APP_API_HOST;

const baseUrl = process.env.REACT_APP_BASE_URL;
const options = {
	method: "GET",
	headers: {
		"x-rapidapi-key": apiKey,
		"x-rapidapi-host": apiHost,
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
