import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export const Footer = () => {
  const footerLinks = [
    [
      { text: "Audio Description", href: "#" },
      { text: "Investor Relations", href: "#" },
      { text: "Legal Notice", href: "#" },
      { text: "Service Code", href: "#" },
    ],
    [
      { text: "Help Center", href: "#" },
      { text: "Jobs", href: "#" },
      { text: "Cookie Preferences", href: "#" },
    ],
    [
      { text: "Gift Cards", href: "#" },
      { text: "Terms Of Use", href: "#" },
      { text: "Corporate Information", href: "#" },
    ],
    [
      { text: "Media Center", href: "#" },
      { text: "Privacy", href: "#" },
      { text: "Contacts", href: "#" },
    ],
  ];
  return (
    <footer>
      <div className="inner-container">
        <div className="social">
          <ul className="d-flex justify-content-center">
            <FacebookRoundedIcon className="text-white me-3" />
            <InstagramIcon className="text-white me-3" />
            <YouTubeIcon className="text-white me-3" />
            <WhatsAppIcon className="text-white" />
          </ul>
        </div>
        <div className="footer-links row">
          {footerLinks.map((column, index) => (
            <ul
              key={index}
              className="list-unstyled col-lg-3 col-md-6 col-sm-12"
            >
              {column.map((link, i) => (
                <li key={i}>
                  <a className="footer-link" href={link.href}>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="justify-content-center">
          <p className="text-center text-white mt-3">
            &copy; 2025 Netflix, Inc. By Kidus Sofonias
          </p>
        </div>
      </div>
    </footer>
  );
};
