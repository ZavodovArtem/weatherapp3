import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import React from 'react';


const Name = () => {
    const nameApp = useAnimation();
    const [ref, inView] = useInView();

    React.useEffect(() => {
        if (inView) {
            nameApp.start({opacity: 1, y: 0})
        }else{
            nameApp.start({opacity: 0, y: 50})
        }
    }, [nameApp, inView])
       
    return(
        <>
            <motion.h1 
            ref={ref}
            initial = {{opacity: 0, y: 50}}
            animate = {nameApp}
            transition  = {{duration: 1.2}}
            >
                Приложение погоды
            </motion.h1>
        </>
    )
}

export default Name