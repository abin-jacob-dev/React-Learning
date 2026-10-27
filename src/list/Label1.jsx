import React, { useState } from "react";
import './Label.css'
class Label1 extends React.Component {
    render() {
        const props = this.props
        const [showToolTip, setShowToolTip] = useState(false)
        const style = props.isActive ? { background: 'green' } : { background: "orange" }


        handleMouseEnter = () => {
            return showToolTip(true)
        }
        handleMouseLeave = () => {
            return showToolTip(false)
        }

        return (<div>
            <span onClick={() => {
                props.onAction(props.isActive ? 'active' : 'inactive')
            }} style={style} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='label-name'> {props.isActive ? 'Active' : 'Inactive'} </span>
            <label className={showToolTip ? 'show-tooltip' : 'hide-tooltip'}>This is {props.isActive ? 'Active' : 'Inactive'} tooltip</label></div>)
    }
}

export default Label1