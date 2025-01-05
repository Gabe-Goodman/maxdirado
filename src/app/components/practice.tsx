// // import React, { Component } from "react";

// // class Counter extends Component {
// // 	constructor(props) {
// // 		super(props);
// // 		this.state = {
// // 			count: 0,
// // 		};
// // 	}

// // 	increment = () => {
// // 		this.setState((prevState) => ({ count: prevState.count + 1 }));
// // 	};

// // 	decrement = () => {
// // 		this.setState((prevState) => ({ count: prevState.count - 1 }));
// // 	};

// // 	render() {
// // 		return (
// // 			<div>
// // 				<h1>Count: {this.state.count}</h1>
// // 				<button onClick={this.increment}>Increment</button>
// // 				<button onClick={this.decrement}>Decrement</button>
// // 			</div>
// // 		);
// // 	}
// // }

// // export default Counter;

// // import React, { useEffect, useState } from "react";

// // const [count, setCount] = useState(0);

// // const increment = () => {
// // 	setCount(count + 1);
// // };
// // const decrement = () => {
// // 	setCount(count - 1);
// // };

// // export default Counter = () => {
// // 	return (
// // 		<div>
// // 			<h1>Count: {count}</h1>
// // 			<button onClick={increment}>Increment</button>
// // 			<button onClick={decrement}>Decrement</button>
// // 		</div>
// // 	);
// // };

// import React, { Component, createContext } from "react";

// const ContactsContext = createContext([]);

// class ContactsProvider extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			contacts: JSON.parse(localStorage.getItem("contacts")) || [],
// 			addContact: this.addContact,
// 			updateContact: this.updateContact,
// 			deleteContact: this.deleteContact,
// 		};
// 	}

// 	addContact = (contact) => {
// 		const newContacts = [...this.state.contacts, contact];
// 		this.setState({ contacts: newContacts }, () => {
// 			localStorage.setItem("contacts", JSON.stringify(newContacts));
// 		});
// 	};
// 	updateContact = (updatedContact) => {
// 		const newContacts = this.state.contacts.map((contact) =>
// 			contact.id === updatedContact.id ? updatedContact : contact
// 		);
// 		this.setState({ contacts: newContacts }, () => {
// 			localStorage.setItem("contacts", JSON.stringify(newContacts));
// 		});
// 	};
// 	deleteContact = (id) => {
// 		const newContacts = this.state.contacts.filter(
// 			(contact) => contact.id !== id
// 		);
// 		this.setState({ contacts: newContacts }, () => {
// 			localStorage.setItem("contacts", JSON.stringify(newContacts));
// 		});
// 	};
// 	render() {
// 		return (
// 			<ContactsContext.Provider value={this.state}>
// 				{this.props.children}
// 			</ContactsContext.Provider>
// 		);
// 	}
// }
// export { ContactsProvider, ContactsContext };

// import React, { useState, useEffect, createContext } from "react";

// /*

// State: contacts, initial state = JSON.parse(localStorage.getItem("contacts")) || []
// => initialize as an empty arr and attempt parse on render

// */

// import React, { createContext, useContext, useReducer, useEffect } from "react";

// const ContactsProvider = ({ children }) => {
// 	const [contacts, dispatch] = useReducer((state, action) => {
// 		switch (action.type) {
// 			case "ADD_CONTACT":
// 				return [...state, action.payload];
// 			case "UPDATE_CONTACT":
// 				return state.map((contact) =>
// 					contact.id === action.payload.id ? action.payload : contact
// 				);
// 			case "DELETE_CONTACT":
// 				return state.filter((contact) => contact.id !== action.payload);
// 			case "SET_CONTACTS":
// 				return action.payload;
// 			default:
// 				return state;
// 		}
// 	}, []);
// 	useEffect(() => {
// 		const storedContacts = JSON.parse(localStorage.getItem("contacts"));
// 		if (storedContacts) {
// 			dispatch({ type: "SET_CONTACTS", payload: storedContacts });
// 		}
// 	}, []);
// 	const addContact = (contact) => {
// 		dispatch({ type: "ADD_CONTACT", payload: contact });
// 	};
// 	const updateContact = (updatedContact) => {
// 		dispatch({ type: "UPDATE_CONTACT", payload: updatedContact });
// 	};
// 	const deleteContact = (id) => {
// 		dispatch({ type: "DELETE_CONTACT", payload: id });
// 	};
// 	useEffect(() => {
// 		localStorage.setItem("contacts", JSON.stringify(contacts));
// 	}, [contacts]);
// 	const contextValue = { contacts, addContact, updateContact, deleteContact };
// 	return (
// 		<ContactsContext.Provider value={contextValue}>
// 			{children}
// 		</ContactsContext.Provider>
// 	);
// };
// const ContactsContext = createContext({});
// const useContacts = () => useContext(ContactsContext);
// export { ContactsProvider, useContacts };
