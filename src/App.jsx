import { useRef } from "react";

const App = () => {
  let tamim = useRef();

  const change = () => {
    tamim.current.innerText = "useRef() uses";
  };

  return (
    <div>
      <h1 ref={tamim}></h1>
      <button onClick={change}>Click</button>
    </div>
  );
};

export default App;
