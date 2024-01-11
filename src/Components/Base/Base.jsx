const Base = () => {
    return (
        <div className='flex min-h-[650px] ml-10 mr-10 border-b-2 border-gray-500'>
            <div className='w-2/5 absolute left-0 bottom-[4%] text-left'>
                <h2 className="text-[38px] pl-10 font-semibold leading-tight">
                    sundown is a multi-disciplinary studio focused on creating unique, end to end experience and eniviroment.
                </h2>
            </div>
            <div className='w-3/5 absolute right-0 bottom-20 pr-10 font-semibold'>
                <h1 className='text-right text-[10vw] leading-[.9] tracking-normal bold uppercase'>Spaces</h1>
                <h1 className='text-right text-[10vw] leading-[.9] tracking-normal bold uppercase'>that</h1>
                <h1 className='text-right text-[10vw] leading-[.9] tracking-normal bold uppercase'>inspire</h1>
            </div>
        </div>
    )
}

export default Base