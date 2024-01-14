const Anime = ({close}) => {

  return (
    <div className="max-w-full relative">
        <div className={close ? "absolute -z-10 left-80 -top-56" : "absolute -z-10 left-20 -top-100"}>
            <div className={close ? "rounded-[50%] bg-[#fe330a] absolute hero w-[50vw] h-[20vw] filter blur-3xl -mt-10" : "rounded-[50%] bg-[#fe330a] absolute hero w-[70vw] h-[60vw] filter blur-3xl ml-24 -m-16"}></div>
            <div className={close ? "rounded-[50%] bg-[#fe330a] absolute hero w-[70vw] h-[27vw] filter blur-3xl -ml-[40vw] mt-[6vw]" : "rounded-[50%] bg-[#fe330a] absolute hero w-[60vw] h-[45vw] filter blur-3xl -ml-[35vw] -mt-10"}></div>
            {/* <div className="rounded-[50%] bg-orange-600 absolute hero w-[50vw] h-[20vw] filter blur-3xl -ml-[30vw] -mt-[15vw]"></div> */}
            <div className={close ? "hero rounded-[50%] bg-[#fe330a] absolute w-[35vw] h-[44vw] filter blur-3xl ml-[110vh] mt-[3vh]" : "hero rounded-[50%] bg-[#fe330a] absolute w-[55vw] h-[60vw] filter blur-3xl ml-[15vh] mt-[4vh]"}></div>
            <div className="rounded-[50%] bg-[#fe330a]  hero2 w-[70vw] h-[25vw] filter blur-3xl"></div>
        </div>
    </div>
  )
}

export default Anime