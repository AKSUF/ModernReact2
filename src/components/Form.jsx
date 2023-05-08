import React, { useEffect,useRef } from 'react'

const Form = () => {
const inputRef=useRef(null);

    useEffect(()=>{
inputRef.current.focus();
    },[]);

    return (
        <div>
            <p>
                <input type="text" ref={inputRef} placeholder='enter someting' />
            </p>
        </div>
    )
}

export default Form
