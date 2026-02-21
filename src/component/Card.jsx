export const Card = ({ pokemon }) => {
  return (
    <>
      <section className="flex flex-col justify-center items-center w-37.5 bg-white rounded-2xl gap-2.5 shadow-[4px_4px_0px_black] transition transform hover:-translate-y-1">
        <img className="w-30" src={pokemon.front} alt={pokemon.name} />
        <div className="pb-2">{pokemon.name}</div>
      </section>
    </>
  )
}
