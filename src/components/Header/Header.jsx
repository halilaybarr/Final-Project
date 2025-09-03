// Header.jsx
import React from "react";

import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <Link to="/" className="logo">
      News Explorer
    </Link>
    {/* You can add more header content here */}
  </header>
);

export default Header;
