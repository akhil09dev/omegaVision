import styles from "../style";
import logo from '../assets/logo.svg'
import { footerLinks } from "../constants/index.js";
import fb from '../assets/facebook.svg'
import insta from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'


const socialMedia =[
  {
    icon: "../assets/facebook.svg",
    id:'facebook',
    link:'/fblink',
  },
  {
    icon: '../assets/facebook.svg',
    id:'instagram',
    link:'/instalink',
  },
  {
    icon: '../assets/facebook.svg',
    id:'linkedin',
    link:'/linkedinlink',
  },
]


//import links for footer
const Footer = () => (
<section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
  <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>

    <div className="flex-1 flex-col flex justify-start">
      <img  src={logo} alt="megaVision"
      className="w-[266px] h-auto object-contain"
      />
      <p className={`${styles.paragraph} mt-4 max-w-[310px]`}> Supercharge your booking with us</p>

         </div>

         <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2023 OmegaVision. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        
          <img
            
            src={fb}
            alt='facebook'
            className={`w-[21px] h-[21px] object-contain cursor-pointer mr-6`}
            
            onClick={() => window.open(social.link)}
          />
          <img
            
            src={insta}
            alt='instagram'
            className={`w-[21px] h-[21px] object-contain cursor-pointer mr-6`}
            
            onClick={() => window.open(social.link)}
          />
          <img
            
            src={linkedin}
            alt='facebook'
            className={`w-[21px] h-[21px] object-contain cursor-pointer  `}
            
            onClick={() => window.open(social.link)}
          />
      
      </div>
    </div>

</section>
   
)
 
export default Footer;