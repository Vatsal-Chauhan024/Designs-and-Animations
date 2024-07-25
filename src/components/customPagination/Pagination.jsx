import axios from 'axios'
import React, {  useEffect, useState } from 'react'
import data from '../LandingNavbar/data'

const tableHeading = [
    {
        item: "id",
    },
    {
        item: "title"
    },
]


const Pagination = () => {

    const [apiData, setApiData] = useState([])
    //page
    const [page, setPage] = useState(1)
    const [limit] = useState(10)

    const last = page * limit;
    const first = last-limit;


    const buttonArray = [];

    for (let index = 0; index < Math.ceil(apiData.length/limit); index++) {
        buttonArray.push(index);        
    }
    const values = apiData?.slice(first, last)
    console.log(buttonArray)


    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
            setApiData(response.data)
        }).then((e) => {
            console.log(e)
        })
    }, [])

    

    const handleButtonClick = (key) => {
        setPage(key)
    }
    return (
        <>


            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            {
                                tableHeading.map((element, key) => (
                                    <th scope="col" className="px-6 py-3" key={key}>
                                        {element.item}
                                    </th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {

                            values?.map((element, key) => (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={key}>


                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {element.id}
                                    </th>
                                    <td className="px-6 py-4">
                                        {element.title}
                                    </td>
                                </tr>

                            ))

                        }    
                    </tbody>
                </table>


               <div className='flex items-center gap-4 w-full justify-center mt-20'>
                {
                  buttonArray?.map((element, key) => (
                    <button className={` hover:bg-indigo-700 text-white text-lg rounded-full h-8 w-8 flex items-center justify-center ${key+1 === page ? "bg-indigo-700": "bg-indigo-500i"}`} key = {key} onClick={() => handleButtonClick(key+1)}>{element+1}</button>
                  ))  
                }
                </div>         

            </div>

        </>
    )
}

export default Pagination
