import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

import { motion, useScroll } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("");
  var [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const variants = {
    notScrolled: { opacity: 1, y: 0 },
    scroll: { opacity: 0, y: "-100%" },
  }
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    
    <nav >
      <motion.div
        animate={scrolled ? "notScrolled" : "scroll"}
        variants={variants}
        initial={{opacity: 0}}
        transition={{
          duration: .1,
          ease: "easeInOut"
      }}
          className={`${
            styles.paddingX
          } w-full flex items-center py-5 fixed top-0 z-50 bg-coffee`}
      > 

      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0,0);
          }}
          >
            <img src={logo} alt="logo" className="w-9 h-9 object-contain"/>
            <p className={`text-[17px] font-bold cursor-pointer flex ${
              scrolled ? "text-white" : "text-coffee"
            }`}>Aakash &nbsp;
            <span className="sm:block hidden">| Tammana</span>
            </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link)=> (
            <li
              key = {link.id}
              className={`${
                active == link.title
                ? "text-secondary"
                : "text-white"
              }
                hover:text-pacific_cyan text-[18px]
                font-medium cursor-pointer
              `}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
        </ul>
        <div className="sm:hidden flex flex-1
        justify-end items-center">
          <img src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px]
          object-contain"
          onClick={() => setToggle(!toggle)}
          />
          <div 
          className={`${
            !toggle ? 'hidden' : 'flex'} 
            p-6 bg-coffee absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
          {navLinks.map((link)=> (
            <li
              key = {link.id}
              className={`${
                active == link.title
                ? "text-white"
                : "text-coffee-800"
              }
                font-poppins font-mediuum cursor-pointer
                text-[16px]
              `}
              onClick={() => {
                setToggle(!toggle);
                setActive(link.title);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
        </ul>
          </div>
        </div>
      </div>
      </motion.div>
    </nav>
    );
};

export default Navbar;
