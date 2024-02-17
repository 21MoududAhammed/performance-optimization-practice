# Performance Optimization in React.js

### React.memo(): It memoizes a functional component and its props. Doing so helps to prevent unnecessary re-rendering that originate from the re-renderings of the component's parent / ancestors.

```js
import React form 'react';
function Title(){
    return(
        <h1>This is Title of this Page.</h1>
    )
}
export default React.memo(Title)

```

### useCallback(): It is cashed a callback function and doesn't get redefined on every render.

```js
const handleCount1 = () => {
  setCount1((prevCount) => prevCount + 1);
};
// after using useCallback
const handleCount1 = useCallback(() => {
  setCount1((prevCount) => prevCount + 1);
}, []);
// When the dependency changes, it will forget the callBack or redefined again.
```

### useMemo(): It is a hook that lets you cache result of a calculation between re-renders.

```js
//whereas count1 is a value of a state
const isEven = useMemo(() => {
  let i = 0;
  while (i < 300000000) {
    i += 1;
  }
  if (count1 % 2 === 0) {
    return true;
  }
}, [count1]);
```
