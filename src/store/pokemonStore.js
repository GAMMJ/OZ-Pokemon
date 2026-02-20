import { create } from "zustand"

export const usePokemonStore = create((set) => ({
  pokemonList: [],
  loading: false,
  error: null,

  fetchMultiplePokemonById: async (maxPokemonId) => {
    set({ loading: true, error: null })
    try {
      // id 배열
      const numberArray = Array.from({ length: maxPokemonId }, (_, i) => i + 1)

      // API 함수
      const fetchAPI = async (pokemonId) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`)
        const data = await res.json()

        return {
          id: pokemonId,
          name: data.names.find((el) => el.language.name === "ko")?.name,
          description: data.flavor_text_entries.find((el) => el.language.name === "ko")?.flavor_text,
          front: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
          back: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonId}.png`,
        }
      }

      // id를 map을 이용해 API함수 호출
      const pokemonDataArray = await Promise.all(numberArray.map((id) => fetchAPI(id)))

      // 포켓몬 리스트 상태 set
      set({ pokemonList: pokemonDataArray, loading: false })
    } catch (e) {
      set({ error: e.message, loading: false })
    }
  },
}))
