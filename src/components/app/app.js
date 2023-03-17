import AppInfo from "../app-info/app-info"
import SearchPanel from "../search-panel/search-panel"
import AppFilter from "../app-filter/app-filter";
import MovieList from "../movie-list/movie-list";
import MoviesAddForm from "../movies-add-form/movies-add-form";
import './app.css'
const App = () => {

    const data=[
        {name:'Empire of Osman',viewers:811 ,favourite:false},
        {name:'Masha va Medved',viewers:200,favourite:false},
        {name:'Panjara ortida',viewers:222 ,favourite:true},
    ]
    return (
            <div className="app font-monospace">
                <div className='content'>
                    <AppInfo/>
                    <div className="search-panel">
                        <SearchPanel/>
                        <AppFilter/>
                    </div>
                    <MovieList data={data}/>
                    <MoviesAddForm/>
                </div>
            </div>
        )

}

export default App