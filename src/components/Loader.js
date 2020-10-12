import React from 'react'
import { Cube } from 'styled-loaders-react'

const Loader = ({ loading }) => {
    return <div>{loading ? <Cube /> : ''}</div>
}

export default Loader
