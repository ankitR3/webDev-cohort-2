import axios from "axios";
import { useEffect, useState } from "react";

export function useTodos(n: any) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const value = setInterval(() => {
      axios.get("http://localhost:4000/todos")
      .then(res => {
        setTodos(res.data.todos);
        setLoading(false);
      })
    }, n * 1000)

    axios.get("http://localhost:4000/todos")
      .then(res => {
        setTodos(res.data.todos);
        setLoading(false);
      })

      return () => {
        clearInterval(value)
      }
  }, [n])

  return {todos, loading};
}