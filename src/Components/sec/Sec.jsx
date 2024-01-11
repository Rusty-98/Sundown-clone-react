import './Sec.css';
const Sec = () => {
  return (
    <div className="mt-10 max-w-fulll relative z-10 bg-[#EFEAE3]">
        <video src="../../public/66fa855f-fc0d4198.mp4" autoPlay muted loop className="w-4/5 rounded-xl mr-auto ml-auto"></video>
        <div className="absolute -z-10 -top-20 right-0">
            <div className="rounded-[50%] bg-[#fe330a] absolute hero w-[40vw] h-[40vw] filter blur-2xl"></div>
            <div className="rounded-[50%] bg-[#fe330a] absolute right-10 hero2 w-[40vw] h-[40vw] filter blur-2xl"></div>
            <div className="rounded-[50%] bg-[#fe330a] w-[30vw] h-[30vw] filter blur-2xl"></div>
        </div>
    </div>
  )
}

export default Sec