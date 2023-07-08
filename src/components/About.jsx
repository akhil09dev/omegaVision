import styles from "../style";
const About = () => {
    return (  <div className="flex flex-col ">
        
        <div className="text-[50px] ss:text-[40px] semibold uppercase">
            About  <span className="text-gradient">US</span>
        </div>
        <div className={`items-centre py-[6px] px-4`}>
                            <span className={`${styles.paragraph}`}> Introducing the Ultimate  <span className="text-white"> Brand - Influencer</span> {' '} Connection System</span>
                    </div>
        <div className="flex "> 
            
At Omega Vision, we take pride in our mission to create the best system for connecting brands and influencers in the most seamless and effective way possible. We understand the power of authentic collaborations and immense value they bring to both brands and influencers. That’s why we’ve developed a robust and innovative system that revolutionize the way these connections are made. 
        </div>
    </div>);
}
 
export default About;