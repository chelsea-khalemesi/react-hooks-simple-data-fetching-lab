// create your App component here
import React, { useState, useEffect } from "react";


function App() {
    const [dogImageUrl, setDogImageUrl] = useState(null);
    const [loading, setLoading] = useState(true);   //State to track if the image is still loading


    //Fetch random dog Url when component mounts
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
            setDogImageUrl(data.message);
            setLoading(false);  //Image has already been fetched


        })

        .catch((error) => console.error("Error fetching dog image:", error));

    }, []);        //Empty dependency array to ensure that the effect runs once


    return (
        <div> 
            {/* Display loading message if image is still loading */}
            {loading ? (
                <p>Loading...</p>
            ) : (
                //Display dog image,use maximum width of 100% to prevent images from overflowing
                <img src={dogImageUrl} alt="A Random Dog" style={{maxWidth: "100%" }} />

            )}
        </div>
    );
}

export default App;