import React from "react";
import "./App.css"; // Import any CSS file if you have styling
import Header from "./Header"; // Importing Header component
import TeamList from "./TeamList"; // Importing TeamList component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <TeamList />
      </main>
    </div>
  );
}

export default App;
