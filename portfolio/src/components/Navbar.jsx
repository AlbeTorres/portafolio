import React,{useState, useEffect} from "react";
import Navlinks from "./Navlinks";
import '../index.css'

const Navbar = () => {

  const [visible, setVisible]= useState(false);
  const [scrolled, setScrolled]=useState(false)

  
  useEffect(()=>{
    const onScroll=()=>{
      window.scrollY>50 ? setScrolled(true): setScrolled(false)
    }
    

      window.addEventListener('scroll', onScroll);

      return()=>window.removeEventListener('scroll', onScroll)

  },[])

  const anchors=[
    {name:'Home', link:'#'},
    {name:'Skills', link:'#'},
    {name:'Projects', link:'#'},
    
]
  return (
    <div className={scrolled ? ` scrolled  fixed z-50 top-0  w-full right-0 md:right-auto   `: ` fixed z-50 top-0  w-full right-0 md:right-auto `  }>
      <div className="flex items-center md:w-11/12 mx-auto  justify-between h-14">

      <div className="pl-5 md:pl-0 ">
        <a className=" normal-case text-xl ">AlbeDev</a>
      </div>
      <div className="hidden md:block w-fit">
        <ul className=" flex justify-between items-center p-0 md:w-fit   ">
          {anchors.map(anchor=><Navlinks name={anchor.name} link={anchor.link }/>)}
        </ul>
      </div>
      <div className="md:hidden pr-5">
      <button onClick={()=>setVisible(!visible)} >Menu</button>

      </div>
      {visible &&

      <div className="absolute top-14 w-full border ">
        <ul className=" flex flex-col justify-center items-center p-0 w-full   ">
          {anchors.map(anchor=><Navlinks name={anchor.name} link={anchor.link }/>)}
        </ul>
      </div>
      }
      </div>

    </div>
  );
};

export default Navbar;
