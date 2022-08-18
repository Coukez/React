import React from 'react'
import { useState } from 'react';
import PropTypes from 'prop-types';


const PopUp = (props) => {
    const [open, setOpen] = useState(false)
    console.log(open && "showPopUp");
    console.log(!open && "hidePopUp");
    console.log('PopUp', props.children)
    return (
        <div>
            <p className="textnorm" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
                {props.children}
            </p>
            {open && <div className="pop-up textnorm">16 Jahre</div>}





        </div>
    )
}

PopUp.propTypes = {
    children: PropTypes.any,
    }

export default PopUp
