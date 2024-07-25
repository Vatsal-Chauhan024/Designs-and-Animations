import React from 'react'



const CardData = [
    {
        textElem : "Card 1"
    },
    {
        textElem : "Card 2"
    },
    {
        textElem : "Card 3"
    },
    {
        textElem : "Card 4"
    },
    {
        textElem : "Card 5"
    },
    {
        textElem : "Card 6"
    },
    {
        textElem : "Card 7"
    },
    {
        textElem : "Card 8"
    },
    {
        textElem : "Card 9"
    },
    {
        textElem : "Card 10"
    },
]

const Card = () => {
  return (
    <>
    {
        CardData.map((element, key)=> (
            <div key={key} className='bg-blue-500 rounded-md h-96 min-w-[300px] text-black font-semibold text-lg flex justify-center items-center'>
                {element.textElem}
            </div>
        ))
    }
    </>
  )
}

export default Card
