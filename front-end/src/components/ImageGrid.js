import React from "react";
import useFirestore from './useFirestore';
import Popup from "./Popup"

const ImageGrid = () => {
  const { docs } = useFirestore('images');
// console.log('docs',docs);

const render=docs.map(doc=>{
  // console.log('name',doc.name); 
  // if(doc.name==="rama"){
    return <div key={doc.id}>
      <img style={{height:"50px"}}src={doc.url} alt="uploaded pic"/>
      <button>Delete image</button>
    </div>
  // }
})


  return (
    <div >
      {render}
    </div>
  )
}

export default ImageGrid;