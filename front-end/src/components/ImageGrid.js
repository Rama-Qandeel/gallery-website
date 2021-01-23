import React from "react";
import useFirestore from './useFirestore';
import Popup from "./Popup"
import { projectFirestore } from '../firebase/config';


const ImageGrid = ({setSelectedImg}) => {
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
   <div className="btn__img">
    <button className="btn__img-delete icon-basic-trashcan-full u-margin-right-small" onClick={deleteImage} id={doc.id} >
</button>
<button className="btn__img-big" onClick={() => setSelectedImg(doc.url)}>
+
</button>
    </div>
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