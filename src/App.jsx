import { Link, Route, Routes, useNavigate } from "react-router"
import { lazy, Suspense } from "react"
import { Loading } from "./component/Loading"
import { ErrorBoundary } from "./component/ErrorBoundary"

const Main = lazy(() => import("./pages/Main"))
const Detail = lazy(() => import("./pages/Detail"))
const Search = lazy(() => import("./pages/Search"))
const Favorite = lazy(() => import("./pages/Favorite"))

function App() {
  const navigate = useNavigate()

  return (
    <div className="bg-[#818181] min-h-screen">
      <div className="bg-red-600 w-full h-14"></div>
      <h1 className="text-4xl text-center bg-black text-white p-2">포켓몬 도감</h1>
      <nav className="flex gap-8 justify-center items-center py-3 bg-white text-[#1e1e1e]">
        <Link to={"/"}>메인페이지</Link>
        <Link to={"/favorite"}>찜</Link>
        <div>
          <input
            placeholder="검색"
            onChange={(e) => navigate(`search?pokemon=${e.target.value}`)}
            className="border-b p-1.5 outline-none"
          />
        </div>
      </nav>
      <main className="p-4">
        <ErrorBoundary>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Main />}></Route>
              <Route path="/detail/:pokemonId" element={<Detail />}></Route>
              <Route path="/search" element={<Search />}></Route>
              <Route path="/favorite" element={<Favorite />}></Route>
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>
    </div>
  )
}

export default App
