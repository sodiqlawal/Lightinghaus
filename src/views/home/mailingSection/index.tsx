import React from "react";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import mailingImg from "../../../assets/mailingImg.png";
import "./index.scss";

const MailingSection = () => {
  return (
    <div className="mailing-section">
      <div className="container">
        <div className="left">
          <div className="top">
            <MailOutlineIcon className="mail-icon" />
            <p className="mailing-text">Join our mailing list</p>
          </div>

          <p className="middle-text">
            Subscribe to our newsletter to get <br /> updates on our latest offers!
          </p>

          <input type="text" placeholder="Enter email address" />

          <div className="button-container">
            <button type="submit">Subscribe</button>
          </div>
        </div>

        <div className="right">
          <img src={mailingImg} alt="mail" />
        </div>
      </div>
    </div>
  );
};

export default MailingSection;
