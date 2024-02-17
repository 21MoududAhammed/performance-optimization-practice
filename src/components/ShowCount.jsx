 import React from "react";
 
 function ShowCount({ children }) {
  console.log(`ShowCount ${children} is rendering....`);
  return <h2>{children}</h2>;
}

export default React.memo(ShowCount);
