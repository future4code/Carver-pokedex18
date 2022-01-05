import { useEffect, useState } from "react";
import axios from "axios";

const useRequestData = (initialValue, url) => {
    const [data, setData] = useState(initialValue);

    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [url]);

    return [data, setData];
};

export default useRequestData;