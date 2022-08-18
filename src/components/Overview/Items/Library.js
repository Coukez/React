import React from 'react'
import { useState } from 'react'
import Teaser from '../../Teaser/Teaser'
import Cover from './../../../bilder/Cover.png'
import WhatEverTheySay from './WhatEverTheySay'
import ComingSoon from './ComingSoon'
import PropTypes from 'prop-types';


function Library(props) {
    const [activetab, setactivetab] = useState(0)
    return (


        <div className="overview-items">
            <Teaser title='Whatever They Say' img={Cover} alt='Cover' onClick={props.onClick}prize= {0}></Teaser>
            <Teaser title='coming soon' img={Cover} onClick={() => setactivetab(2)}prize= {0}></Teaser>
        </div>
    )
}

Library.propTypes = {
    onClick: PropTypes.func,
    }

export default Library
