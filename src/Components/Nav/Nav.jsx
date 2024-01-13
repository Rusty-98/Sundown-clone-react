import { useEffect, useState } from 'react';
import './Nav.css';

const Nav = () => {

  const [close, setClose] = useState(false);

  // useEffect(() => {
  //   const handleClose = () => {
  //     if(window.screen.width <= "768px"){
  //       setClose(false);
  //     }
  //   }
  // },[close, setClose,]);

  return (
    <div className='bg-[#EFEAE3] relative z-10 flex justify-between p-5'>
        <div className='w-1/5'>
            <img src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15c2_Sundown%20logo.svg" alt="" />
        </div>
        {close ? <div className='w-[28%] flex items-center justify-evenly text-2xl'>
            <h2 className=' w-[25%] text-center border-2 border-black rounded-[50px] p-1 relative overflow-hidden butt'><a href="#">Work</a></h2>
            <h2 className=' w-[25%] text-center border-2 border-black rounded-[50px] p-1 relative overflow-hidden butt'><a href="#">Studio</a></h2>
            <h2 className=' w-[25%] text-center border-2 border-black rounded-[50px] p-1 relative overflow-hidden butt'><a href="#">Contact</a></h2>
        </div> : <div className='w-[35%] text-2xl border-2 border-black rounded-[50px] flex'>
            <div className='w-[30%] flex flex-col items-center justify-center pl-2'>
              <div className='h-[8%] w-[70%] mb-1 bg-black rounded-md'></div>
              <div className='h-[8%] w-[70%] bg-black rounded-md'></div>
            </div>
            <h2 className=' w-[70%] text-center p-1 overflow-hidden'>Menu</h2>
        </div>}
    </div>
  )
}

export default Nav