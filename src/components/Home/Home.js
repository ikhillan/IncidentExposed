import React from 'react';

// This function creates the contents of the home page, which consists of the live map and its key
function Home() {
    return (
        <div>
            <h1 style={{ textAlign: 'center', marginTop: '20px', marginBottom: '10px' }}>Explore and Click New Incidents for Details!</h1>

            {/* Sets up a container for the livemap and its legend */}
            <div style={{ position: "relative" }}>

                {/* embeds the map from the livemap.html file */}
                <iframe src="/livemap.html" title="Live Incident Map" style={{ marginLeft: "auto", marginRight: "auto", display: "block", width: "1100px", height: "660px", borderRadius: "50px", border: "1px solid black"}}></iframe>

                {/* creates and positions the map's legend on the map */}
                <div className="legend" style={{ position: "absolute", top: "0", left: "0", marginLeft: "200px", marginTop: "490px", width: "200px", height: "150px", backgroundColor: "lavender", borderRadius: "30px", border: "1px solid black"}}>
                    <h1 style={{ marginTop: "9px", textAlign: "center", textDecoration: "underline", fontSize: "20px" }}>Legend</h1>
                    <h1 style={{ marginTop: "7px", marginLeft: "13px", fontSize: "15px", color: "#d73e29"}}>Critical: Red</h1>
                    <h1 style={{ marginTop: "7px", marginLeft: "13px", fontSize: "15px", color: "#f69730"}}>Dangerous: Orange</h1>
                    <h1 style={{ marginTop: "7px", marginLeft: "13px", fontSize: "15px", color: "#ffcb92"}}>Moderate: Beige</h1>
                    <h1 style={{ marginTop: "7px", marginLeft: "13px", fontSize: "15px", color: "#38aadd"}}>Minor: Blue</h1>
                </div>

            </div>

        </div>
    );
}

export default Home;