import React from 'react';
import '../components/styles/Home.css';
import '../components/styles/HomeAdaptive.scss'
import '../App.css';
import { Parallax } from 'react-parallax';

import tu from '../img/pere.png';
import bl from '../img/clob.png'
import gr from '../img/gray.png'

import Name from './animate/Name';
import {OneText, TwoText, ThreeText} from '../components/animate/Text'
import {OneCloud, TwoCloud, ThreeCloud, FourCloud} from '../components/animate/Clouds'
import Cloude from "./animate/WeatherCloud";
import Scrollup from './animate/Scrollup';



function Home () {
    return (
        <>
            <Parallax bgImage='img/sky.jpg' strength={1000}>
                <div className='parLayerOne main name'>
                    <Name />
                    <OneCloud />
                    <TwoCloud />
                </div>
            </Parallax>

            <img className='imgTu1' src= {tu}  />
            <img className='imgTu2' src={tu} />
            <img className='imgBl' src={bl} />
          
            <Parallax bgImage='img/sky.jpg' style={{zIndex: 9}} strength={-1200}>
                <div className='parLayerTwo main'>
                    <OneText />
                    <ThreeCloud  />
                    <TwoText />
                    <FourCloud />
                    <ThreeText />
                </div>
            </Parallax>

            <img className='imgGr' src={gr} />

            <Parallax bgImage='img/pole.jpg' strength={350}>
                <div className='parLayerThree main' >
                    <FourCloud />
                    <Cloude />
                </div>
                <div className='main scroll'>
                    <Scrollup /> 
                </div>
            </Parallax>
        </>
    );
};

export default Home;