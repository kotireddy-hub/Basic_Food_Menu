import React from "react";


// const data = {name:"koti",age:"29"};

// console.log(data);
// //const name = data.name;
// const {name} = data;
// console.log(name)

const VegMenu = [
    {
    item:"Alo pacuda",
    price:20
}, 
{
    item:"Onine pacuda",
    price:30
},
{
    item:"Veg samosa",
    price:30
},
{
    item:"Rice",
    price:30
},
{
    item:"Rice1",
    price:40
}]



function Veg(){
    return<div>
        <h1>Veg Items</h1>
        {/* <p>Alo pacuda</p>
        <p>Onine pacuda</p>
        <p>Veg samosa</p>
        <p>Rice</p> */}
        {VegMenu.map(({item,price})=>(
            <div key={item}>
            <p>{item}</p>
            <p>{price}</p>
            </div>
        ))}
        </div>
}

export default Veg;