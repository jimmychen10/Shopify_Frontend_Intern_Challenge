import React from 'react'
import NuminatedResult from "./Numinated/NuminatedResult.js"

export default function Nominations(props) {
    
    const nuaminatedMovies = props.nominations.map((n) => 
    
    {
        return(

            <NuminatedResult key = {n.imdbID} movie = {n} removeClick = {props.removeClick}/>
        )
    })
    return (
        <div>
            {nuaminatedMovies}
        </div>
    )
}
