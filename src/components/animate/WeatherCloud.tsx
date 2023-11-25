import React from "react";
import { motion, useAnimation} from 'framer-motion'
import { useInView } from "react-intersection-observer";

import cloude from '../../img/cloude.png'
import '../styles/Home.css'



const WeatherCloud = () =>{
    const cloud = useAnimation();
    const [ref, inView] = useInView();

    React.useEffect(() => {
        if (inView) {
            cloud.start({ opacity: 1, y: 0});
        } else {
            cloud.start({ opacity: 0, y: 0});
        }
    }, [cloud, inView]);

    return(
        <>
        <motion.div
            ref={ref}
            initial={{opacity: 0, y: 0}}
            animate={cloud}
            transition={{duration: 3.3}}
        >
            <a className="main handle" href="/weather"> 
                <div className="textOverlay">
                    Проверим погоду?
                </div>
                <img className="aWeather " src={cloude}  />
            </a>
        </motion.div>
        </>
    )

}

export default WeatherCloud;