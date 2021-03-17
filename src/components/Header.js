import React from 'react'

export default function Header({toggleForm,setToggleForm}) {
    return (
        <div className="header">
            <h1>My To-do App</h1>
            <button className="btn"onClick={()=> setToggleForm(!toggleForm) } > {toggleForm ? "close" : "Add item"} </button>
        </div>
    )
}
