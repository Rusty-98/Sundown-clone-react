import { useState } from "react";
import "./Scroll.css";

const ScrollText = () => {

    const [close, setClose] = useState(false);

    return (
        <div className={close ? "p-3 whitespace-nowrap overflow-x-auto bg-[#EFEAE3] bar mt-[8vw] mb-32 font-bold" : "p-3 whitespace-nowrap overflow-x-auto bg-[#EFEAE3] bar mt-[10vw] mb-8 font-bold"}>
            <div className="scroll">
                <div className="whitespace-nowrap inline-block">
                    <h1 className={close ? "text-9xl inline-block" : "text-7xl inline-block"}>Enviroment</h1>
                    <div className={close? "bg-[#fe330a] inline-block ml-4 mr-4 w-[4.2vw] h-[4.2vw] rounded-[50%]" : "bg-[#fe330a] inline-block ml-4 mr-4 w-[8vw] h-[8vw] rounded-[50%]"}></div>
                    <h1 className={close ? "text-9xl inline-block" : "text-7xl inline-block"}>Content</h1>
                    <div className={close? "bg-[#fe330a] inline-block ml-4 mr-4 w-[4.2vw] h-[4.2vw] rounded-[50%]" : "bg-[#fe330a] inline-block ml-4 mr-4 w-[8vw] h-[8vw] rounded-[50%]"}></div>
                    <h1 className={close ? "text-9xl inline-block" : "text-7xl inline-block"}>Experience</h1>
                    <div className={close? "bg-[#fe330a] inline-block ml-4 mr-4 w-[4.2vw] h-[4.2vw] rounded-[50%]" : "bg-[#fe330a] inline-block ml-4 mr-4 w-[8vw] h-[8vw] rounded-[50%]"}></div>
                </div>
                <div className="whitespace-nowrap inline-block">
                    <h1 className={close ? "text-9xl inline-block" : "text-7xl inline-block"}>Enviroment</h1>
                    <div className={close? "bg-[#fe330a] inline-block ml-4 mr-4 w-[4.2vw] h-[4.2vw] rounded-[50%]" : "bg-[#fe330a] inline-block ml-4 mr-4 w-[8vw] h-[8vw] rounded-[50%]"}></div>
                    <h1 className={close ? "text-9xl inline-block" : "text-7xl inline-block"}>Content</h1>
                    <div className={close? "bg-[#fe330a] inline-block ml-4 mr-4 w-[4.2vw] h-[4.2vw] rounded-[50%]" : "bg-[#fe330a] inline-block ml-4 mr-4 w-[8vw] h-[8vw] rounded-[50%]"}></div>
                    <h1 className={close ? "text-9xl inline-block" : "text-7xl inline-block"}>Experience</h1>
                    <div className={close? "bg-[#fe330a] inline-block ml-4 mr-4 w-[4.2vw] h-[4.2vw] rounded-[50%]" : "bg-[#fe330a] inline-block ml-4 mr-4 w-[8vw] h-[8vw] rounded-[50%]"}></div>
                </div>
                <div className="whitespace-nowrap inline-block">
                    <h1 className={close ? "text-9xl inline-block" : "text-7xl inline-block"}>Enviroment</h1>
                    <div className={close? "bg-[#fe330a] inline-block ml-4 mr-4 w-[4.2vw] h-[4.2vw] rounded-[50%]" : "bg-[#fe330a] inline-block ml-4 mr-4 w-[8vw] h-[8vw] rounded-[50%]"}></div>
                    <h1 className={close ? "text-9xl inline-block" : "text-7xl inline-block"}>Content</h1>
                    <div className={close? "bg-[#fe330a] inline-block ml-4 mr-4 w-[4.2vw] h-[4.2vw] rounded-[50%]" : "bg-[#fe330a] inline-block ml-4 mr-4 w-[8vw] h-[8vw] rounded-[50%]"}></div>
                    <h1 className={close ? "text-9xl inline-block" : "text-7xl inline-block"}>Experience</h1>
                    <div className={close? "bg-[#fe330a] inline-block ml-4 mr-4 w-[4.2vw] h-[4.2vw] rounded-[50%]" : "bg-[#fe330a] inline-block ml-4 mr-4 w-[8vw] h-[8vw] rounded-[50%]"}></div>
                </div>
            </div>

        </div>
    )
}

export default ScrollText