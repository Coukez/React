import React from 'react'
import './Teaser.css'
import PropTypes from 'prop-types';



const Teaser = (props) => {
    return (
        <div className='teaser'>
            {props.img && <img src={props.img}></img>}
            <div>{props.title}</div>
            <div>{props.prize}</div>
        </div>
    )
}

Teaser.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    prize: PropTypes.number,

}


export default Teaser