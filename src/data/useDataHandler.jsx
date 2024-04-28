import { useState, useEffect } from "react";

export function useDataHandler(url) {
    const [dataFetched, setDataFetched] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function getData() {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setDataFetched(data);
            } catch(error) {
                console.log(error);
                setError(true);
            }
        }
        getData();
    }, [url])

    return {dataFetched, error}
}