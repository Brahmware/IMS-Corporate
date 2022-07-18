import { useRef, useEffect } from 'react';


const useInterval = (callback, delay) => {
    const stableCallback = useRef(callback);
    
    useEffect(() => {
        stableCallback.current = callback;
    }, [callback]);
    
    useEffect(() => {
        
        let isCancelled = false;
        const tick = () => stableCallback.current();
        
        if (typeof delay !== 'number') return;
        
        const t = setInterval(() => {
            if(!isCancelled) tick();
        }, delay);

        return () => {
            clearInterval(t);
            isCancelled = true;
        };
    }, [delay]);
}

export default useInterval;