import { useState } from 'react';

 function MyInput() {
  const [text, setText] = useState('hei');

  function handleChange(e) { setText(e.target.value)
  }

  return (
    <>
      <input type='text' value={text} onChange={handleChange} />
      <p> Yazilan metin {text}</p>
     <button onClick={() => setText('Merhaba')}> Sifirla</button>
    
    </>
  );
}




export default MyInput