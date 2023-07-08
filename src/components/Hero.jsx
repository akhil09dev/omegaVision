import styles from "../style";
import { questions } from "../constants/index.js";
import { useState } from "react";
import Questions from "./Questions";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
    const [text, setText] = useState("")
 

    return ( <section id="home"  className={`flex md:flex-row  flex-col ${styles.paddingY}`}>
            <div className={`flex ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}>

                    <div className={`items-centre py-[6px] px-4`}>
                            <span className={`${styles.paragraph}`}> Supercharge your bookings in <span className="text-white"> 30 days </span> {' '}or get your money back</span>
                    </div>
                    <div className="flex flex-row justify-between items-centre w-full">
                           <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]" 
                           >
                            <span className="uppercase">Vision<span className="text-[40px]">for</span> </span> 
                            <br className="sm:block hidden" />
                             <span className="text-gradient uppercase">Venute </span> 
                           </h1>
                           <div>

                           </div>
                           <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] ss:leading-[100px] leading-[75px] w-full" >

                           </h1>
                    </div>
            </div>


            
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
        <span className ={`text-4xl font-[64px] min-h-[300px] ml-20 bold`}>
        <Typewriter 
        
        words={questions}
        loop={0}
        cursor
        typeSpeed={50}
        deleteSpeed={5}
        delaySpeed={1200}
        
        />
        </span>
        
   </div>
    </section>
   );
}
 
export default Hero;