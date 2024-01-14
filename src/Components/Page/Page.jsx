import Sec2 from "../Sec2/Sec2"

const Page = ({close}) => {
    return (
        <div className={close ? "w-full min-h-[100vh] relative z-[3]" : "w-full h-[65vh] relative z-[3]"}>
            <div className={close ? "w-[85%] h-full mr-auto ml-auto flex items-center justify-between pt-20" : "w-[95%] h-full mr-auto ml-auto flex flex-col pt-20"}>
                <div className={close ? "text-6xl font-bold w-3/5 relative z-10 -mt-[6vw]" : "text-3xl font-bold w-[85%] leading-[1] mb-10 relative z-10 -mt-[10vw]"}>
                    We are a group of design-driven, goal-focused creators, producers, and designers who believe that the details make all the difference.
                </div>
                <div className={close ? "w-1/5 mr-10" : "w-3/5 mr-10"}>
                    <img src="/img2.webp" className="w-[500] h-[336] rounded-[10px]" alt="" />
                    <h1 className={close ? "mt-[50px] leading-tight" : "mt-[50px] font-extralight w-full text-justify text-sm leading-tight"}>
                        We love to create, we love to solve, we love to collaborate, and we love to turn amazing ideas into reality. We’re here to partner with you through every step of the process and know that relationships are the most important things we build.
                    </h1>
                </div>
            </div>
            <Sec2 />
        </div>
    )
}

export default Page