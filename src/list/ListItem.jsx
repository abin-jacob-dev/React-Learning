import { createContext, createElement, StrictMode } from "react";
import Label from "./Label";
import './ListItem.css'

function ListItem({
  title,
  descr,
  isActive,
  onDelete
}) {

  return (
    <div className="list-item">
      <div className="list-title">
        <h4>{title}</h4>
        <label onClick={onDelete} >Delete</label>
      </div>
      <div className="list-descr">{descr}</div>
      <div className="list-label">
        <Label onAction={(() => {
          console.log('Parent Clicked')
        })} isActive={isActive} />

      </div>
    </div>
  );
}
export default ListItem;
