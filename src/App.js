import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";



function App() {
  const [urls, setURLs] = useState([
   {id:1,url:"https://dummyjson.com/users"},
   {id:2,url:"https://dummyjson.com/recipes"}
   ,{id:3,url: "https://dummyjson.com/todos"}
  ])
  const [choice, setChoice] = useState(0)
  const [data ,setData] = useState([])
  const [myData, setmyData] = useState([])
  const callFetch=()=>{
    let a = urls[choice]
    let url = a.url
    let id = a.id
    switch(id){
      case 1: 
      fetch(url).then(response=>response.json().then((data)=>{
        let temp = []
         data = data.users
        data.forEach(function(item){
          temp.push({id: item.id, name:item.firstName})
        })
        setmyData(temp)
      }))
      break;
      case 2: 
      fetch(url).then(response=>response.json().then((data)=>{
        let temp = []
         data = data.recipes
        data.forEach(function(item){
          temp.push({id: item.id, name:item.name})
        })
        setmyData(temp)
      }))
      break;
      case 3:
        fetch(url).then(response=>response.json().then((data)=>{
          let temp = []
           data = data.todos
          data.forEach(function(item){
            temp.push({id: item.id, name:item.todo})
          })
          setmyData(temp)
    }))
       break;
  }
  console.log(myData)
  }
  return (
    <>
     {/* <Form /> */}
   {/*<Nav/>*/}
   <div className="App">
    <div className="container">
      <div className="border mt-4 rounded">
        <h2>Test API</h2>
        <div style={{width:400}}>
          <select className="form-control form-select" onChange={(e)=>{setChoice(e.target.value)}}>
            <option value={''}>Select API</option>
            {/* using map function */}
            {urls.map((item,index)=>{
              return <option key={item.id} value={index}>{item.url}</option>
            })}
          </select>
          <button className="btn btn-primary mt-4" onClick={callFetch}>Fetch</button>
          <hr></hr>
          <ul style={{listStyle:'none' }} className="list-gurop">
            {(myData.length!=0)?myData.map((item,index)=>{
             return <li key={index} className="list-gurop-item">
                <div>{item.id}</div>
                <div>{item.name}</div>
             </li>
            }): ""}
          </ul>
        </div>
      </div>
    </div>
   </div>
    </>
  );
}

export default App;
