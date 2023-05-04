import React, { useState } from 'react'

const PersonCard = (props) => {



    const { personName, age, hairColor } = props
    return (
        <div>
            <h1>{personName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
        </div>

    )
}

export default PersonCard