import React from 'react'

const Person = ({person}) => {
  return (
    <div>  
        <h1> I am {person.name}</h1>
        <p>I'm {person.age} years old. I know {person.skill}</p>
    </div>
    )
}

export default Person;