import { useState, useEffect } from 'react';

const useRequest = (requestHandler, url) => {
    console.log("requestHandler: ", requestHandler);
    console.log("url: ", url);
    const [response, setResponse] = useState(null);

    useEffect(() => {
        if (requestHandler) {
            console.log("url: ", url);
            const data = requestHandler(url).get();
            console.log("response: ", data);
        }
    }, [requestHandler, url]);

    return [];
}

export default useRequest;