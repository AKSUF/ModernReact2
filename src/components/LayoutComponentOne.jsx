import React, { useEffect, useState } from 'react'
import useWindowWidth from '../hooks/useWindowWidth';
export default function LayoutComponentOne(){

    const onSmallScreen=useWindowWidth(600);
    return(
        <div className={onSmallScreen?'small':'large'}>
            <h1>this</h1>
        </div>
    )
}
