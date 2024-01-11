
import "./RealHome.css"
import Home from './Home/Home'
import Last from './Last/Last'
import { FaArrowRightLong } from "react-icons/fa6";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaRegCopyright } from "react-icons/fa";
import Anime from './Anime/Anime';

const RealHome = () => {
    return (
        <div className='las w-full h-full absolute bg-black overflow-y-scroll -z-20 overflow-x-hidden'>
            {<Home />}
            {<Last />}
            <div className='w-full h-[87%] fixed bottom-0 -z-[2] text-white'>
                {<Anime />}
                <div className='w-[87%] mr-auto ml-auto flex items-center justify-between'>
                    <div className='text-4xl font-bold tracking-tighter'>
                        <h1>Work</h1>
                        <h1>studio</h1>
                        <h1>contact</h1>
                    </div>
                    <div className='text-2xl w-[26%] tracking-tighter'>
                        Get industry insights and creative inspiration straight to your inbox.
                        <div className='mt-8 border-b-2 border-gray-400 text-gray-400 text-xl flex justify-between pr-4'>Email address {<FaArrowRightLong fontSize={22} />}</div>
                    </div>
                </div>
                <div className='mr-auto ml-auto mt-10 h-[60%] text-center font-bold text-[23vw] text-[#EFEAE3]'>
                    Sundown
                </div>
                <div className='w-[95%] mr-auto ml-auto mt-10 border-t-2 border-[#efeae371] text-[#EFEAE3] tracking-wider flex justify-between items-center pt-3'>
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