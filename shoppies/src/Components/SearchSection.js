

import React from 'react';

import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import "./CSS/SearchSection.scss"

export default function SearchSection(props) {


  return (
    <div className = "searchSection">

      <form  onSubmit = {(e)=>props.input(e)}>
        <TextField
             
              className = "searchBar"
              label="Movie"
              placeholder="Enter movie title"
    
              margin="normal"
              value = {props.movie}
              onChange ={e =>props.changeMovie(e)}

              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{      
                endAdornment:(
                <InputAdornment position="end">
                  <IconButton type="submit"  aria-label="search">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
                ),

              }}
              variant="outlined"
              
            />
            </form>

    </div>
  );
}
