import React from "react";


function Gallery(props) {
    const {value=[]} = props
    return (
      <ul>
          
        {value.map((e,i)=>{
          return (
            <li key={i}><img {...e} alt="" loading="lazy" /></li>
          )
        })}

        <li></li>
      </ul>
    )
  }

  export default Gallery;