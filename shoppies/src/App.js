
import React,{useState,useEffect} from "react"
import axios from "axios"
import "./App.scss"

import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';

import DisplaySection from "./Components/DisplaySection"



export default function App(){
  // const weatherId = "9db9a4d3ba51b8e5bcb97f497a271e58"
  const apikey ="1a154f"
  const [loadingApi, setLoadingApi] = useState(true)
  const [results, setResults] = useState([])
  const [nominated ,setNominated] = useState([])
  const [input, setInput] = useState(''); 
  const [movie,setMovie] = useState('');
  const [movies,setMovies] = useState('');



  function getApiData(){
    const apiData =  axios.get("http://www.omdbapi.com/?type=movie&apikey="+apikey+"&s="+movie)


      return  apiData   
  }

   function getMovieData(){
      
      getApiData().then( blob =>{

        if (nominated.length == 0){

          setMovies( blob.data.Search) // returns an array
          let a = "nonn"
          if (typeof blob.data.Search ==="object"){
             a = blob.data.Search.map(key=>{
              return(
                // key["numinate"]= true;
                key.numinate = false
              )
            }
            )
            setResults(a)
          }

          setLoadingApi(false)
        }
        else{
          console.log("something in the nominated list")

        }

      }
    )  

  }


  useEffect(()=>{
    console.log("Mounted")
    getMovieData()
    return () => {
      console.log("cleaned up");
    };
  },[])


  function handleChange(e){
    e.preventDefault()
    getMovieData()
    console.group(e)
  }

  function handleNomination(e){


    const tempResults = [...movies]
    const numination = [...nominated]

    tempResults[e].numinate = !tempResults[e].numinate;
    numination.push(tempResults[e])
        
    setResults(tempResults)
    setNominated(numination)



  }
  function handleRemove(e){
    // setNominated()
}
  
if(loadingApi){
  return (
    <div className="backGround" >
      <div className = "loading"> 
        <h1>Loading</h1> 
      </div>
  </div>
  )
}
else{

   return(
    
    <div >

        <h1 className="title">Shoppie</h1>
        <form  onSubmit = {handleChange}>
        <TextField
             
              className = "searchBar"
              label="Movie"
              placeholder="Enter movie title"
    
              margin="normal"
              value = {movie}
              onChange ={e=> setMovie(e.target.value)}

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
            </form>
              
              {typeof movies === "object"&&
                <DisplaySection results= {movies} numinations = {nominated} nominateClick = {handleNomination} removeClick = {handleRemove}/>
              }

            

    </div>
  )
    }

}
