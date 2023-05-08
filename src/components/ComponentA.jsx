import React, { useContext } from 'react'
import { counterContext } from './Main';

export default function ComponentA(){
    const countContext=useContext(counterContext);


    return(
        <div>
            <p>Component A</p>
            <div>
      <button type="button" onClick={() => countContext.countDispatch('increment')}>Increment</button>
      <button type="button" onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
    </div>
        </div>
    )
}
