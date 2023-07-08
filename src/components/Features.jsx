import { Fragment } from "react";
import { features } from "../constants/index.js";
import Card from "./Card.jsx";



const Features = () => {
    return (  

        <section id="features">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4"> 
            {
                features.map((p)=>(<Card title={p.title} desc={p.desc} />))
            }
            </div>
        </section>
    );
}
 
export default Features;