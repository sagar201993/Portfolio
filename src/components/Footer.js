import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";

import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon />
        <a
          href="https://github.com/sagar201993?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          <GithubIcon />
        </a>
        <a
          href="https://www.linkedin.com/feed/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
        <EmailIcon />
      </div>
      <p> &copy; 2023 msagar.com</p>
    </div>
  );
}

export default Footer;
