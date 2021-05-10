import React from 'react'
import Button from '@material-ui/core/Button';
// import "./CSS/IndividualResults.scss"
import "../CSS/IndividualResults.scss"

export default function IndividtualResults(props) {

    // console.log("in the indi: "+ JSON.stringify(props.movie))
    return (
        <div className= "individulItem">

            <p>Title: {props.movie.Title}</p>
            <p>({props.movie.Year})</p>
            {
                !props.movie.numinate ?  <Button variant="outlined" onClick={()=>props.nominateClick(props.i)} >Nominate</Button> :<Button variant="outlined"  disabled>Nominate</Button>
            }
            
        </div>
    )
}
