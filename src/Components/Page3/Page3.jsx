import { useEffect, useState } from "react"

const Page3 = ({close}) => {

  const [sele, setSele] = useState("Design");
  const [desc, setDesc] = useState("Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.");
  const [pic, setpic] = useState("../../public/img3.webp");
  
  const handleClick = (e) => {
    setSele(e);
  }

  useEffect(() => {
    if(sele === "Design") setDesc(text[0]);
    if(sele === "Design") setpic(pics[0]);
    if(sele === "Project") setDesc(text[1]);
    if(sele === "Project") setpic(pics[1]);
    if(sele === "Execution") setDesc(text[2]);
    if(sele === "Execution") setpic(pics[2]);
  },[
    sele,
  ])

  return (
    <div className={close ? 'w-full h-[120vh] flex items-center bg-[#EFEAE3] justify-center' : 'w-full h-[100vh] mt-10 flex items-center bg-[#EFEAE3] justify-center'}>
      <div className={close ? "w-[95%] h-[105vh] bg-black rounded-3xl flex items-center" : "w-[90%] h-[85vh] bg-black rounded-3xl flex flex-col"}>
        <div className={close ? "w-1/2 h-2/3 flex flex-col items-center" : "w-[90%] h-2/4 flex flex-col items-start pl-10 gap-2"}>
          <div className={close ? "w-[60%] h-[60%]": "w-[80%] h-[50%] pt-12"}>
            <div className="w-full flex">
              <div className={close ? (`${sele === "Design" ? "w-[1%] bg-orange-500 mr-4 rounded-t-sm" : "w-[1%] bg-gray-500 mr-4" }`) : (`${sele === "Design" ? "w-[1%] bg-orange-500 mr-4 rounded-t-sm" : "w-[1%] bg-gray-500 mr-4" }`)}></div>
              <h1 className={close ? (`${sele === "Design" ? "w-[90%] text-8xl text-white font-bold capitalize cursor-pointer" : "w-[90%] text-8xl text-gray-500 font-bold capitalize cursor-pointer"}`) : (`${sele === "Design" ? "w-[60%] text-5xl text-white font-bold capitalize cursor-pointer" : "w-[60%] text-5xl text-gray-500 font-bold capitalize cursor-pointer"}`)} onClick={()=> handleClick("Design")}>Design</h1>
            </div>
            <div className="w-full flex">
              <div className={close ? (`${sele === "Project" ? "w-[1%] bg-orange-500 mr-4 rounded-t-sm" : "w-[1%] bg-gray-500 mr-4" }`) : (`${sele === "Project" ? "w-[1%] bg-orange-500 mr-4 rounded-t-sm" : "w-[1%] bg-gray-500 mr-4" }`)}></div>
              <h1 className={close ? (`${sele === "Project" ? "w-[90%] text-8xl text-white font-bold capitalize cursor-pointer" : "w-[90%] text-8xl text-gray-500 font-bold capitalize cursor-pointer"}`) : (`${sele === "Project" ? "w-[60%] text-5xl text-white font-bold capitalize cursor-pointer" : "w-[60%] text-5xl text-gray-500 font-bold capitalize cursor-pointer"}`)} onClick={()=>handleClick("Project")}>Project</h1>
            </div>
            <div className="w-full flex">
              <div className={close ? (`${sele === "Execution" ? "w-[1%] bg-orange-500 mr-4 rounded-t-sm" : "w-[1%] bg-gray-500 mr-4" }`) : (`${sele === "Execution" ? "w-[1%] bg-orange-500 mr-4 rounded-t-sm" : "w-[1%] bg-gray-500 mr-4" }`)}></div>
              <h1 className={close ? (`${sele === "Execution" ? "w-[90%] text-8xl text-white font-bold capitalize cursor-pointer" : "w-[90%] text-8xl text-gray-500 font-bold capitalize cursor-pointer"}`) : (`${sele === "Execution" ? "w-[60%] text-5xl text-white font-bold capitalize cursor-pointer" : "w-[60%] text-5xl text-gray-500 font-bold capitalize cursor-pointer"}`)} onClick={()=>handleClick("Execution")}>Execution</h1>
            </div>
          </div>
          <div className={close ? "w-[60%] h-[20%] text-[#EFEAE3] text-lg leading-tight" : "w-[90%] h-[50%] text-justify mt-5 text-[#EFEAE3] text-sm leading-tight"}>
              {desc}
            </div>
        </div>
        <div className={close ? "w-1/2 h-full rounded-3xl overflow-hidden" : "w-full h-1/2 rounded-3xl overflow-hidden"}>
          <img src={pic} alt="" className="h-full w-full object-fill" />
        </div>
      </div>
    </div>
  )
}

export default Page3


const text = ["Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.", "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.", "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience."]

const pics = ["../../public/img3.webp","../../public/img4.webp","../../public/img5.webp"]