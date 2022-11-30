import React from "react";

const Navlinks = ({name,link}) => {
  return (
    <>
      <li className="cursor-pointer w-full h-full  md:ml-10 md:py-0  ">
        <a className="font-normal text-lg px-6 opacity-75 hover:opacity-100 h-full w-full text-center py-5 md:py-0 md:h-fit md:w-fit block md:inline-block " href={link}>{name}</a>
      </li>
    </>
  );
};

export default Navlinks;
