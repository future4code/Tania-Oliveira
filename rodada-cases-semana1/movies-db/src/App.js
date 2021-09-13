import React, { Component } from 'react'
import Header from './components/header/Header'
import MovieRow from './MovieRow';
import $ from 'jquery'
import { Search } from './components/header/styled';
import { SearchIcon } from '@material-ui/icons/Search';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    // const movies = [
    //   { id: 0, poster_src:"https://www.themoviedb.org/t/p/w130_and_h195_bestv2/k3N02DD8QjYsYw1YTbOIEFDodYc.jpg", title: "spider", overview: "muita luta" },
    //   { id: 1, title: "spider2", overview: "muita luta1" }
    // ]

    // let movieRows = []
    // movies.forEach((movie) => {
    //   console.log(movie.id)
    //   const movieRow = <MovieRow movie={movie}/>
    //   movieRows.push(movieRow)
    // })
    // this.state = { rows: movieRows }
    this.performSearch("wo")
  }
  performSearch(searchTerm) {
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=e615e65664e719ea82b780a303d5d6b9&query=" + searchTerm
    $.ajax({
      url: urlString,
      success: (searchResults) => {

        const results = searchResults.results
        let movieRows = []

        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
          const movieRow = <MovieRow key={movie.id} movie={movie} />
          movieRows.push(movieRow)
        })
        this.setState({ rows: movieRows })
      },
      error: (xhr, status, err) => {
        console.error("failed to fetch data")
      }
    })
  }
  searchChangeHandler(event) {
  console.log(event.target.value)
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm)
  }
  render() {
    return (
      <div>
        <Header />
        <Search>
        <input onChange={this.searchChangeHandler(this)} placeholder="procure um título" />
        </Search>
          {this.state.rows}
      </div>
    )
  }
}

export default App

