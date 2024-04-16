#! /usr/bin/env node

// Task # 45
// Cars: write a function that stores information about a car in a object. the function should always 
// receive a manufacturer and a model name it should then accept an arbitrary number of keyword arguments. 
// Call the function with the required information and two other name_value pairs, such as a color or an
// optional feature. Print the object thats returned to make sure all the information was restored correctly


type car = {
    manufacture: string
    model: string
    [key: string]: any;
}
function createCar(manufacture: string, 
                         model: string, 
                      optional: Record < string, any> ): car {
    return{
        manufacture,
        model,
        ...optional
    }
}
const mycar: car = createCar("toyota", "corolla",{color: "black", year:"2024"})
console.log(mycar)