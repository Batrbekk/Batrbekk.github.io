import React from "react";
import "./css/App.css";
import Card from "./Card";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="card-collection">
        <div className="card-block">
          <Card />
        </div>
        <div className="card-block cl2">
          <Card />
        </div>
        <div className="card-block">
          <Card />
        </div>
        <div className="card-block cl2">
          <Card />
        </div>
        <div className="card-block">
          <Card />
        </div>
        <div className="card-block cl2 mob-none">
          <Card />
        </div>
        <div className="card-block mob-none">
          <Card />
        </div>
        <div className="card-block cl2 mob-none">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default App;
