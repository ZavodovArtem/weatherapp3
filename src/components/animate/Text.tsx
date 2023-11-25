import React from "react";
import {motion, useAnimation} from 'framer-motion'
import { useInView } from "react-intersection-observer";

import '../styles/Home.css'

export const OneText = () => {
    const oneT = useAnimation();
    const [ref, inView] = useInView();

    React.useEffect(() => {
        if (inView) {
            oneT.start({opacity: 1, y: 0});
        }else{
            oneT.start({opacity: 0, y: 50});
        }
    }, [oneT, inView]);

    return(
        <>
            <motion.p
                ref={ref}
                initial= {{opacity: 0, y: 50}}
                animate= {oneT}
                transition={{duration: 0.4}}
                className="oneText">
                Прогноз погоды — научно обоснованное предположение о том, 
                какая погода будет в определенное время в определенном месте. 
                Наука о погоде и методах ее предсказания называется синоптической метеорологией. 
                Она является частью метеорологии — науки, 
                изучающей атмосферу Земли и происходящих в ней явлениях.
            </motion.p>
        </>
    )
}

export const TwoText = () => {
    const twoT = useAnimation();
    const [ref, inView] = useInView();

    React.useEffect(() => {
        if (inView) {
            twoT.start({opacity: 1, y: 0});
        }else{
            twoT.start({opacity: 0, y: 50});
        }
    }, [twoT, inView]);

    return(
        <>
            <motion.p
                ref={ref}
                initial= {{opacity: 0, y: 50}}
                animate= {twoT}
                transition={{duration: 0.4}}
                className="twoText">
                
                Чтобы предсказать погоду, нужно знать «текущие условия» — то есть то, 
                какая она сейчас. К основным параметрам относятся: 
                температура, атмосферное давление, влажность, скорость и направление ветра,
                осадки и их количество.

                Современный прогноз погоды основывается в первую очередь на данных спутников, 
                а метеостанции, зонды и радары корректируют и непрерывно дополняют их. 
                Вместе все эти источники создают полноценную картину происходящего в атмосфере.
            </motion.p>
        </>
    )
}


export const ThreeText = () => {
    const threeT = useAnimation();
    const [ref, inView] = useInView();

    React.useEffect(() => {
        if (inView) {
            threeT.start({opacity: 1, y: 0});
        }else{
            threeT.start({opacity: 0, y: 50});
        }
    }, [threeT, inView]);

    return(
        <>
            <motion.p
                ref={ref}
                initial= {{opacity: 0, y: 50}}
                animate= {threeT}
                transition={{duration: 0.4}}
                className="threeText">
                
                Прогнозирование погоды работает с помощью метеорологов, собирающих как можно больше данных 
                о текущей погоде и о том, что происходит в атмосфере. 
                Они используют различные аспекты погоды,такие как влажность, 
                температура и направление ветра, чтобы делать прогнозы.

                Иногда предсказать погоду непросто, и только потому, что кто-то говорит, 
                что погода будет той или иной, это всего лишь предположение. 
                Несмотря на то, что метеорологи изучают погоду и узнают, на что обращать внимание,
                погода может измениться в считанные минуты, и это может привести 
                к неправильному прогнозированию.
            </motion.p>
        </>
    )
}