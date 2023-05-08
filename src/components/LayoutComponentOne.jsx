import React, { useEffect, useState } from 'react'
export default function LayoutComponentOne(){
    const[onSmallScreen,setOnSmallScreen]=useState(false);

const checkScreenSize=()=>{
    setOnSmallScreen(window.innerWidth<768);
}

useEffect(()=>{
checkScreenSize();
window.addEventListener("resize",checkScreenSize);
return()=>window.removeEventListener("resize",checkScreenSize);
},[])

    return(
        <div className={onSmallScreen?'small':'large'}>
            <h1>this</h1>
        </div>
    )
}
