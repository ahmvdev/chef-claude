export default function (props) {


    return (<section>
        <div className="flex justify-center pt-10">
            <div className="pr-20">
                <h1 className="text-xl font-bold">Ready for a recipe?</h1>
                <p className="text-sm">Generate a recipe from list of ingredients</p>
            </div>
            <button onClick={props.handleClick} className="bg-orange-500 pl-5 pr-5 pt-2 pb-2 rounded-md text-white">Get a recipe</button>
        </div>
    </section>)
}