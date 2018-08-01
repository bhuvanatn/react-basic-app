import React from "react";

const Header = ({tagline, add}) => (
<header className="top">
        <h1>
          Catch
          <span className="ofThe">
          <span className="of">of</span>
          <span className="the">The</span>
          </span>
          day
        </h1>
        <h3 className="tagline">
          <span>{tagline}{add}</span>
        </h3>
      </header>
);
export default Header;
