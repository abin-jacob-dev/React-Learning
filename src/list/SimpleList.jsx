import react from 'react'
import ListItem from './ListItem'


function SimpleList(props) {
    const { data, onAction, onLabelClick } = props
    return (
        <div className="app-list">
            {
                data.map((obj) => {
                    return (<ListItem onLabelClick={onLabelClick} key={obj.title} onDelete={() => {
                        onAction(obj)
                    }} title={obj.title} descr={obj.descr} isActive={obj.isActive} />)
                })
            }
        </div>)
}
export default SimpleList