import React from "react";
import useFirestore from './useFirestore';
import Popup from "./Popup"
import { projectFirestore } from '../firebase/config';

const ImageGrid = () => {
  const { docs } = useFirestore('images');
// console.log('docs',docs);

const deleteImage=(props)=>{
// console.log(props.target.id);
projectFirestore
  .collection("images")
  .doc(props.target.id)
  .delete()
  .then(() => {
    console.log('done');
  })
  .catch((err) => {
   console.log('errr',err);
   
  });
}


const render=docs.map(doc=>{
  // console.log('name',doc.name); 
  // if(doc.name==="rama"){
    return <div key={doc.id}>
     
       <div className="img-wrap">
      <img style={{height:"50px"}}src={doc.url} alt="uploaded pic"/>
    </div>
    <button onClick={deleteImage} id={doc.id} >Delete image</button>
    </div>
    
  // }
})

  return (
    <div >
  <div class="img-grid">
      {render}
      </div>
    </div>
  )
}

export default ImageGrid;