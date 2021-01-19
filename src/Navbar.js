import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-light" style={{ backgroundColor: "#f5ea4c" }}>
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">Pokemon Names</span>
        </div>
      </nav>
    </div>
  );
}
