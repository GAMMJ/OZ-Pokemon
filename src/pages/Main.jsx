import { useEffect } from "react"
import { usePokemonStore } from "../store/pokemonStore"
import { Card } from "../component/Card"

const Main = () => {
  const { pokemonList, fetchMultiplePokemonById } = usePokemonStore()

  useEffect(() => {
    fetchMultiplePokemonById(151)
  }, [fetchMultiplePokemonById])

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,160px))] justify-center gap-4">
      {pokemonList.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  )
}

export default Main
