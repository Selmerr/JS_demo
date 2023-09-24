const url = "http://localhost:8080/api/cars"
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))

const newCar = {
    brand: "Fisker",
    model: "LystFisker",
    pricePrDay: 999,
    bestDiscount: 10,
}

const options = {
    method: "POST",
    headers: {
        "Content-type":"application/json"},
    body: JSON.stringify(newCar)

}

fetch(url,options).
    then(res=>res.json())
    .then(carResponse=>console.log(carResponse))