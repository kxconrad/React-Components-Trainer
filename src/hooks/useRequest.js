import { useState, useEffect } from 'react';

const useRequest = (requestHandler, url) => {

    console.log("requestHandler: ", requestHandler);
    console.log("url: ", url);
    const [responseData, setResponseData] = useState(null);

    useEffect(() => {

        const getResponse = async () => {
            const { data } = await requestHandler(url).get();
            console.log("response: ", data);
            setResponseData(data);
        }
        getResponse();

    }, [url]);

    return [responseData, setResponseData];
}

export default useRequest;