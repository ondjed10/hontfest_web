import React, { useState } from "react";

const Hamburger = () => {

    const [toggle, setToggle] = useState(false)

    const toggleState = () => {
        setToggle(!toggle)
    }

    return (
        <div class={toggle ? "change container" : "container"} onClick={() => toggleState()}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
    )
}

export default Hamburger