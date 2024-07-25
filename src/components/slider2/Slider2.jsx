import axios from 'axios'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import {  motion} from 'framer-motion'

const Slider2 = () => {

    const [apiData, setApiData] = useState([])
    const [index, setIndex] = useState(0)

    useLayoutEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
            setApiData(response.data)
        }).catch((e) => {
            console.log(e)
        })
    }, [])


    useEffect(() => {
        const intervalId = setInterval(() => {
            if(index === apiData.length - 1){
                setIndex(0)
            }
            else {
                setIndex(index + 1)
            }
        }, 5000);
        
        
        return () => {
            clearInterval(intervalId)
        }
    }, [index, apiData.length])


   


    return (
        <>
<motion.div  className="block max-w-sm m-7 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" key={index} animate = {{
    opacity: 1,
    x: 0
}}
initial = {{opacity: 0, x: 50}}

transition={{duration: .5}}
>

<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{apiData[index]?.title}</h5>
<p className="font-normal text-gray-700 dark:text-gray-400">{apiData[index]?.body}</p>
</motion.div>      


<button className='button bg-indigo-600 py-2 m-2 px-2 text-white rounded-md' onClick={() => setIndex(index + 1)}>NEXT</button>

        </>
    )
}

export default Slider2
