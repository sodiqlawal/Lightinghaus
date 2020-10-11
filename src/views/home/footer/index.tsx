import React from "react";
import logo from "../../../assets/logo.jpeg";
import yelloLogo from "../../../assets/yellow-logo.png";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PhoneIcon from "@material-ui/icons/Phone";
import RoomIcon from "@material-ui/icons/Room";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { ReactComponent as AppleIcon } from "../../../assets/app-store.svg";
import { ReactComponent as GoogleIcon } from "../../../assets/google-play.svg";
import "./index.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="first">
          <div className="image-container">
            <img src={logo} alt="logo" />
          </div>
          <p>
            Brighten your nights with modern designer lighting from
            Thelightinghaus.com Our range features top brands and all the latest
            contemporary lighting styles to illuminate your home and garden.
          </p>
        </div>

        <div className="second">
          <div className="title-container">
            <h5>Quick Links</h5>
          </div>

          <ul>
            <li>LIGHTING EXPLORER</li>
            <li>HOTEL</li>
            <li>HOME</li>
            <li>MY ACCOUNT</li>
            <li>CART</li>
          </ul>
        </div>

        <div className="third">
          <div className="title-container">
            <h5>Connect</h5>
          </div>

          <p>Connect with us on social media</p>

          <div className="icon-container">
            <WhatsAppIcon className="icon" />
            <LinkedInIcon className="icon" />
            <YouTubeIcon className="icon" />
            <TwitterIcon className="icon" />
            <FacebookIcon className="icon" />
            <InstagramIcon className="icon" />
          </div>
        </div>

        <div className="fourth">
          <div className="title-container">
            <img src={yelloLogo} alt="logo" />
            <div className="right">
              <h5>Download our mobile app</h5>
              <p>Get access to exclusive offers</p>
            </div>
          </div>

          <div className="store">
            <div className="app-store">
              <AppleIcon className="icon" />
              <div className="note">
                <p className="small">Download on the</p>
                <h5>App Store</h5>
              </div>
            </div>
            <div className="google-play">
              <GoogleIcon className="icon" />
              <div className="note">
                <p className="small">GET IT ON</p>
                <h5>Google Play</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* address */}
      <div className="address">
        <div className="container">
          <ul>
            <li>
              <PhoneIcon className="icon" />
              <p>+234 802 501 8557</p>
            </li>
            <li>
              <RoomIcon className="icon" />
              <p>35 Freedom Way, Lekki Phase 1, Lagos, Nigeria</p>
            </li>
            <li>
              <MailOutlineIcon className="icon" />
              <p>sales@thelightinghaus.com</p>
            </li>
          </ul>
        </div>
      </div>

      {/* end address */}
    </div>
  );
};

export default Footer;
