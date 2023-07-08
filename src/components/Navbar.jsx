import { useState } from "react";
import logo from '../assets/logo.svg'
import close from '../assets/close.svg'
import  menuicon from '../assets/menu.svg'
import { navItems } from "../constants/index";



const Navbar = () => {
    const  [menu , setMenu ] = useState(false)
    const handleClick= ()=>{
        setMenu(!menu)
    }
    return ( 
       <>
            <nav className=" w-full flex navbar py-6 justify-between items-center">

           
            <div>
                <img src= {logo} alt="Omega Vision" className="w-[200px] h-[50px]"/>
            </div>
            <div onClick={handleClick}>
               {!menu?<img src={menuicon} alt="menu" className="w-[60px] "/>:<img src={close} alt="close menu" className="w-[60px] "/>}
            </div>
            
            </nav>
            { menu &&
            <div className={`flex flex-col p-6 bg-black-gradient absolute mx-4 my-2 right-0   min-w-[150px] rounded-xl sidebar`}> 
            
                {navItems.map((item)=>(
                    <a href={`#${item.link}`} className={`uppercase ${item.id === navItems.length?'mb-0':'mb-6'}`} key={item.id}>{item.title} </a>
                    ))}
        
            </div>}


            </>
      
     );
}
 

export default Navbar;