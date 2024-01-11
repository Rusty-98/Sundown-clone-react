const Anime = () => {
  return (
    <div className="max-w-full relative">
        <div className="absolute -z-10 left-80 -top-56">
            <div className="rounded-[50%] bg-[#fe330a] absolute hero w-[50vw] h-[20vw] filter blur-3xl -mt-10"></div>
            <div className="rounded-[50%] bg-[#fe330a] absolute hero w-[70vw] h-[20vw] filter blur-3xl -ml-[40vw] mt-[8vw]"></div>
            {/* <div className="rounded-[50%] bg-orange-600 absolute hero w-[50vw] h-[20vw] filter blur-3xl -ml-[30vw] -mt-[15vw]"></div> */}
            <div className="hero rounded-[50%] bg-[#fe330a] absolute w-[35vw] h-[40vw] filter blur-3xl ml-[110vh] mt-[5vh]"></div>
            <div className="rounded-[50%] bg-[#fe330a]  hero2 w-[70vw] h-[25vw] filter blur-3xl"></div>
        </div>
    </div>
  )
}

export default Anime