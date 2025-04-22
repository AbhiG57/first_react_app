import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Search from './components/Search'
import Loader from './components/Loader'
import MovieCard from './components/MovieCard'


const API_URL = import.meta.env.API_URL;
const API_OPTIONS = {
  method:'GET'
}

const App = () =>{

  const [searchTerm, setSearchTerm] = useState('I am Batman');
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const fetchMovies = async () =>{
    try {
      setIsLoading(true);
      const endpoint = '/movies_list.json'    // API_URL + "/movies/list";
      const response = await fetch(endpoint,API_OPTIONS);
      const data = await response.json();
      setMovieList(data.movies);
      console.log(data);
      setIsLoading(false);
    } catch (error){
      console.log("Error",error);
      setIsLoading(false);
      setMovieList([]);
    }
  }


  useEffect(() => {
    fetchMovies();
  }, [])
  
 
  return(
    <main className='bg-gray-900 text-white h-full'>
      <div className='pattern'/>
      <div className='wrapper text-center'>
        <header className='py-4'>
          <h1 className='text-3xl'> 
            Find <span className='text-gradient'>Movies</span> You'll Enjoy the most 
          </h1> 
        </header>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <div className='font-bold text-blue-900 mt-2 ml-4 text-left'>All Movies</div>
         {isLoading ? 
         (<Loader/>) : 
         (
          <ul className='pt-3 flex flex-wrap justify-center'>
            {
              movieList.map((movie)=>(
                
                    <MovieCard key={movie.id} movie={movie}/>
                
              )
            )
            }
          </ul>
         )}
      </div>
    </main>
  )
}
export default App
