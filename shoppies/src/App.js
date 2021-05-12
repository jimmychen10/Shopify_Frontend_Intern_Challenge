
import React,{useState,useEffect} from "react"
import axios from "axios"
import "./App.scss"

import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';

import DisplaySection from "./Components/DisplaySection"
import SearchSection from "./Components/SearchSection.js"


export default function App(){
  // const weatherId = "9db9a4d3ba51b8e5bcb97f497a271e58"
  const apikey ="1a154f"
  const [nominatedList ,setNominatedList] = useState([])
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

        // if (nominated.length == 0){

          setMovies( blob.data.Search) // returns an array
          let a = "nonn"
          if (typeof blob.data.Search ==="object"){
             a = blob.data.Search.map(key=>{

              return(
                  // key["numinate"]= true;
                  
                  nominatedList.includes(key.Title)? key.numinate = true:  key.numinate = false
                  
                )
              }

              // if(nominatList.includes(key.Title)){
              //   return(
              //     // key["numinate"]= true;
              //     key.numinate = false
              //   )
              // }
              // else{
              //   key.numinate = false

              // }

            // }
            )
            setResults(a)
          }

          setLoadingApi(false)
        // }


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

    if(nominatedList.length < 5){
      const tempResults = [...movies]
      const numination = [...nominated]
      const tempNominatedList = [...nominatedList]
      tempResults[e].numinate = !tempResults[e].numinate;
      numination.push(tempResults[e])
      tempNominatedList.push(tempResults[e].Title)
      setResults(tempResults)

      setNominated(numination)
      setNominatedList(tempNominatedList)
    }
    else{
      alert("Sorry, only 5 nominations are allowed")
    }

  }
  function handleRemove(e){
    // setNominated()
    const numination = [...nominated]
    const tempNominatedList = [...nominatedList]
    const index = tempNominatedList.indexOf(e);
    if (index > -1) {
      tempNominatedList.splice(index, 1);
    }
    const tempI = 0
    for (var i =0; i < nominated.length; i++){
      if (numination[i].Title === e){
        numination.splice(i, 1);
        break
      }
    }
    for (var i =0; i < movies.length; i++){
      if (movies[i].Title === e){
        const tempResults = [...movies]
        tempResults[i].numinate = false
        setMovies(tempResults)
      }
    }

    setNominated(numination)
    setNominatedList(tempNominatedList)



}

function changeMovie(e){
  setMovie(e.target.value)
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
          <SearchSection input ={handleChange} movie = {movie} changeMovie = {changeMovie}/>
              
              {typeof movies === "object"&&
                <DisplaySection results= {movies} nominations = {nominated} nominateClick = {handleNomination} removeClick = {handleRemove}/>
              }

            

    </div>
  )
    }

}
