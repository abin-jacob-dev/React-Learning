import React from 'react'
import { MyProvider, MyNewContext } from "../pages/MyContext";

class Label2 extends React.Component {
    render() {
        const props = this.props
        const style = props.isActive
            ? { background: 'green' }
            : { background: 'orange' };
        console.log(this.context);
        return (

            < MyProvider.Consumer >
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

            </MyProvider.Consumer>



        )
    }

}
Label2.contextType = MyNewContext
export default Label2