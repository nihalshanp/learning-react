import React from 'react'
import Person from './Person'

const NameList = props => {
    // let names = ['Nhal', 'shan','p']
    // let name = ['p','Shan','Nihal']
    // let nameList = name.map(name => <h1>{name}</h1>)
    const names = ['Nihal', 'Shan', 'P'] 
    let person = [{
        id: 1,
        name: 'Nihal',
        age: 13,
        skill: 'react'
    },
        {
            id: 2,
            name: 'Shan',
            age: 18,
            skill: 'Hacker'
        },
        {
            id: 1,
            name: 'p',
            age: 20,
            skill: 'Flutter'
        },
    ]
    let nameList = names.map((name, index) =><h1 key={index} > {index} {name}</h1>)
    return (
        <div>
    {/*<h1>{names[0]}</h1>
        <h1>{names[1]}</h1>
        <h1>{names[2]}</h1>
        <h1>------------</h1>*/}
        {/*{
            name.map(name => <h1>{name}</h1>)
        }
        <h1>------------</h1>*/}
        {/*{nameList}*/}
        {nameList}
        </div>
    )
}

export default NameList;