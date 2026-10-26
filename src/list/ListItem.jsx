import { createContext, createElement, StrictMode, useEffect } from "react";
import Label from "./Label";
import './ListItem.css'

function ListItem({
  title,
  descr,
  isActive,
  onDelete,
  onLabelClick
}) {
  useEffect(()=>{
    console.log('Title : ',title);
    
  })
  return (
    <div className="list-item">
      <div className="list-title">
        <h4>{title}</h4>
        <label onClick={onDelete} >Delete</label>
      </div>
      <div className="list-descr">{descr}</div>
      <div className="list-label">
        <Label onAction={onLabelClick} isActive={isActive} />

      </div>
    </div>
  );
}
export default ListItem;
