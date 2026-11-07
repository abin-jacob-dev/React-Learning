import React from 'react'
import { MyProvider, MyNewContext } from "../pages/HomePage";

class Label2 extends React.Component {
    render() {
        const props = this.props
        const style = props.isActive
            ? { background: 'green' }
            : { background: 'orange' };
        return (
            <MyNewContext.Consumer>
                {(val2) => {
                    console.log(val2)
                    return (<MyProvider.Consumer>
                        {
                            (val) => {
                                if (val === false) {
                                    return null
                                }
                                return (
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
                                )
                            }
                        }

                    </MyProvider.Consumer>)
                }}


            </MyNewContext.Consumer>


        )
    }

}
export default Label2