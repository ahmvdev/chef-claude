'use client'
import { useState } from "react"

export default function () {

    const [items, setItems] = useState([])

    const wholeArray = items.map(item => (
        <li key={item}>{item}</li>
    ))

    const addIngredient = (formData) => {
        const gotInput = formData.get("ingredient")
        setItems(prevItem => [...prevItem, gotInput])
    }

    return (
        <>
            <div className="flex justify-center pt-20">
                <form action={addIngredient}>
                    <input placeholder="e.g oregano" className="p-2 rounded-md mr-4" name="ingredient"></input>
                    <button className="bg-black rounded-md p-3 text-white hover:cursor-pointer">+ Add Ingredient</button>
                </form>
            </div>
            <div className="flex md:justify-center">
                <div className="w-full max-w-[500px]">
                    <ul className="text-left">
                        {wholeArray}
                    </ul>
                </div>
            </div>
        </>
    )
}