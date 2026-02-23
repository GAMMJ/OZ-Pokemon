import { Card } from "../component/Card"
import { useFavoriteStore } from "../store/pokemonFavorite"

const Favorite = () => {
  const pokemonFavorite = useFavoriteStore((state) => state.pokemonFavorite)

  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,160px))] justify-center gap-4">
        {pokemonFavorite.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  )
}

export default Favorite
