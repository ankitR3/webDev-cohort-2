import { useEffect, useState } from 'react'
import { useIsOnline } from './hooks/useIsOnline';
import { useTodos } from './hooks/useTodos';
import { useMousePointer } from './hooks/useMousePointer';
import { useInterval } from './hooks/useInterval';
import { useDebounce } from './hooks/useDebounce';


function App() {
  const [value, setValue] = useState("");
  const debounceValue = useDebounce(value, 500);

  return (
    <>
      Debounced value is {debounceValue}
      <input type="text" onChange={e => setValue(e.target.value)} />
    </>
  )
}















// function App() {
//   const [count, setCount] = useState(0);

//   useInterval(() => {
//     setCount(c => c + 1);
//   }, 1000)

//   return (
//     <>
//       Timer is at {count}
//     </>
//   )
// }











// function App() {
//   const mousePointer = useMousePointer();

//   return (
//     <>
//       Your mouse position is {mousePointer.x} {mousePointer.y}
//     </>
//   )
// }










// function App() {
//   const isOnline = useIsOnline();

//   if (isOnline) {
//     return "You are online yay!"
//   } else {
//     return "You are offline, please connect to the internet"
//   }
// }











// function App() {
//   const {todos, loading} = useTodos(5);

//   return (
//     <>
//       {loading ? "loading..." : todos.map(todo => <Track todo={todo} />)}
//     </>
//   )
// }

// function Track({ todo }) {
//   return <div>
//     {todo.title}
//     <br />
//     {todo.description}
//   </div>
// }










// function App() {
//   const [render, setRender] = useState(true);

//   useEffect(() => {
//     setInterval(() => {
//       setRender(r => !r);
//     }, 5000)
//   }, []);

//   return (
//     <>
//       {render ? <MyComponent /> : <div></div>}
//     </>
//   )
// }

// function MyComponent() {
//   useEffect(() => {
//     console.error("component mounted");

//     return () => {
//       console.log("component unmounted");
//     };
//   }, []);

//   return <div>
//     From inside my component
//   </div>
// }
// ....................
// ....................
// ....................
// class MyComponent extends React.Component {  // Old react...
//   componentDidMount(): void {
//       console.log("component mounted");
//   }

//   componentWillUnmount() {
//     console.log("component unmounted");
//   }

//   render() {
//     return <div>hi there</div>
//   }
// }







// function MyComponent() {
//   const [count, setCount] = useState(0);

//   const incrementCount = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={incrementCount}>Increment</button>
//     </div>
//   );
// }
// ....................
// ....................
// ....................
// class MyComponent extends React.Component {  // Old react...
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   incrementCount = () => {
//     this.setState({ count: this.state.count + 1 });
//   }

//   render() {
//     return (
//       <div>
//         <p>{this.state.count}</p>
//         <button onClick={this.incrementCount}>Increment</button>
//       </div>
//     )
//   }
// }

export default App
