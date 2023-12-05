import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <React.Fragment>
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <a class="navbar-brand" href="#">
          Placement Saga
        </a>
        <div class="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Intel-logo.svg/2000px-Intel-logo.svg.png"
            alt=""
            width="130"
          />
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Question Library <span class="sr-only"></span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Theory Series
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Mock Tests
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Subscribe
              </a>
            </li>
            <li class="nav-item name">
              <a class="nav-link" href="#">
                Krishna
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <hr />
    </React.Fragment>
  );
};

export default Navbar;
