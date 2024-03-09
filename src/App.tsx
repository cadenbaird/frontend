import React from "react";
import "./App.css";

// const bandNames = [
//   {
//     name: "The Beastie Boys",
//     members: "Ad Rock, MCA, Mike D",
//     formed: 1979,
//   },
//   {
//     name: "Wolfmother",
//     members: "Andrew Stockdale, Hamish Rosser, Bobby Poulton",
//     formed: 2004,
//   },
//   {
//     name: "Cream",
//     members: "Eric Clapton, Jack Bruce, Giner Baker",
//   },
// ];

function Welcome() {
  return <h1>The Best Music Trios Ever</h1>;
}

function BandList() {
  return (
    <div>
      <h2>#1:</h2>
      <h2>#2:</h2>
      <h2>#3:</h2>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <BandList />
    </div>
  );
}

export default App;
