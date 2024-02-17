import { useCallback, useMemo, useState } from "react";
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

  // useMemo memoize a function's return value until its component doesn't change. It compares between old return and new return in every render.
  const isEven = useMemo(()=>{
    let i = 0;
    while(i < 300000000){
        i += 1;
    }
    if(count1 % 2 === 0){
        return true;
    }
  },[count1])

  return (
    <>
      <Title />
      <ShowCount>{count1}</ShowCount>
      <h2>{isEven ? 'Even' : 'Odd'}</h2>
      <Button onCount={handleCount1}>Counter 1 </Button>
      <hr />
      <hr />
      <ShowCount>{count2}</ShowCount>
      <Button onCount={handleCount2}>Counter 2 </Button>
    </>
  );
}
