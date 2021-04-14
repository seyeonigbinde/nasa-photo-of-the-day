import React from 'react'

export default function Photo (props) {

  const { nasaPhoto, details, title } = props;
  

  return (
    <div className=''>
      <h3>Title: {title}</h3>
      <img src={nasaPhoto} alt='The NASA'/>
      <p>{details}</p>
    </div>
  )
}
