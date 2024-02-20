import { useState, useEffect } from "react";

export function SearchFunction() {
    const [searchData, setSearchData] = useState(null);
    const [search, setSearch] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);



    useEffect(() => { 
        const fetchSearchData = async () => {
            if (newSearchString.length < 2) return;

            setIsLoading(true);
            setError(null);

            try {
                const response await fetch(`https://api.open5e.com/monsters/?search=${search}`);
                if (!response.ok) throw new Error("Failed to fetch data");

                const data = await response.json();
                setSearchData(data.results || []);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }   
        };
        
        const timeoutId = setTimeout(() => {
            fetchSearchData();
        }, 500);

    

        return () => clearTimeout(timeoutId)

    }, [search]);


    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            {isLoading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            {}
        </div>
    );

}