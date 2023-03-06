import React from 'react'
import { useParams } from 'react-router-dom'
import { SingleAgencyList } from '../../Data/SingleAgency'

const SingleAgency = () => {


  const {slug,id} = useParams()

  return (
    <div style={{marginTop:"5rem"}}>{slug} {id}</div>
  )
}

export default SingleAgency