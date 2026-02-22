import { useNavigate } from "react-router"

export const Card = ({ pokemon }) => {
  const navigate = useNavigate()

  return (
    <>
      <section
        onClick={() => navigate(`/detail/${pokemon.id}`)}
        className="flex flex-col justify-center w-37.5 items-center bg-white rounded-2xl gap-2.5 shadow-[4px_4px_0px_black] transition transform hover:-translate-y-1"
      >
        <img className="w-30" src={pokemon.front} alt={pokemon.name} />
        <div className="pb-2">{pokemon.name}</div>
      </section>
    </>
  )
}
