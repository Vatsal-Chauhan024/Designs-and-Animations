import React from 'react'
const fakeData = [
    {
      name: "Vatsal Chauhan",
      mobileNumber: "9456123789",
      area: "Rajkot",
      pinCode: "360005"
    },
    {
      name: "John Doe",
      mobileNumber: "9876543210",
      area: "New York",
      pinCode: "12345"
    },
    {
      name: "Jane Smith",
      mobileNumber: "8765432109",
      area: "Los Angeles",
      pinCode: "67890"
    },
    {
      name: "Alice Johnson",
      mobileNumber: "7654321098",
      area: "London",
      pinCode: "54321"
    }
  ];

const Card = () => {
  return (
    
    <>
   <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-rows-2 gap-16'>
   
    {

        fakeData.map((elem)=>(
            <div className=' w-72 sm:w-80 h-80 border-2 rounded-sm border-black'>
                {elem.area}hk
    </div>
        ))
    }
        </div>
    </>
    
  )
}

export default Card
