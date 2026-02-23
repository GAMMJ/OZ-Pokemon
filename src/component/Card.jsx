import { useNavigate } from "react-router"
import { useFavoriteStore } from "../store/pokemonFavorite"
import { memo } from "react"

export const Card = memo(({ pokemon }) => {
  const navigate = useNavigate()
  const toggleFavorite = useFavoriteStore((state) => state.toggleFavorite)
  const isFavorite = useFavoriteStore((state) => state.pokemonFavorite.some((p) => p.id === pokemon.id))

  return (
    <>
      <section
        onClick={() => navigate(`/detail/${pokemon.id}`)}
        className="flex flex-col justify-center w-37.5 items-center bg-white rounded-2xl gap-2.5 shadow-[4px_4px_0px_black] transition transform hover:-translate-y-1"
      >
        <img className="w-30" src={pokemon.front} alt={pokemon.name} loading="lazy" />
        <div className="pb-2 text-[#1e1e1e] flex items-center">
          {pokemon.name}
          <button
            onClick={(e) => {
              e.stopPropagation()
              toggleFavorite(pokemon)
            }}
            className={`mt-1 ml-1 ${isFavorite ? "text-red-500" : ""}`}
          >
            {isFavorite ? "♥" : "♡"}
          </button>
        </div>
      </section>
    </>
  )
})
