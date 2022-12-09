import React from "react";
import "../index.css";
import social1 from "../assets/img/nav-icon1.svg";
import social2 from "../assets/img/nav-icon2.svg";
import social3 from "../assets/img/nav-icon3.svg";
import Container from "./Container";
import DownloadCV from "./DownloadCV";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
      
        <div className="flex items-center justify-center md:justify-between py-5 h-48  ">
          <div className="flex flex-col items-center w-full  md:items-end ">
            <ul className="flex items-center justify-between w-40  ">
              <li className="social-icon ">
                <a href="   " className=" md:mr-2  ">
                  <img src={social1} alt="" />
                </a>
              </li>
              <li className=" social-icon ">
                <a href="" className="md:mr-2 ">
                  <img src={social2} alt="" />
                </a>
              </li>
              <li className="social-icon  ">
                <a href="" className=" md:mr-2   ">
                  <img src={social3} alt="" />
                </a>
              </li>
            </ul>
            <p className="mt-3 font-sans    ">
                CopyRight 2022. All Right Reserved
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
