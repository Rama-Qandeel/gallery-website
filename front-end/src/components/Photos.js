import React,{useState} from "react";
import useFirestore from './useFirestore';


const Photos = ({setSelectedImg}) => {
  const { docs } = useFirestore('images');

const render=docs.map(doc=>{
    return <div key={doc.id}>  
       <div className="img-wrap__3 ">
      <img  style={{height:"50px"}}src={doc.url} alt="uploaded pic"/>
    </div>
    <div className="btn__img">
<button className="btn__img-big" onClick={() => setSelectedImg(doc.url)}>
+ 
</button>
</div>
    </div>
})

  return (
    <div >
      <h1 className="heading-primary u-center-text u-margin-top-small">Our Gallery</h1>
  <div class="img-grid__3">
      {render}
      </div>
    </div>
  )
}

export default Photos;