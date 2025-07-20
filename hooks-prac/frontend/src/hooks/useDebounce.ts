import { useEffect, useState } from "react";

export function useDebounce(value, timeout) {
    const [debounceValue, setDebounceValue] = useState(value);
    
    useEffect(() => {
        const timeOutNumber = setTimeout(() => {
            setDebounceValue(value);
        }, timeout);

        return () => {
            clearTimeout(timeOutNumber);
        }
    }, [value])

    return debounceValue;
}