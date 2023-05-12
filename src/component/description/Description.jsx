import React from 'react'
import {useParams} from 'react-router-dom'

export default function Description() {
    const params = useParams()
    const {id} = params
    console.log(params);
  return (
    <div>
      <h1>Description</h1>
    </div>
  )
}

// export default withRouter;