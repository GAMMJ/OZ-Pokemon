import { useParams } from "react-router"
import { usePokemonStore } from "../store/pokemonStore"

export const Detail = () => {
  const { pokemonId } = useParams()
  const pokemon = usePokemonStore((state) => state.pokemonList.find((el) => el.id === Number(pokemonId)))

  return (
    <div className="flex justify-center">
      <section className="flex flex-col justify-center items-center text-center w-100 h-110 p-5 bg-white rounded-2xl gap-2.5 shadow-[4px_4px_0px_black]">
        <div className="text-3xl mb-3">{pokemon.name}</div>
        <div className="whitespace-pre-wrap text-[18px]">{pokemon.description}</div>
        <img className="w-50 transition" src={pokemon.front} alt={pokemon.name} />
      </section>
    </div>
  )
}
