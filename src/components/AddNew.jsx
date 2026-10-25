
import React from 'react'
import './AddNew.css'


class AddNew extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'titleInput': '',
            'descrInput': "",
            'isActive': false
        }
    }
    handleChange = (e) => {
        const value = e.target.value
        this.setState({
            titleInput: value
        })
    }
    handleDescr = (e) => {
        const value = e.target.value
        this.setState({
            descrInput: value
        })
    }
    handleIsActive = (e) => {
        const value = e.target.checked
        this.setState({
            isActive: value
        })
    }
    handleClick = (e) => {
        console.log(this.state)
        const {
            titleInput,
            descrInput,
            isActive
        } = this.state
        if (titleInput) {
            this.props.onAdd({
                id: Math.floor(Math.random() * 100) / 10,
                title: titleInput,
                descr: descrInput,
                isActive: isActive
            })
            this.setState({
                'titleInput': '',
                'descrInput': "",
                'isActive': false
            })
        }

    }
    render() {
        return (
            <div className='add-new'>
                <label >Title : </label>
                <input value={this.state.titleInput} onChange={this.handleChange} />
                <label >Description : </label>
                <input value={this.state.descrInput} onChange={this.handleDescr} />
                <label >checkbox : </label>
                <input type="checkbox" checked={this.state.isActive} onChange={this.handleIsActive} />
                <button onClick={this.handleClick}>Add Item</button>
            </div>
        )
    }
}
export default AddNew