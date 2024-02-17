import { useCallback, useState } from "react";
import Button from "./Button";
import ShowCount from "./ShowCount";
import Title from "./Title";

export default function Example1() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const handleCount1 = useCallback(()=> {
    setCount1((count1) => count1 + 1);
  },[])
  const handleCount2 = useCallback(()=> {
    setCount2((count2) => count2 + 5);
  },[])

  return (
    <>
      <Title />
      <ShowCount>{count1}</ShowCount>
      <Button onCount={handleCount1}>Counter 1 </Button>
      <hr />
      <hr />
      <ShowCount>{count2}</ShowCount>
      <Button onCount={handleCount2}>Counter 2 </Button>
    </>
  );
}
