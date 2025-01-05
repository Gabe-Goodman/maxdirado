// "use client";

// import React from "react";
// import { useState, useEffect } from "react";

// const baseUrl = "https://jsonplaceholder.typicode.com";

// export function ResponseDisplay() {
// 	const [todos, setTodos] = useState([]);

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			const response = await fetch(baseUrl + "/todos?userId=1");
// 			const data = await response.json();
// 			setTodos(data);
// 		};
// 		fetchData();
// 	}, []);

// 	async function handleCheck(todo, index) {
// 		const newCompleted = !todo.completed;
// 		console.log(newCompleted);
// 		const response = await fetch(
// 			`https://jsonplaceholder.typicode.com/todos/${todo.id}`,
// 			{
// 				method: "PATCH",
// 				body: JSON.stringify({ completed: newCompleted }),
// 				headers: {
// 					"Content-type": "application/json; charset=UTF-8",
// 				},
// 			}
// 		);
// 		const updatedTodo = await response.json();

// 		// Update the specific todo in the state
// 		setTodos((prevTodos) =>
// 			prevTodos.map((item) =>
// 				item.id === todo.id
// 					? { ...item, completed: updatedTodo.completed }
// 					: item
// 			)
// 		);
// 	}

// 	return (
// 		<div>
// 			<h1>WHOOP Todo</h1>
// 			{todos.map((todo, index) => (
// 				<div key={todo.id} style={{ color: "black", display: "flex" }}>
// 					<input
// 						type="checkbox"
// 						checked={todo.completed}
// 						onChange={() => handleCheck(todo, index)}
// 					/>
// 					<h3>{todo.title}</h3>
// 				</div>
// 			))}
// 		</div>
// 	);
// }
