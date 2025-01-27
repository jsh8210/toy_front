import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Home = () => {
    let { param } = useParams();

    useEffect(() => {
        console.log('param', param);
    }, [param])

    return (
        <div>home</div>
    )
}

export default Home;

