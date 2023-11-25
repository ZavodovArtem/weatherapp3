import React from "react";

import '../styles/Home.css'


function Scrollup () {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return(
        <p className="scrollup" onClick={scrollToTop}>
            Наверх
        </p>
    )
}

export default Scrollup