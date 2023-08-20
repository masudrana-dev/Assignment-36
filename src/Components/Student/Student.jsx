import React from 'react'

const Student = (props) => {
    const { name, id, group } = props.student
    return (
        <div style={{ backgroundColor: 'Teal', padding: '20px', margin: "10px", color: 'white' }}>
            <div><h1>Name : {name}</h1></div>
            <div><h2>Roll : {id}</h2></div>
            <div><h2>Group : {group}</h2></div>

        </div>
    )
}
export default Student