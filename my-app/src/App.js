import  { useState } from'react';

function Form() {
  const [isim, setIsim] = useState('Tom');
  const [yas, setYas] = useState(48);


  return(
    <>
    <input value={isim}
    onChange={(e) => setIsim(e.target.value)}
    />
    
<button onClick={() => setYas (yas+1)}>
  yasi arttir
</button>
    <p>Hi {isim}  You are {yas} years old</p>
    </>
  )
}



export default Form