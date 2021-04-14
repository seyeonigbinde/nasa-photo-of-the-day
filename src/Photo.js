import React, {useState, useEffect}  from 'react'
import axios from 'axios'

export default function Photo (props) {
;
  // const [details, setDetails] = useState('')
  const { nasaPhoto } = props;
  

  return (
    <div className=''>
      <h2>Photo of the Day</h2>
      <img src={nasaPhoto}></img>
    </div>
  )
}
