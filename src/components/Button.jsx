import React from "react";

function Button({ children, onCount }) {
  console.log(`Button ${children} is rendering ...`);
  return <button onClick={onCount}>{children}</button>;
}

export default React.memo(Button);
