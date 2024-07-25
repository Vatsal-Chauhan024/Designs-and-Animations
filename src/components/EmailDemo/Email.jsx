import React, { useState } from 'react'


const Email = () => {

    const [emailText, setEmailText] = useState('')

  return (

  <>
  <form action="">
  <input type="email" value={emailText} onChange={(e)=> setEmailText(e.target.value)} name='email'/>

  <button>Send Mail</button>
  </form>
  </>

  )
}

export default Email
