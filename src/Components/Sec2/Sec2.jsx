import './Sec2.css';
const Sec2 = ({close}) => {
  return (
    <div className="max-w-full relative">
        <div className="absolute z-[1] left-80 -top-56">
            <div className={close ? "rounded-[50%] bg-orange-400 absolute hero w-[30vw] h-[30vw] filter blur-2xl" : "rounded-[50%] bg-orange-400 absolute hero w-[50vw] h-[50vw] -ml-20 mt-6 filter blur-2xl"}></div>
            <div className={close ? "rounded-[50%] bg-[#fe330a] w-[30vw] h-[30vw] filter blur-2xl" : "rounded-[50%] bg-[#fe330a] hero2 w-[50vw] h-[50vw] filter blur-2xl -ml-20 mt-6" }></div>
        </div>
    </div>
  )
}

export default Sec2