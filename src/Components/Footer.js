import React from "react";
import "./footer.css";
import Logo from "../imgs/logo2.png";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="disclaimer-area">
          <p className="disclaimer-desc">
            <b>Disclaimer:</b> This ammaajaan clone project is a mere simulation
            and is not affiliated with ammaajaan in any way.
          </p>
        </div>
      </div>
      <div className="extra-data">
        <div className="link-section">
          <div className="first-row">
            <p className="bold">Get to Know Us</p>
            <p>Make Money with Us</p>
            <p>ammaajaan Payment</p>
            <p>Let Us Help You</p>
          </div>
          <div className="second-row">
            <p className="bold">About ammaajaan</p>
            <p>Sell products on ammaajaan</p>
            <p>ammaajaan Business Card</p>
            <p>ammaajaan and COVID-19</p>
          </div>
          <div className="third-row">
            <p className="bold">Connect with Us</p>
            <p>Sell apps on ammaajaan</p>
            <p>Shop with Points</p>
            <p>Shipping Rates & Policies</p>
          </div>
          <div className="fourth-row">
            <p className="bold">ammaajaan Cares</p>
            <p>Become an Affiliate</p>
            <p>Reload Your Balance</p>
            <p>Returns & Replacements</p>
          </div>
        </div>
        <div className="link-section2">
          <div className="first-one">
            <div className="first-row">
              <p className="bold">Get to Know Us</p>
              <p>Make Money with Us</p>
              <p>ammaajaan Payment</p>
              <p>Let Us Help You</p>
            </div>
            <div className="second-row">
              <p className="bold">About ammaajaan</p>
              <p>Sell products on ammaajaan</p>
              <p>ammaajaan Business Card</p>
              <p>ammaajaan and COVID-19</p>
            </div>
          </div>
          <div className="second-one">
            <div className="third-row">
              <p className="bold">Connect with Us</p>
              <p>Sell apps on ammaajaan</p>
              <p>Shop with Points</p>
              <p>Shipping Rates & Policies</p>
            </div>
            <div className="fourth-row">
              <p className="bold">ammaajaan Cares</p>
              <p>Become an Affiliate</p>
              <p>Reload Your Balance</p>
              <p>Returns & Replacements</p>
            </div>
          </div>
        </div>
        <div className="developer">
          <img src={Logo} className="ammaajaan-img" />
          <div className="dev-data">
            <p>&copy; 2023 | Developed by </p>
            <a
              className="dev-link"
              href="https://github.com/shubho0908"
              target="_blank"
            >
              Harish Gh, Waterloo, Ontario
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
