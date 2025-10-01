// Preventing Default Behavior

import  Hero from "./component/Hero"
const App = () => {
function demo(e){
  e.preventDefault();
  alert(" form submit notificaton");
}
 
  return (
    <div>
       <form onClick={demo}>
        <input type=" name" placeholder="Name"></input>   
        <button> Submit</button>   
 
       </form>
      
    </div>
  );
};

export default App;