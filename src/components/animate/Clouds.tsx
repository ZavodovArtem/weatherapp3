import React from "react";
import {motion, useAnimation} from 'framer-motion'
import { useInView } from "react-intersection-observer";

import bl from '../../img/bl.png'
import '../styles/Home.css'
import pere from '../../img/pere.png'
import ttuch from '../../img/ttuch.png'
import tucch from '../../img/tucch.png'



export const OneCloud = () => {
    const one = useAnimation();
    const [ref, inView] = useInView();

    React.useEffect(() => {
        if (inView) {
            one.start({opacity: 1, y: 0});
        }else{
            one.start({opacity: 0, y: 50});
        }
    }, [one, inView]);

    return(
        <>
            <motion.img 
                ref={ref}
                initial= {{opacity: 0, y: 50}}
                animate= {one}
                transition={{duration: 2.4}}
                // custom={2}
            src={bl}  className="oneCloud"/>
        </>
    )
}



export const TwoCloud = () => {
    const two = useAnimation();
    const [ref, inView] = useInView();

    React.useEffect(() => {
        if (inView) {
            two.start({opacity: 1, y: 0});
        }else{
            two.start({opacity: 0, y: 50});
        }
    }, [two, inView]);

    return(
        <>
            <motion.img 
                ref={ref}
                initial= {{opacity: 0, y: 250}}
                animate= {two}
                transition={{duration: 6}}
                // custom={1}
            src={pere}  className="twoCloud"/>
        </>
    )
}


export const ThreeCloud = () => {
    const three = useAnimation();
    const [ref, inView] = useInView();

    React.useEffect(() => {
        if (inView) {
            three.start({opacity: 1, y: 0});
        }else{
            three.start({opacity: 0, y: 50});
        }
    }, [three, inView]);

    return(
        <>
            <motion.img 
                ref={ref}
                initial= {{opacity: 0, y: 250}}
                animate= {three}
                transition={{duration: 2}}
                // custom={1}
            src={ttuch}  className="threeCloud"/>
        </>
    )
}


export const FourCloud = () => {
    const four = useAnimation();
    const [ref, inView] = useInView();

    React.useEffect(() => {
        if (inView) {
            four.start({opacity: 1, y: 0});
        }else{
            four.start({opacity: 0, y: 50});
        }
    }, [four, inView]);

    return(
        <>
            <motion.img 
                ref={ref}
                initial= {{opacity: 0, y: 250}}
                animate= {four}
                transition={{duration: 4}}
                // custom={1}
            src={tucch}  className="fourCloud"/>
        </>
    )
}
