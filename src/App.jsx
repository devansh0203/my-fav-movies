import Card from "../components/Card"
import Footer from "../components/Footer"
import movies from "./index"

function createCard(movies){
  return <Card
    id  = {movies.id}
    key  = {movies.id}
    name = {movies.name}
    img  = {movies.img}
    year = {movies.year}

  />
}

function App() {
  return (
    <>
      <h1>My Favourite Movies</h1>
      {movies.map(createCard)}
      <Footer />
    </>
  )
}

export default App
