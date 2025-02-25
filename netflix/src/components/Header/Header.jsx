import React from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import logo from "../../assets/images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img className="logo" src={logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                TvShows
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Movies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Latest
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                MyList
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Browse by Language
              </a>
            </li>
          </ul>
          <ul className="navbar-nav link-light ">
            <li className="nav-item me-2">
              <SearchIcon className="icon" />
            </li>
            <li className="nav-item me-2">
              <NotificationsNoneIcon />
            </li>
            <li className="nav-item me-2">
              <AccountBoxIcon />
            </li>
            <li class="nav-item dropdown me-2">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              ></a>
              <ul class="dropdown-menu dropdown-menu-end text-light bg-dark">
                <li>
                  <a class="dropdown-item text-light" href="#">
                    User1
                  </a>
                </li>
                <li>
                  <a class="dropdown-item text-light" href="#">
                    User2
                  </a>
                </li>
                <li>
                  <a class="dropdown-item text-light" href="#">
                    User3
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
