import React, { useEffect } from 'react'
import { useState } from 'react';

export const PageCell = ({num,sel,onHandleClick}) => {
    
    const [selectedPage, setselectedPage] = useState(sel)
    useEffect(() => {
     setselectedPage(sel);
    }, [sel])
    
     if(num+1===selectedPage)
     {
       return (
         <div>
           <button
             style={{
               border: "1px solid rgb(0,255,255)",
               backgroundColor: "white",
               borderRadius: "5px",
               padding:"10px"
             }}
           >
             {num + 1}
           </button>
         </div>
       );
     }
  return (
    <div>
      <button
        onClick={() => {
          onHandleClick(num + 1);
        }}
        style={{
          backgroundColor: "white",
          border: "1px solid rgb(0, 0, 0)",
          borderRadius: "5px",
          padding:"10px"
        }}
      >
        {num + 1}
      </button>
    </div>
  );
}
