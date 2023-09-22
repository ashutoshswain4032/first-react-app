import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Place from "./components/Place";
import destinations from "./components/TravelPlanner";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="main">
    {destinations.map((des) => {
      return (
        <Place
          name={des.name}
          image={des.image}
          description={des.description}
          rating={des.rating}
          best={des.rating>4.5 ? "best":"d-none"}
        />
      );
    })}
  </div>
);
