import { Link, Route, Routes } from "react-router"
import { Main } from "./pages/main"
import { Detail } from "./pages/Detail"
import { Search } from "./pages/Search"
import { Favorite } from "./pages/Favorite"

function App() {
  return (
    <div className="bg-[#818181] min-h-screen">
      <div className="bg-red-600 w-full h-14"></div>
      <h1 className="text-4xl text-center bg-black text-white p-2">포켓몬 도감</h1>
      <nav className="flex gap-3.5 justify-center items-center py-4 bg-white">
        <Link to={"/"}>메인페이지</Link>
        <Link to={`/detail/1`}>디테일</Link>
        <Link to={"/search"}>서치</Link>
        <Link to={"/favorite"}>찜</Link>
      </nav>
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/detail/:pokemonId" element={<Detail />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/favorite" element={<Favorite />}></Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
