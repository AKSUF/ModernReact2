import React from "react";
function Title({count,title}){
    console.log(`rendering ${title}`)

    return(
       <h2>useCallback hook Tutorial</h2>
    )
}
export default React.memo(Title);