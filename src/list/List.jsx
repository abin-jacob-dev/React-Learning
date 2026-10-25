import React from 'react'
import ListItem from './ListItem'
import Tools from '../components/Tools'
import SimpleList from './SimpleList'


const arr = [
    {
        id: 1,
        title: "Appointment for October",
        descr: "The patient is reschduled to october",
        isActive: false
    }
    , {
        id: 2,
        title: "Appointment for November",
        descr: "The patient is reschduled to November",
        isActive: true
    }
    , {
        id: 3,
        title: "Appointment for December",
        descr: "The patient is reschduled to December",
        isActive: false
    }

]
class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: arr,
            activeState: 'all'
        }
    }
    onListChange = (e) => {
        const value = e.target.value
        this.setState({ activeState: value })


    }
    handleDelete = (item) => {
        console.log('delete clicked', item);
        const newList = this.state.data.filter((element) => element.id !== item.id)
        this.setState({
            data: newList
        })

    }
    handleLabelClick = (arg) => {
        this.setState({
            activeState: arg
        })
    }
    handleAdd = (item) => {
        this.setState((prevState) => ({
            data: [...prevState.data, item]
        }));
    };
    render() {
        const {
            data,
            activeState
        } = this.state
        const newList = data.filter((item) => {
            if (activeState === 'all') {
                return true
            }
            if (activeState === 'active') {
                return item.isActive === true
            }
            if (activeState === 'inactive') {
                return item.isActive === false
            }
            return false
        })
        return (
            <Tools labelValue={activeState} onAdd={this.handleAdd} onAction={this.onListChange}>

                <SimpleList onLabelClick={(this.handleLabelClick)} data={newList} onAction={this.handleDelete} />
            </Tools>
        )
    }
}


export default List