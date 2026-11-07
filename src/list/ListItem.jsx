import { createContext, createElement, StrictMode, useEffect, }from "react";
import Label2 from "./Label2";
import './ListItem.css'

import React from "react";

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
        <Label2 onAction={onLabelClick} isActive={isActive} />

      </div>
    </div>
  );
}
export default ListItem;
