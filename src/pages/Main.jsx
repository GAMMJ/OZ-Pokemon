import { useEffect } from "react"
import { usePokemonStore } from "../store/pokemonStore"
import { Card } from "../component/Card"

export const Main = () => {
  const { pokemonList, loading, error, fetchMultiplePokemonById } = usePokemonStore()

  useEffect(() => {
    fetchMultiplePokemonById(151)
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,160px))] justify-center gap-4">
      {pokemonList.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  )
}
