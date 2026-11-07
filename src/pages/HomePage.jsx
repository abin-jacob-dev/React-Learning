import React, { useContext } from 'react'
import Tools from '../components/Tools'
import SimpleList from '../list/SimpleList'
import { MyProvider, MyNewContext } from "./MyContext";


class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            activeState: 'all',
            message: '',
            showLabel: true
        }
    }
    componentDidMount() {
        console.log('ComponentDidMounted')
        fetch('/data.json')
            .then((data) => {
                return data.json()
            }).then((data) => {
                console.log(data)
                this.setState({
                    data: data
                })
            })
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
        if (prevState.message !== this.state.message) {
            this.setState({
                message: 'Message'
            })
        }
    }
    componentWillUnmount() {
        console.log('Component will Unmount')
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
    handleRefresh = () => {
        console.log('Refresh');
        fetch("/data2.json").then((data) => {
            return data.json()
        }).then((data) => {
            this.setState({
                data: data
            })
        })
    }
    handleshowLabel = (e) => {
        this.setState({
            showLabel: e.target.checked
        })
        console.log(e.target.checked);

    }
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
            <div>

                <input checked={this.state.showLabel} onClick={this.handleshowLabel} type="checkbox" />
                <label >Show Label</label>
                <MyNewContext.Provider value={100}>

                    <MyProvider.Provider value={this.state.showLabel}>
                        <Tools labelValue={activeState} onRefresh={this.handleRefresh} onAdd={this.handleAdd} onAction={this.onListChange}>

                            <SimpleList onLabelClick={(this.handleLabelClick)} data={newList} onAction={this.handleDelete} />
                        </Tools>
                    </MyProvider.Provider>
                </MyNewContext.Provider>
            </div>
        )
    }
}

export {
    MyProvider,
    MyNewContext
}

export default HomePage