"use client"

import { useState } from "react";
import Link from "next/link";
import "./navbar.scss";

import { AiFillFire } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { SiTelegram, SiInstagram } from "react-icons/si";

function Navbar() {
const [openMenu, setOpenMenu] = useState(false)
const handleMenu = () => setOpenMenu(!openMenu)

  return (
    (<header className="header">
      <div className="container">
        <div className="navbar">
          <div >
            <Link className="logo" href="/">
              <AiFillFire />
              Fire
            </Link>
          </div>
          <nav className="menu">
            <Link className="menu__item" href="/">
              Home
            </Link>
            <Link className="menu__item" href="/about">
              About
            </Link>
            <Link className="menu__item" href="/events">
              Events
            </Link>
          </nav>
          <div className="social">
            <Link className="social__item" href="https://web.telegram.org/">
              <SiTelegram />
            </Link>
            <Link className="social__item" href="https://instagram.com">
              <SiInstagram />
            </Link>
          </div>
          <div className="mobile">
            <button className="burger" onClick={() => handleMenu()}>
              {openMenu ? <MdOutlineClose/> : <GiHamburgerMenu />  }
            </button>
            <nav className={`menu menu-mobile ${openMenu ? 'active' : ''}`}>
              <Link className="menu__item" href="/">
                Home
              </Link>
              <Link className="menu__item" href="/about">
                About
              </Link>
              <Link className="menu__item" href="/events">
                Events
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>)
  );
}

export default Navbar;
