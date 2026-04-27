// import React, { useEffect, useState } from 'react'

// const App = () => {
//   let[count, setCount] = useState(0)
//   // console.log('component mounted')
//   alert('component mounted')
//   useEffect(() => {
//     console.log('effect ran')
//   },[count])
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//     </div>
//   )
// }

// export default App


// import React, { useEffect, useState } from 'react'

// const App = () => {
//   let [count, setCount] = useState(0);
//   useEffect(() => {
//     let fetchUsers = async () => {
//       try{
//         let res = await fetch('https://jsonplaceholder.typicode.com/users');
//         let data = await res.json();
//         console.log(data);
//       }catch(err){
//         console.log(err);
//       }}
//     fetchUsers();
//   },[count])
//   return (
//     <div>
//       <h2>{count}</h2>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//     </div>
//   )
// }

// export default App


// import React, { useEffect, useState } from 'react'

// const App = () => {
//   let[count,setCount]=useState(0);
//   let[data,setData]=useState([]);
//   useEffect(() => {
//     let fetchUsers = async () => {
//       try{
//         let res = await fetch('https://jsonplaceholder.typicode.com/users');
//         let data = await res.json();
//         setData(data);
//       }catch(err){
//         console.log(err);
//       }
//     };
//     fetchUsers();
//   }, [count]);

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//       {data.map((user) => (
//         <ul key={user.id}>
//           <li>Name: {user.name}</li>
//         </ul>
//       ))}

//     </div>
//   )
// }

// export default App

//! Cleanup function in useEffect

// import React, { useState } from 'react'
// import Child from './Child.jsx'

// const App = () => {
//   let [show,setShow]=useState(true);
//   return (
//     <div>
//       <button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'} Child</button>
//       {show && <Child />}
//     </div>
//   )
// }

// export default App


// ! Axios
// import axios from 'axios';
// import React, { useEffect, useState } from 'react'

// const App = () => {
//     let [user,setUser]=useState([]);
//     useEffect(() => {
//         axios.get('https://jsonplaceholder.typicode.com/users')
//             .then((res) => {
//                 setUser(res.data);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }, []);

//     return (
//         <div>
//             {user.map((u) => (
//                 <p key={u.id}>{u.name}</p>
//             ))}
//         </div>
//     )
// }

// export default App


// !   with async/await
import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react'

const App = () => {
    let[user,setUser]=useState([]);
    useEffect(()=>{
        let fetchData = async () => {
            try{
                let res=await axios.get('https://jsonplaceholder.typicode.com/users')
                setUser(res.data)
            }catch(err){
                console.log(err);
            }
        };
        fetchData();
    });
    
  return (
    <div>
      {
        user.map((u) => (
            <p key={u.id}>{u.name}</p>
        ))  
      }
    </div>
  )
}

export default App
