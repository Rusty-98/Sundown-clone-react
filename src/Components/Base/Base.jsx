const Base = ({close}) => {

    return (
        <div className={close ? `flex min-h-[650px] ml-10 mr-10 border-b-2 border-gray-500` : `flex flex-col h-[45vh] ml-6 mr-6 border-b-2 border-gray-500`}>
            <div className={close ? `w-2/5 absolute left-0 bottom-[4%] text-left`:`w-[85%] absolute left-0 bottom-[46%] text-left`}>
                <h2 className={close ? `text-[38px] pl-10 font-semibold leading-tight`:`text-[22px] w-full pl-6 pb-3 font-semibold leading-[1]`}>
                    sundown is a multi-disciplinary studio focused on creating unique, end to end experience and eniviroment.
                </h2>
            </div>
            <div className={close ? `w-3/5 absolute right-0 bottom-20 pr-10 font-semibold` : `w-4/5 absolute right-0 top-32 pr-4 font-semibold`}>
                <h1 className={close ? `text-right text-[10vw] leading-[.9] tracking-normal bold uppercase` : 'text-right text-[15vw] leading-[.9] tracking-normal bold uppercase'}>Spaces</h1>
                <h1 className={close ? `text-right text-[10vw] leading-[.9] tracking-normal bold uppercase` : 'text-right text-[15vw] leading-[.9] tracking-normal bold uppercase'}>that</h1>
                <h1 className={close ? `text-right text-[10vw] leading-[.9] tracking-normal bold uppercase` : 'text-right text-[15vw] leading-[.9] tracking-normal bold uppercase'}>inspire</h1>
            </div>
        </div>
    )
}

export default Base