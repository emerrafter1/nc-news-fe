import { useState, useEffect } from "react";


function useApiRequest(apiFunction, ...args){
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setError(null)
        setIsLoading(true)
        apiFunction(...args).then((data) => {
            setData(data)
        }).catch(() => {
            setError("Oops! Something went wrong")
        })
        .finally(() => {
            setIsLoading(false)
        })
    }, [...args])
    return {data, isLoading, error, setData}

}

export default useApiRequest;