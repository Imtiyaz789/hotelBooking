import React, { useState } from 'react'

const CreateHotel = () => {
    const [hotel, setHotel] = useState({
        name: '',
        type: '',
        city: '',
        address: '',
        distance: '',
        title: '',
        desc: '',
        cheapestPrice: '',
    })


    return (
        <div>createHotel</div>
    )
}

export default CreateHotel