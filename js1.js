function add(n1, n2){
   return n1 +n2;
}


      const sub = function(n1,n2){
  return n1 - n2
} 


const cb = function(n1,n2, callback){
  return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
};

function addVersion2(n1,n2, ...rest) {
    return n1+n2+rest.reduce((acc,cur)=> acc + cur)
}

const mul = function(n1, n2) {
    return n1*n2
}

// console.log(cb(2,9,mul))
// console.log( addVersion2(1,2,3,4,5,6))

console.log(typeof(NaN))
console.log(1=="1")
console.log(1==="1")


// console.log(mul(3.5,6.7))

// console.log(sub("Hello",7))

// console.log(cb(2,2, function(n1,n2){ return n1/n2}))

const arr = ["Lars", "Jan", "Peter", "Bo", "Martin"]

const narr = arr.filter(n=>n.length>2)

// arr.forEach(element => {
//     console.log(element)
// });
// narr.forEach(element => console.log(element))

// console.log(narr)

const marr = narr.map(element=> element.toUpperCase())

const chatarr = narr.map(function(x) {return x.toUpperCase()})

// chatarr.forEach(element=>console.log(element))

const listNames = narr.map(n=>"<li>"+n+"</li>").join("")
const htmlNames = "<ul>"+listNames+"</ul>"


console.log(htmlNames)


//Opgave 4
const cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
  ];
  
const newcars = cars.filter(array => array.year>1999)

// console.log("New cars")
// newcars.forEach(element => {
//     console.log(element)
// });

const volvos = cars.filter(array=> array.make==="Volvo")

// console.log("Volvos")
// volvos.forEach(element=>console.log(element))

const cheapcars = cars.filter(array=>array.price<5000)

// console.log("Cheap cars")
// cheapcars.forEach(element=>console.log(element))


// const sqlString = cars.map(element=> "INSERT INTO cars (id,year,make,model,price) VALUES " + "(" + element.id + ", " + element.year + ", '"+element.make + "', '" + element.model + "', "+element.price + ")").join("; ")
// console.log(sqlString)


function myFilter(array, callback) {
        const newArray = [];
        array.forEach(element => {
            if(callback(element))
            newArray.push(element)
        });
        return newArray
    }

const filterOldCars = function(element) {
    return element.year>1999
}

const filterByMakeVolvo = function(element) {
    return element.make==="Volvo"
}

const filterByPrice = function(element) {
    return element.price<5000
}


const testNewCars = myFilter(cars,filterByPrice)

function myMap(array, callback) {
    const newArray = []
    for (let i=0; i<array.length; i++) {
        newArray.push(callback(array[i]))
    }
    return newArray
}

const help = function(element) {
    return element.toUpperCase()
}

const n = myMap(arr,help)

console.log(n)

