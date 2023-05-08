import React, { useEffect, useState } from 'react';

export default function Time() {
  const [date, setDate] = useState(new Date());
const buttonRef=useState();
  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    buttonRef.current = setInterval(tick, 1000);
    //do the cleanup -stop time
    return () => {
      clearInterval(buttonRef);
    };
  }, []);

  return (
    <div>
      <p>Time: {date.toLocaleTimeString()}</p>
      <p>
        <button  type="button" onClick={()=>clearInterval}>Click</button>
      </p>
    </div>
  );
}

