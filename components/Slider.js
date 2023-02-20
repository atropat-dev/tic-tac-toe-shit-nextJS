import React, { useState } from "react"
import Image from "next/image"

function Slider({ imageLinks }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? imageLinks.length - 1 : prevIndex - 1))
  }

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === imageLinks.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <div>
      <div>
        <img
          src={imageLinks.map((e) => {
            e.src
          })}
          alt="Slider Image"
        />
      </div>
      <button onClick={handlePrevClick}>Prev</button>
      <button onClick={handleNextClick}>Next</button>
    </div>
  )
}

export default Slider
