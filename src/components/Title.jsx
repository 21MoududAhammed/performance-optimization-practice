import React from "react";

function Title() {
  console.log("Title is rendering.....");
  return <h1>This is the title of this page.</h1>;
}

export default React.memo(Title);