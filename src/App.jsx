import { useState } from 'react';
import './App.css';
import { FaArrowRight } from "react-icons/fa";

const App = () => {

  const [ imgData, setImgData ] = useState(null);
  const [ value, setValue ] = useState('');


  const getMessages = async () => {
    console.log(value, ': value in appjs')
    const options = {
      method: "POST",
      body: JSON.stringify({
        "prompt": value,
        "n": 5,
        "size": "512x512"
      }),
      headers: {
        "Content-Type": "application/json",
      }
    }
    try {
      const response = await fetch('http://localhost:8080/generations', options);
      const data = await response.json();
      console.log(data);
      setImgData(data);
    } catch (error) {
      console.error(error);
    }
  }

  console.log(value);

  return (
    <div className="App flex flex-col p-4 items-center justify-between w-screen h-screen bg-gray-900 relative">
      <header>
        <h1 className='text-4xl text-white font-black m-7'>AI Image Generator</h1>
      </header>
      <section className='image-section w-4/5 flex sm:flex-row flex-col sm:items-center justify-center items-center gap-4 overflow-y-auto '>
        { 
          imgData?.data.map((imageObject, index) => (
            <div key={index} className="image-container w-2/5 rounded-lg overflow-hidden shadow-custom flex justify-center items-center">
              <img src={imageObject.url} alt={`Image ${index}`} />
            </div>
          ))
        }
      </section>
      <section className='input-container w-2/4 flex items-center  justify-center relative bottom-[100px]'>
        <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} className='h-[60px] rounded-md w-full bg-white outline-none border-none px-7 text-lg shadow-black shadow-md'/>
        <div  id='sublit-div' className="absolute bottom-2 right-5 cursor-pointer w-10 h-10  rounded-full flex justify-center items-center transition hover:bg-gray-300" onClick={getMessages}><FaArrowRight /></div> 
      </section>
    </div>
  );
}

export default App;
