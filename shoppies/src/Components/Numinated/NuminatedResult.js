import React from 'react'
import Button from '@material-ui/core/Button';
import "../CSS/IndividualNominations.scss"

export default function numinatedResult(props) {
    return (
        <div className= "individulItem">
            <p>Title: {props.movie.Title}</p>
            <p>({props.movie.Year})</p>
            <Button variant="outlined" onClick={()=>props.removeClick(props.movie.Title)} >Remove</Button> 
        </div>
    )
}
