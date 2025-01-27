import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [selectedInput , setSelectedInput] = useState('');
  const [currentInputData, setCurrentInputData] = useState({});

  const [data, setData] = useState([])

  const handleAddContent = (e) =>{
    console.log("currentContent", currentInputData);
    const t = [...data, currentInputData];
    console.log("t", t);
    setData(t);
    setCurrentInputData({});
    setSelectedInput('');
  }

  const handleEdit = (e, type, index)=>{
    console.log(e.target.value);
    const newData = data.map((ele, ind) => {

           const element = {...ele, content : e.target.value};
           if(ind == index)
            return element;
           else
           return ele;
    })
    setData(newData);
  }


  const handleCurrentInput = (e, type) => {
    console.log(e.target.value);
    const t = {type : type , content : e.target.value};
    console.log(t);
    setCurrentInputData(t);
  }

  return (
    <>
      <h1>App</h1>

      <div>
      <button onClick={(e) => setSelectedInput("text")}>Add Text</button>
      <button onClick={(e) => setSelectedInput("image")} >Add Image</button>

      <button  onClick = {(e) => handleAddContent(e)}>Add to Content</button>
      </div>

      <div>
        { selectedInput === "text"  &&

           <input type="text" onChange = { (e)  => handleCurrentInput(e, "text") } value = {currentInputData?.value} placeholder="Enter Text" /> 
           }
        { selectedInput === "image"  && <input type="file" />}

        <div>
          {data.map((el, index) => {
              
              {
                  if(el.type == "text")
                  {
                      return  <input type="text"  key = {index} onChange = { (e) => handleEdit(e, "text", index)} value = {el.content} placeholder="Enter Text" /> 
                  }
                  else
                  {
                  return <image></image>
                  }
              }
          })}
        
        </div>

      </div>


    </>
  )
}

export default App
