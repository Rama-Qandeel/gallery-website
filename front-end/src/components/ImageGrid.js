import React from "react";
import useFirestore from './useFirestore';

const ImageGrid = () => {
  const { docs } = useFirestore('images');
// console.log('docs',docs);

const render=docs.map(doc=>{
  // console.log('name',doc.name); 
  // if(doc.name==="rama"){
    return <div  key={doc.id}      
    layout
      whileHover={{ opacity: 1 }}s
    >
      <img style={{height:"50px"}}src={doc.url} alt="uploaded pic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      />
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