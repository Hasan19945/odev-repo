import BirinciComponents from "./Components/BirinciComponents";
import Deneme from "./Components/Deneme";

function App() {

const deneme = "props mantigi";
const arr =[
  {name:'array1', id:0},
  {name:'array2', id:1},
  {name:'array3', id:2}
]
 console.log(arr, "arr");
const tiklama = () => {
  console.log("butona tikla")

   }

  return (
    <div className="App">
      <div>deneme</div>
      <div>yeni bir {deneme}</div>
      <BirinciComponents props={deneme}/>
      <Deneme/>
      <button onClick={tiklama}>tikla</button>

   {
    arr.map((a) => (
      <div key={a.id}>{a.name}</div>
    ))

   }
     

    
    </div>
  );
}

export default App;
