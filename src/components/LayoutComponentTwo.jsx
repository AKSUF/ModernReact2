import React, { useEffect, useState } from 'react'
import useWindowWidth from '../hooks/useWindowWidth'
export default function LayoutComponentTwo(){

const onSmallScreen=useWindowWidth();

    return(
        <div className={onSmallScreen?'small':'large'}>
            <h1>this is another component</h1>
        </div>
    )
}
