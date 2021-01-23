import React from "react";
import useFirestore from './useFirestore';


const Gallery = () => {
  const { docs } = useFirestore('images');
// console.log('docs',docs);



const render=docs.map(doc=>{
//   console.log('name',doc); 
    return <div key={doc.id}>
       <div className="img-wrap__2">
      <img style={{height:"50px"}}src={doc.url} alt="uploaded pic"/>
    </div>
    </div>

})

  return (
    <div >
  <div class="img-grid__2">
      {render}
      </div>
      <button>more</button>
    </div>
  )
}

export default Gallery;