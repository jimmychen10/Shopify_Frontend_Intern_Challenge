

import React from 'react';

import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import "./CSS/SearchSection.scss"

export default function SearchSection(input) {


  return (
    <div >
      

      <div>
          
            <TextField
              className = "searchBar"
              label="Movie"
              placeholder="Enter movie title"
              // helperText="Full width!"
    
              margin="normal"
              value = {input}

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
                )
              }}
              variant="outlined"
              
            />

            
      </div>
    </div>
  );
}
