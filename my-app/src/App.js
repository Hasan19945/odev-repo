import  { useState } from'react';

function Form() {
  const [isim, setIsim] = useState('Tom');
  const [yas, setYas] = useState(48);


  return(
    <>
    <div>
    <input value={isim}
    onChange={(e) => setIsim(e.target.value)}
    />
 </div>   
<button onClick={() => setYas (yas+3) }>
  yasi 3 arttir
</button>

<button onClick={() => setYas (yas+1) }>
  yasi 1  arttir
</button>
    <p>Hi {isim}  You are {yas} years old</p>
    </>
  )
}



export default Form