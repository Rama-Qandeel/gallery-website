import React from 'react';

const Popup = ({selectedImg }) => {



  return (
    <div >
      <img style={{hight:"200px"}}src={selectedImg} alt="enlarged pic"/>
    </div>
  )
}

export default Popup;