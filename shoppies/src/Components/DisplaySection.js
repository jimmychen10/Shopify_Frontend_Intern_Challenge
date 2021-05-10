import React from 'react'
import Results from "./Results.js"
import Nominations from "./Nominations.js"
import "./CSS/DisplaySection.scss"


export default function DisplaySection(props) {
    {console.log("Temp",props.results)}
    // console.log("noms", typeof props.nominations)
    return (

        <div className = "displayBox">
            <Results movies = {props.results} nominateClick={props.nominateClick}/>
            {/* <Nominations nominations = {props.numinations} removeClick = {props.handleRemove}/> */}
            
        </div>
    )
}
