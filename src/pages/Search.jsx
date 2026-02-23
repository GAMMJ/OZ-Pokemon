import { getRegExp } from "korean-regexp"
import { useSearchParams } from "react-router"
import { usePokemonStore } from "../store/pokemonStore"
import { Card } from "../component/Card"

const Search = () => {
  const [searchParams] = useSearchParams()
  const param = searchParams.get("pokemon")
  const reg = getRegExp(param)

  const pokemonList = usePokemonStore((state) => state.pokemonList)
  const searchPokemon = pokemonList.filter((pokemon) => pokemon.name.match(reg))

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,160px))] justify-center gap-4">
      {searchPokemon.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  )
}

export default Search
