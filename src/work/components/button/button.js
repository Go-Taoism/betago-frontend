import React, {useEffect, useState} from 'react';
import './button.scss';

const Gobutton = (props) => {
    // const { type } = props
    return (
        <div className = 'Go-button primary'>
            {props.children}
        </div>
    )
}

export default Gobutton