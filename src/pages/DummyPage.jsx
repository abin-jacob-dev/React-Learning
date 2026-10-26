import React from 'react'
class DummyPage extends React.Component {
    componentDidMount() {
        console.log('Component Did Mount', this.props.name);
    }
    componentDidUpdate() {
        console.log('Compoenent Did Update', this.props.name);
    }
    componentWillUnmount() {
        console.log("Component will unmount", this.props.name);

    }
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
}
export default DummyPage