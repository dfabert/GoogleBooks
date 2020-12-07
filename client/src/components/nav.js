import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/saved">
        React Reading List
      </a>
      <a className="navbar-brand" href="/search">
        Search For More!
      </a>
    </nav>
  );
}

export default Nav;
