import React from "react";
import "../index.css";
import astronaut from "../assets/img/header-img.svg";
import social1 from "../assets/img/nav-icon1.svg";
import social2 from "../assets/img/nav-icon2.svg";
import social3 from "../assets/img/nav-icon3.svg";


const Hero = () => {
  return (
    <div className="grid gap-y-5 md:gap-x-4 herolayout py-32  ">
      <div className=" flex flex-col items-center md:items-start">
        <div className="p-4 rounded-md border w-fit banner tagline ">
          <p>Welcome to my portfolio</p>
        </div>
        <h1 className="font-sans text-4xl text-center md:text-start md:text-7xl mb-4 font-semibold">
          Hi! i'm Albert a Web Developer
        </h1>
        <p className=" text-center md:text-start">
          I am a programmer motivated by the idea of creating solutions that add
          value to society. I consider myself an empathetic, responsible person
          with the ability to transmit ideas. I am always learning something
          new, it is a way of life that I enjoy. I am interested in working with
          talented colleagues in a healthy environment.
        </p>
        <ul className="flex items-center justify-between w-40     my-5  ">
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
              <img src={social3}  alt="" />
            </a>
          </li>
        </ul>
        <div className="font-sans ">
            <button className="conectbtn py-3 px-4 border rounded-md ">
                <span>

                Let's Connect
                </span> 
            </button>
        </div>
      </div>
      <figure className="bannerimg">
        <img src={astronaut} alt="" />
      </figure>
    </div>
  );
};

export default Hero;
