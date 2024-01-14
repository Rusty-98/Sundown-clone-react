
import "./RealHome.css"
import Home from './Home/Home'
import Last from './Last/Last'
import { FaArrowRightLong } from "react-icons/fa6";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaRegCopyright } from "react-icons/fa";
import Anime from './Anime/Anime';
import { useState } from "react";
import { useResponse } from "../Hooks/useResponse";

const RealHome = () => {

    const { close } = useResponse();

    return (
        <div className='las w-full h-full absolute bg-black overflow-y-scroll -z-20 overflow-x-hidden'>
            {<Home />}
            {<Last close={close} />}
            <div className={close ? 'w-full h-[87%] fixed bottom-0 -z-[2] text-white' : 'w-full h-[53vh] fixed bottom-0 -z-[2] text-white'}>
                {<Anime close={close} />}
                <div className={close ? 'w-[87%] mr-auto ml-auto flex items-center justify-between' : 'w-[90%] mr-auto ml-auto flex flex-col'}>
                    <div className={close ? 'text-4xl font-bold tracking-tighter' : 'text-3xl font-bold tracking-tighter'}>
                        <h1>Work</h1>
                        <h1>studio</h1>
                        <h1>contact</h1>
                    </div>
                    <div className={close ? 'text-2xl w-[26%] tracking-tighter' : 'text-lg text-[#EFEAE3] w-[70%] mt-4 leading-[1.4] font-extralight tracking-normal'}>
                        Get industry insights and creative inspiration straight to your inbox.
                        <div className={close ? 'mt-8 border-b-2 border-gray-400 text-gray-400 text-xl flex justify-between pr-4' : 'mt-6 border-b-2 border-gray-400 text-[#efeae381] text-lg flex justify-between pr-2'}>Email address {<FaArrowRightLong fontSize={22} className={close ? "" : 'font-extralight'} />}</div>
                    </div>
                </div>
                <div className={close ? 'mr-auto ml-auto mt-10 h-[60%] text-center font-bold text-[23vw] text-[#EFEAE3]' : 'mr-auto ml-auto mt-5 h-[60%] text-center font-bold text-[23vw] text-[#EFEAE3]'}>
                    Sundown
                </div>
                <div className={close ? 'w-[95%] mr-auto ml-auto mt-10 border-t-2 border-[#efeae381] text-[#EFEAE3] tracking-wider flex justify-between items-center pt-3' : 'w-[95%] mr-auto ml-auto -m-36 border-t-2 border-[#efeae381] text-[#EFEAE3] tracking-wider flex justify-between items-center pt-5'}>
                    <div className='flex items-center tracking-wider'>Copyright{<FaRegCopyright />}Rusty-98</div>
                    <div className='flex items-center tracking-wider'>{<AiOutlineGlobal />} India</div>
                    <div>Instagram</div>
                    <div>Linkedin</div>
                </div>
            </div>
        </div>
    )
}

export default RealHome