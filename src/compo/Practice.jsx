import React, {useState} from "react";  

 export default function Practice(){
    const [urls, setUrls] = useState([
        //Put in objet because in switch case comparing ID not URLs//
        {id:1, url:'https://dummyjson.com/carts'},    
        {id:2, url:'https://dummyjson.com/products'},    
        {id:3, url:'https://dummyjson.com/posts'},
        {id:4, url:'https://dummyjson.com/users'},

    ])
    const [choice, setChoice] = useState(0)
    // making new use state for store the data //
     const [data, setData] = useState([])    
    //  make new array //
    const [myData, setMyData] = useState([])  

    const callFetch = ()=>{
        // making new variable for easy wa
        let a = urls[choice]
        let url = a.url
        let id = a.id
      //Now make switch case for diffrent diffrent API's key shown //
      switch(id){
        case 1: 
        fetch(url).then(response=>response.json()).then((data)=>{
        //    making new array for rounded in loop //
        let temp = []
         data = data.carts
        data.forEach(function(item){
            temp.push({id:item.id, carts:item.title})
        })
       setMyData(temp)
        // now save the temp data into MyData using function setMyData//
        })
        break;
        case 2:
            fetch(url).then(response=>response.json()).then((data)=>{
                //    making new array for rounded in loop //
                let temp = []
                 data = data.products   
                data.forEach(function(item){
                    temp.push({id:item.id, name:item.title})
                })
               setMyData(temp)
                // now save the temp data into MyData using function setMyData//
                })
            break;
            case 3:
                fetch(url).then(response=>response.json()).then((data)=>{
                    //    making new array for rounded in loop //
                    let temp = []
                     data = data.posts
                    data.forEach(function(item){
                        temp.push({id:item.id, name:item.title})
                    })
                   setMyData(temp)
                    // now save the temp data into MyData using function setMyData//
                    })
                    break;
                    case 4: 
                    fetch(url).then(response=>response.json()).then((data)=>{
                        //    making new array for rounded in loop //
                        let temp = []
                         data = data.users
                        data.forEach(function(item){
                            temp.push({id:item.id, name:item.firstName})
                        })
                       setMyData(temp)
                        // now save the temp data into MyData using function setMyData//
                        })
                        break;
      }
      console.log(myData)
    }
    return(
     <div className="container">
      <div className="border mt-4 rounded p-4">
        <h2>Test API</h2>
        <div style = {{width:300}}>
            <select className="form-control form-select" onChange={(e)=>{setChoice(e.target.value)}}>     
            <option value={""}>Select API</option>         
             {urls.map((item,index)=>{                      // Using map function for loop and take index //
                return <option key={item.id} value={index}>{item.url}</option> // put in key id //
             })}
            </select>
        </div>
        <button className="btn btn-primary mt-4" onClick={callFetch}>Fetch</button>
        <hr></hr>
        <ul style={{listStyle:"none"}}>
            {(myData.length!=0)?myData.map((item,index)=>{
                return <li key={index}>
                      <div>{item.id}</div>
                      <div>{item.name}</div>
                </li>
            }):""}
        </ul>
      </div>
     </div>
    )
}