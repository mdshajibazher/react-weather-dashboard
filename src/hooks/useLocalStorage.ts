import {useEffect, useState} from "react";

const useLocalStorage = (storageKey: string,defaultValue: string='') => {
    const [value, setValue] = useState<string>(
        JSON.parse(localStorage.getItem(storageKey)) ?? defaultValue
    );

    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(value));
    }, [value,storageKey]);

    return [value,setValue];
}
export default useLocalStorage;