import { useEffect, useState } from "react";



const App = () => {
  let [data,setData]=useState();
  
useEffect(()=>{
( async()=>{
    let responce=await fetch("https://dummyjson.com/products/2")
    let json=await responce.json()
    setData(json)
})()


},[])




  return (
    <div>
      {
        JSON.stringify(data)
      }
    </div>
  );
};

export default App;