import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../jb.png';
import './navbar.css';
// import 'react-push-menu/styles/component.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        {/* </div>/<div className="gpt3__navbar-links_logo"> */}
        <div className="gpt3__navbar-links_container">
          <img src={logo} className="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <p>
            <a href="/">Home</a>
          </p>
          <p>
            <a href="/linux"> Linux</a>
          </p>
          <p>
            <a href="/recon"> Recon</a>
          </p>
          <p>
            <a href="/network">Network</a>
          </p>
          <p>
            <a href="/exploit">Exploitation /PostExploit</a>
          </p>
          <p>
            <a href="/webhack">WebHacking</a>
          </p>
          <p>
            <a href="/wifihack">WifiHacking</a>
          </p>
          <p>
            <a href="/python">Python</a>
          </p>
        </div>
      </div>

      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p>
                <a href="/">Home</a>
              </p>
              <p>
                <a href="/linux"> Linux</a>
              </p>
              <p>
                <a href="/recon"> Recon</a>
              </p>
              <p>
                <a href="/network">Network</a>
              </p>
              <p>
                <a href="/exploit">Exploitation /PostExploit</a>
              </p>
              <p>
                <a href="/webhack">WebHacking</a>
              </p>
              <p>
                <a href="/wifihack">WifiHacking</a>
              </p>
              <p>
                <a href="/python">Python</a>
              </p>
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
