import { useEffect, useState } from 'react'

export const useResponse = () => {
    const [close, setClose] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setClose(window.innerWidth > 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return { close };
}

