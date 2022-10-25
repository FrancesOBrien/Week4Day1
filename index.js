///////////////////////////////
// Easy Going
//////////////////////////////

const logNumbers = () => {
    for(i = 1; i < 21; i++) {
        console.log(i)
    }
}
logNumbers()

////////////////////////////////
// Get Even
////////////////////////////////

const getEven = () => {
    for(let i = 0; i <= 200; i++) {
        if (i % 2 == 0){
            console.log(i)
        }
    }
}
getEven()

////////////////////////////////
// Fizz Buzz
////////////////////////////////

const getMyNumbers = () => {
    for(let i = 0; i <= 100; i++){
        if (i % 3 == 0 && i % 5 == 0){
            console.log(i + " FizzBuzz");
        }else if(i % 3 == 0){
            console.log(i + " Fizz");
        } else if (i % 5 == 0){
            console.log(i + " Buzz");
        } else console.log(i)
    }
}
getMyNumbers()

////////////////////////////////
// Wild Wild Life
////////////////////////////////

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee[2] += 1
console.log(plantee)

wolfy[3] = "Gotham City"
console.log(wolfy)

dart[3] += " and Hawkins"
console.log(dart)

wolfy.shift()
wolfy.unshift("GameBoy")
console.log(wolfy)

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////

let turtles = ["Donatello", "Leonardo", "Michaelangelo", "Raphael"]

const callTurtles = () => {
    for (const element of turtles) {
        console.log(element.toUpperCase())
    }
}
callTurtles()
////////////////////////////////
// Methods, Revisited
////////////////////////////////


////////////////////////////////
// Where is Waldo
////////////////////////////////


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////