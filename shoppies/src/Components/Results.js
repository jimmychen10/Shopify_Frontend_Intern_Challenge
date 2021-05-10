import React from 'react'
import IndividtualResults from "./Reults/IndividtualResults.js"
import "./CSS/Result.scss"

export default function Results(props) {
    
    let index =-1;
    const individualMovies = props.movies.map((m) => 
    {
        index+=1
        return(

            <IndividtualResults i = {index} key = {m.imdbID} movie = {m} nominateClick = {props.nominateClick}/>
        )
    })
    return (
        <div className ="resultBox">
            {individualMovies}
        </div>
    )
}
// key - {props.imdbID} 