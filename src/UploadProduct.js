import React, { useState } from 'react'
import app from "./firebase";
import { getDatabase, get, set, ref } from "firebase/database";

let db = getDatabase(app)

let cat = ['mobile', 'cloth', 'electronics']

export default function UploadProduct() {
    const [cate, setcate] = useState('')
    const [obj, setobj] = useState({})



    const handleForm = () => {
        // console.log(obj)

        if (cate !== '') {
            get(ref(db, cate)).then((e) => {

                if (e.val() === null) {
                    set(ref(db, cate), [obj])
                } else {
                    let arr = e.val()
                    arr.push(obj)
                    set(ref(db, cate), arr)
                }
                // console.log(e.val())

                setobj({})
            })
        }

    }


    return (
        <>
            <div className='form'>
                UploadProduct

                <form action="">
                    <div>
                        <select onChange={(e) => {
                            // console.log(e.target.value)

                            setcate(e.target.value)
                        }}>

                            <option value={'select'} hidden>select</option>
                            {
                                cat.map((str, index) => {
                                    return <option key={index} value={str}>{str}</option>
                                })
                            }


                        </select>
                    </div>
                    <div>
                        <input onChange={(e) => {
                            setobj({ ...obj, ...{ name: e.target.value } })
                        }} placeholder='product name' type="text" value={obj.name} />
                    </div>

                    <div>
                        <input onChange={(e) => {
                            // console.log(e.target.files[0])
                            setobj({ ...obj, ...{ img: e.target.files[0].name } })
                        }} type="file" />
                    </div>

                    <div>
                        <input onChange={(e) => {
                            setobj({ ...obj, ...{ details: e.target.value } })
                        }} placeholder='product details' type="text" />
                    </div>

                    <div>
                        <input onChange={(e) => {
                            setobj({ ...obj, ...{ price: e.target.value } })
                        }} placeholder='product price' type="text" />
                    </div>

                    <div>
                        <input onChange={(e) => {
                            setobj({ ...obj, ...{ discount: e.target.value } })
                        }} placeholder='discount price' type="text" />
                    </div>
                    <button onClick={(e) => {
                        e.preventDefault()
                        handleForm()
                    }}>Upload</button>

                </form>

            </div>
        </>
    )
}
