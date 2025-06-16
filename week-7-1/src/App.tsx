import React, { useContext, useState } from "react";
import { CountContext } from "./context";
// import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
// const Dashboard = React.lazy(() => import("./components/Dashboard"));
// const Landing = React.lazy(() => import("./components/Landing"));

// Context API
function App() {
  const [count, setCount] = useState(0);

  // wrap anyone that wants to use the teleported value inside a provider
  return (
    <div>
      <CountContext.Provider value={count}>
        <Count count={count} setCount={setCount} />
      </CountContext.Provider>
    </div>
  )
}

function Count({setCount}) {
  return <div>
    <CountRenderer />
    <Buttons setCount={setCount} />
  </div>
}

function CountRenderer() {
  const count = useContext(CountContext);

  return <div>
    {count}
  </div>
}

function Buttons({setCount}) {
  const count = useContext(CountContext);
  return <div>
    <button onClick={() => {
      setCount(count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count - 1)
    }}>Decrease</button>
  </div>
}









// // Prop drilling
// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <Count count={count} setCount={setCount} />
//     </div>
//   )
// }

// function Count({count, setCount}) {
//   return <div>
//     {count}
//     <Buttons count={count} setCount={setCount} />
//   </div>
// }

// function Buttons({count, setCount}) {
//   return <div>
//     <button onClick={() => {
//       setCount(count + 1)
//     }}>Increase</button>

//     <button onClick={() => {
//       setCount(count - 1)
//     }}>Decrease</button>
//   </div>
// }







// // Routing
// function App() {

//   // Suspense API
//   return (
//     <div>
//       <BrowserRouter>
//         <Appbar />
//         <Routes>
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/" element={<Landing />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// function Appbar() {
//   const navigate = useNavigate();
//   return <div>
//     <div>
//       <button onClick={() => {
//         navigate("/");
//       }}>Landing page</button>

//       <button onClick={() => {
//         navigate("/dashboard");
//       }}>Dashboard</button>
//     </div>
//   </div>
// }

export default App
