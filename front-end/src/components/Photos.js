import React from "react";
import useFirestore from './useFirestore';
import Popup from "./Popup"
import { projectFirestore } from '../firebase/config';


const Photos = () => {
  const { docs } = useFirestore('images');



const render=docs.map(doc=>{
    return <div key={doc.id}>  
       <div className="img-wrap">
      <img style={{height:"50px"}}src={doc.url} alt="uploaded pic"/>
    </div>
    </div>

})

  return (
    <div >
  <div class="img-grid">
      {render}
      </div>
    </div>
  )
}

export default Photos;