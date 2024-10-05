import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import { useLocation } from "react-router-dom";

import { useResultsContext } from "../context/ResultContextProvider";
import Loading from "./Loading";

const Results = () => {
	const { getResults, results, searchTerm, setSearchTerm, isLoading } =
		useResultsContext();
	useEffect(() => {
		getResults(searchTerm);
	}, [searchTerm]);
	console.log(results);

	const location = useLocation();

	if (isLoading) return <Loading />;

	switch (location.pathname) {
		case "/search":
			return (
				<div className=" flex flex-wrap justify-between space-y-6 lg:px-56">
					{results?.results?.map(({ position, url, title, description }) => (
						<div key={position} className="md:w-2/5 w-full ">
							<a
								href={url}
								target="_blank"
								className="cursor-pointer"
								rel="noreferrer"
							>
								<p className="text-sm">
									{url?.length > 30 ? url?.substring(0, 30) : url}
								</p>
								<p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
									{title}
								</p>
							</a>
							<p className="text-lg  dark:text-white text-dark-700">
								{description}
							</p>
						</div>
					))}
				</div>
			);
		default:
			return "ERROR";
	}
};

export default Results;
