import React, { useState } from 'react';

const App = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const AddTolist = () => {
    if(item.trim() !== ""){   // ফাঁকা item যেন না যায়
      setList([...list, item]); 
      setItem(""); // add করার পর ইনপুট খালি
    }
  };

  const Remove = (index) => {
    list.splice(index, 1); // শুধু ১ দিতে হবে
    setList([...list]); 
  };

  return (
    <div>
      <table>
        <tbody>
          {
            list.length !== 0 ? (
              list.map((element,index) => {
                return (
                  <tr key={index}>
                    <td>{index+1}. {element}</td>
                    <td>
                      <button onClick={()=>Remove(index)}>
                        Remove
                      </button>
                    </td>
                  </tr>
                )
              })
            ) : (
              <tr>
                <td>No items</td>
              </tr>
            )
          }
        </tbody>
      </table>

      <input 
        value={item} 
        onChange={(e) => setItem(e.target.value)} 
        placeholder="Item" 
      />
      <button onClick={AddTolist}>Add</button>
    </div>
  );
};

export default App;
