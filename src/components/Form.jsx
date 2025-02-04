'use client'
import { useState } from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"
import { getRecipeFromChefClaude } from "../../api"


export default function () {

    const [items, setItems] = useState([])

    const [recipe, setRecipe] = useState("")

    const wholeArray = items.map(item => (
        <li key={item}>{item}</li>
    ))

    const addIngredient = (formData) => {
        const gotInput = formData.get("ingredient")
        setItems(prevItem => [...prevItem, gotInput])
    }

    async function recipeShown() {
        const response = await getRecipeFromChefClaude(wholeArray)
        setRecipe(response)
    }

    return (
        <>
            <div className="flex justify-center pt-20">
                <form action={addIngredient}>
                    <input placeholder="e.g oregano" className="p-2 rounded-md mr-4" name="ingredient"></input>
                    <button className="bg-black rounded-md p-3 text-white hover:cursor-pointer">+ Add Ingredient</button>
                </form>
            </div>
            <div className="flex justify-center">
                <div className="w-full max-w-[500px]">
                    <ul className="text-left mt-5 list-disc pl-6">
                        {wholeArray}
                    </ul>
                </div>
            </div>
            {items.length > 3 &&
                <IngredientsList handleClick={recipeShown} />
            }
            {
                recipe && <ClaudeRecipe recipe={recipeShown} />
            }
        </>
    )
}