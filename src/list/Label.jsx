import React from "react";
import './Label.css'
class Label extends React.Component {
    render() {
        const props = this.props
        const style = props.isActive ? { background: 'green' } : { background: "orange" }
        return <span onClick={() => {
            props.onAction(props.isActive ? 'active' : 'inactive')
        }} style={style} className='label-name'> {props.isActive ? 'Active' : 'Inactive'} </span>
    }
}

export default Label