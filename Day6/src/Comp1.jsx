import React from 'react'
import Comp2 from './Comp2'

export const Comp1 = () => {
    const greet="hello"
    return (
        <>
        <h1>{greet},This is Comp1 </h1>
        <Comp2 g={greet}/>
        </>
    )
}
