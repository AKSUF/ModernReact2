import { useState,useCallback,useMemo } from "react"
import React from 'react';
import Title from "./Title";
import ShowCount from "./ShowCount";
import { Button } from 'react-bootstrap';

function Buttonhock(){
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const incrementByOne =useCallback(() => {
        setCount1(prevCount => prevCount + 1);
    },[]);

    const incrementByFive =useCallback(() => {
        setCount2(prevCount => prevCount + 5);
    },[]);

    const isEvenOrAdd=useMemo(()=>{
        return count1%2===0;
    },[count1]);





    return (
        <div className="app">
            <h1>Hello</h1>
            <Title />
            <ShowCount count={count1} title="Counter 1" />
            <span>{isEvenOrAdd ? 'Even' : 'Odd'}</span>
            <Button onClick={incrementByOne}>Increment By One</Button>
            <hr />
            <ShowCount count={count2} title="Counter 2" />
            <Button onClick={incrementByFive}>Increment By Five</Button>
        </div>
    );
}

export default Buttonhock;
