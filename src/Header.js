import React from "react";
import Search from "./Search";

import "./Header.css";

export default function Header() {
  return (
    <div className="weather">
      <h1>
        It's a <span className="highlight-text">fine</span> day
      </h1>
      <Search defaultCity="Lisbon" />
    </div>
  );
}
