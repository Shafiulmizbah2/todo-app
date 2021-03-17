import React from 'react'
import PropTypes from 'prop-types'

export default function Form({title,date,time,handleSubmit,setDate,setTime,setTitle}) {
    return (
        <form className="form" onSubmit={handleSubmit}>
            <input className="input"  type="text" placeholder="Title" name="title" value={title} onChange = {(e)=> setTitle(e.target.value)} />
            <input className="input"  type="text" placeholder="Date" name="date" value={date} onChange = {(e)=> setDate(e.target.value)}/>
            <input className="input"  type="text" placeholder="Time" name="time" value={time} onChange = {(e)=> setTime(e.target.value)}/>
            <input className="input" type="submit" value="Add item" className="btn" />
        </form>
    )
}

Form.prototype = {
    title : PropTypes.string,
    date : PropTypes.string,
    time : PropTypes.string,
    handleChange:PropTypes.func,
    setDate:PropTypes.func,
    setTime:PropTypes.func,
    setTitle:PropTypes.func,
}