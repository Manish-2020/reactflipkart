import React, { useEffect, useState } from 'react'

export default function Temp() {


    const [obj, setObj] = useState({})

    return (
        <>

            <div>
                <input onInput={function (e) {
                    // console.log(e.target.value)
                    setObj({ ...obj, ...{ name: e.target.value } })
                }} type="text" />

                <button onClick={() => {
                    console.log(obj)
                }}>show in console</button>
            </div>
        </>
    )
}
