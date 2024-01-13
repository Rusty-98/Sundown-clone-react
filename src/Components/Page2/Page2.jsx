import { useState } from 'react';
import './Page2.css';
const Page2 = () => {

    const [close, setClose] = useState(false);

    return (
        <div className={close ? "min-h-[100vh] w-full -mt-32 relative fixe" : "min-h-[100vh] w-full mt-16 relative fixe"}>
            <div>
                {close ? (title.map((title, index) => (
                    <div key={index} className="border-b-2 border-gray-300 relative overflow-hidden hell h-[8vw] flex items-center justify-between pr-10"
                        >
                        <div className="text-5xl p-4 pl-10 relative z-10 font-bold uppercase">
                            {title}
                        </div>
                        <div className="text-right relative z-10">
                            <h1 className="text-lg uppercase">{desc[index]}</h1>
                            <h5 className="text-sm font-thin text-gray-500 capitalize">{desc2[index]}</h5>
                        </div>
                    </div>
                ))) : (title.map((title, index) => (
                    <div key={index} className='w-[90%] h-[60vh] mr-auto ml-auto mb-8 rounded-t-3xl'>
                        <div className='w-full h-[79%] bg-fuchsia-300 rounded-3xl'>
                            <img src="#" alt="img" className='w-full h-full object-cover' />
                        </div>
                        <div >
                            <h1 className="text-3xl mt-6 font-bold uppercase">{title}</h1>
                            <h1 className="text-md mt-2 uppercase">{desc[index]}</h1>
                            <h5 className="text-sm font-thin text-gray-500 capitalize">{desc2[index]}</h5>
                        </div>

                    </div>
                )))}
            </div>
        </div>
    )
}

export default Page2


const title = ["Shoho nyc", "makers studio hoi", "play new kidvision", "air force 12021", "nyfw popup", "soho 2024"]
const desc = ["arc'teryx", "nike", "nike", "nike", "arc'teryx", "nike", "converse"]
const desc2 = ["enviromental", "experimental", "enviromental", "enviromental", "experimental", "enviromental", "enviromental"]