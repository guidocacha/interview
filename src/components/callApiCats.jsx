import React, { useEffect, useState } from "react";


const CallApiCats = () => {
    const GIPHY_API_KEY = "2cZkiFTqyiS79UdSapL6LHWlublpl7iy";

    const [fact, setFact] = useState();
    const [gif, setGif] = useState();
    const [change, setChange] = useState();

    useEffect(() => {
        fetch("https://catfact.ninja/fact")
            .then(res => res.json())
            .then(data => {
                setFact(data.fact);
                fetch(`https://api.giphy.com/v1/gifs/search?q=${data.fact.split(" ", 3).join(" ")}&api_key=${GIPHY_API_KEY}`)
                    .then(res => res.json())
                    .then(json => setGif(json.data[0].images.original.url))
            })
    }, [change]);

    const mouse = e => {
        setChange(change + e.target.value);
        console.log("click");
    }

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem", alignItems: "center", height: "70vh" }}>
                <img src={gif} alt={`gif de ${gif}`} style={{ width: "30%", borderRadius: "1rem" }} />
                <p style={{ width: "40%" }}>
                    {fact}
                </p>
            </div>
            <button value= "1" onClick= {mouse} style={{ margin: "3rem", backgroundColor: "black", color: "wheat", padding: "1rem", borderRadius: "1rem", fontSize: "1rem" }}>
                    cambiar frase y gift</button>

        </div>
    )
};

export default CallApiCats;
