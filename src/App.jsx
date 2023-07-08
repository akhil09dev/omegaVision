import React from "react";
import styles from "./style";

// importing all compionents............... 

import {About , Navbar , Hero , Team , Features  , Footer , Contact} from './components'

const App
 = () => {
  return ( <div className="bg-primary w-full overfol-hidden  text-white">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
    <Navbar/>
      </div>
    </div>
    

    <div className={`bg.primary ${styles.flexStart}`}>
    <div className={`${styles.boxWidth}`}>
        <Hero/>

    </div>
    </div>
    
    <div className={`bg.primary ${styles.flexStart} ${styles.paddingX}` }>
    <div className={`${styles.boxWidth}`}>
      <About/>
       <Features/>
      <Team/>
      <Footer/>
      

    </div>
    </div>
  </div> );
}
 
export default App
;