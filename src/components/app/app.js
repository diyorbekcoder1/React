import AppInfo from "../app-info/app-info"
import SearchPanel from "../search-panel/search-panel"
import AppFilter from "../app-filter/app-filter";
import MovieList from "../movie-list/movie-list";
import './app.css'
const App = () => {
    return (
            <div className="app font-monospace">
                <div className='content'>
                    <AppInfo/>
                    <div className="search-panel">
                        <SearchPanel/>
                        <AppFilter/>
                    </div>
                    <MovieList/>
                </div>
            </div>
        )

}

export default App