import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

export const useFavoriteStore = create(
  persist(
    (set) => ({
      pokemonFavorite: [],

      toggleFavorite: (pokemon) =>
        set((state) => {
          // 해당 포켓몬이 이미 찜 목록에 있는가
          const exists = state.pokemonFavorite.some((p) => p.id === pokemon.id)

          return {
            pokemonFavorite: exists
              ? state.pokemonFavorite.filter((p) => p.id !== pokemon.id)
              : [...state.pokemonFavorite, pokemon],
          }
        }),
    }),
    {
      name: "pokemon-favorite-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
)
