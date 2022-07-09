import React from 'react'

export default function ItemCount(){
    return <>
                <button type="button" className="btn btn-primary">
                    <h1>-</h1>
                </button>
                <h1>1</h1>
                <button type="button" className="btn btn-primary">
                    <h1>+</h1>
                </button>
    </>
}