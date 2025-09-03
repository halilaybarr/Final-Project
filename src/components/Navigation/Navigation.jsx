// Navigation.jsx
import React from "react";

import { Link } from "react-router-dom";

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/saved-news">Saved News</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
