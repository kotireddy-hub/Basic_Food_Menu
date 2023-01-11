import React from "react";
import Veg from "./FoodMenu/veg/items";
import NonVeg from "./FoodMenu/nonVeg/nonVeg";

const App = () => {
    return (
        <div>
            <h1>
                Express Menu
            </h1>
            <Veg />
            <NonVeg />
        </div>
    )
}

export default App

