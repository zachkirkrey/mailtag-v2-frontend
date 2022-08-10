import React, { useEffect } from 'react'
import Spinner from 'components/Spinner';

function GoogleSuccess() {
    console.log("google success======>", window.location);

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const callback = queryParams.get('callback');
        window.localStorage.setItem("callback", callback);
        window.close()
    }, [])

    return <Spinner />
}

export default GoogleSuccess;