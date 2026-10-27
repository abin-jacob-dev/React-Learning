
import React, { useState, useRef } from 'react';
import './Label.css';

function Label(props) {
    const [showToolTip, setShowToolTip] = useState(false);
    const refObj = useRef()
    // console.log(refObj);


    const style = props.isActive
        ? { background: 'green' }
        : { background: 'orange' };

    const handleMouseEnter = (e) => {
        console.log(refObj.current);
        console.log(e.target)
        const width1 = e.target.getBoundingClientRect().width
        const width2 = refObj.current.getBoundingClientRect().width
        refObj.current.style.left = `${-(width2 - width1) / 2}px`
        setShowToolTip(true);
    };

    const handleMouseLeave = () => {
        setShowToolTip(false);
    };

    return (
        <div
            className="list-label-item-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <span
                onClick={() => {
                    props.onAction(
                        props.isActive ? 'active' : 'inactive'
                    );
                }}
                style={style}
                className="list-label-item"
            >
                {props.isActive ? 'Active' : 'Inactive'}
            </span>

            <label ref={refObj}
                className={`tooltip ${showToolTip ? 'show-tooltip' : 'hide-tooltip'}`}
            >
                This is {props.isActive ? 'Active' : 'Inactive'} tooltip
            </label>
        </div>
    );
}

export default Label;
