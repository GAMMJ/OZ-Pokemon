import { useParams } from "react-router"
import { usePokemonStore } from "../store/pokemonStore"
import { useEffect } from "react"
import { Loading } from "../component/Loading"

const Detail = () => {
  const { pokemonId } = useParams()
  const { pokemonList, fetchMultiplePokemonById } = usePokemonStore()

  // 새로고침 시 pokemonList가 비어있으면 가져오기
  useEffect(() => {
    if (pokemonList.length === 0) {
      fetchMultiplePokemonById(151)
    }
  }, [])

  const pokemon = pokemonList.find((el) => el.id === Number(pokemonId))

  if (!pokemon)
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <Loading />
      </div>
    )

  return (
    <div className="flex justify-center">
      <section className="flex flex-col justify-center items-center text-center w-100 h-110 p-5 text-[#1e1e1e] bg-white rounded-2xl gap-2.5 shadow-[4px_4px_0px_black]">
        <div className="text-3xl mb-3">{pokemon.name}</div>
        <div className="whitespace-pre-wrap text-[18px]">{pokemon.description}</div>
        <img className="w-50 transition" src={pokemon.front} alt={pokemon.name} />
      </section>
    </div>
  )
}

export default Detail
