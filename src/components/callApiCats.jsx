import React, { useEffect, useState } from "react";


const CallApiCats = () => {
    const GIPHY_API_KEY = "2cZkiFTqyiS79UdSapL6LHWlublpl7iy";

    const [fact, setFact] = useState();
    const [gif, setGif] = useState();

    useEffect(() => {
        fetch("https://catfact.ninja/fact")
            .then(res => res.json())
            .then(data => {
                setFact(data.fact);
                fetch(`https://api.giphy.com/v1/gifs/search?q=${data.fact.split(" ", 3).join(" ")}&api_key=${GIPHY_API_KEY}`)
                    .then(res => res.json())
                    .then(json => setGif(json.data[0].images.original.url))
            })
    }, []);


    return (
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", alignItems: "center", height: "100vh" }}>
            <img src={gif} alt={`gif de ${gif}`} style={{ width: "30%" }} />
            <p style={{ width: "40%" }}>
                {fact}
            </p>

        </div>
    )
};

export default CallApiCats;
