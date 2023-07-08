import { useState } from 'react'
import icon from '../assets/arrow-up.svg'

const Card =(props)=>{
    const [open ,setOpen] = useState(false)
    const handleClick = ()=>{
        setOpen(!open)
    }
        return(
        <div  className='max-w-sm rounded overflow-hidden shadow-lg border-r border-b border-l my-5 mx-5 p-5 min-h-[300px]'
        onClick={handleClick}>
            <div className={`flex ${!open?'flex-col items-center place-content-center':''}`}>
            <div> 
                <img src={icon} alt='icon' className={`${!open?'w-32 h-auto':''}`}/>
            </div>
            <div className={`font-bold text-xl mb-2 ${!open?'text-2xl':''} `}>{props.title}</div>
            </div>
            {open && <div>{props.desc}</div>}

        </div>
    )
}

export default Card