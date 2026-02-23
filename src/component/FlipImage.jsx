import { useState } from "react"

export const FlipImage = ({ front, back }) => {
  const [flip, setFlip] = useState(false)

  return (
    <>
      <div
        className={`transform-3d w-50 h-60 relative transition-transform duration-500 ${flip ? "rotate-y-180" : "rotate-y-0"}`}
      >
        <img className="backface-hidden w-full h-full absolute" src={front} alt="" />
        <img className="backface-hidden w-full h-full rotate-y-180" src={back} alt="" />
      </div>
      <button onClick={() => setFlip((prev) => !prev)}>뒤집기</button>
    </>
  )
}
