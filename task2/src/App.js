//import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
function App(){
  const [users,setUsers] = useState();
  const getUsers = async() => {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const data = await response.json();
    setUsers(data.data);

  };
  return (
    <div>
      <header className="navb">
        <h1>Let`s Grow More</h1>
        <div className="btn" onClick={getUsers}>
          Get Users

        </div>

      </header>
      <div className="row">
        {users?.map((current,index)=>{
          return(
            <div className="card column" key={index}>
              <img src={current.avatar} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h3 className="card-title">{current.first_name} {current.last_name}</h3>
                <h4 className="card-text">{current.email}</h4>
              </div>
            </div>
          );
        })}
      </div>
      
    </div>
  );
};

export default App;