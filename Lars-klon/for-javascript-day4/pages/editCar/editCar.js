import {url} from "../../settings.js"

import {findCar} from "../findCar/findCar.js"

export function initEditCar(){
  console.log("initEditCar")

  document.querySelector("#btn").addEventListener("click", async() => {
    const car = await findCar()

    document.querySelector("#result").innerHTML = `<form id="carForm">
    <div class="mb-3">
        <input class="form-control" id="id" name="id" readOnly="true" value="${parseInt(car.id)}">
        <label for="brand" class="form-label">Brand:</label>
        <input type="text" class="form-control" id="brand" name="brand" required value="${car.brand}">
    </div>
    <div class="mb-3">
        <label for="model" class="form-label">Model:</label>
        <input type="text" class="form-control" id="model" name="model" required value="${car.model}">
    </div>
    <div class="mb-3">
        <label for="pricePrDay" class="form-label">Price Per Day:</label>
        <input type="number" step="0.01" class="form-control" id="pricePrDay" name="pricePrDay" required value="${car.pricePrDay}">
    </div>
    <div class="mb-3">
        <label for="bestDiscount" class="form-label">Best Discount:</label>
        <input type="number" class="form-control" id="bestDiscount" name="bestDiscount" required value="${car.bestDiscount}">
    </div>
</form>
<button id="edit-car">Edit car</button>`
document.querySelector("#edit-car").addEventListener("click", editCar)
  }
  )
}


async function editCar() {

  const form = document.querySelector("#carForm")

  const newCar = {
    id: parseInt(form.id.value),
    brand: form.brand.value,
    model: form.model.value,
    pricePrDay: parseFloat(form.pricePrDay.value),
    bestDiscount: parseInt(form.bestDiscount.value)
  }

  const options = {
    method: "PUT",
    headers: {
        "Content-type":"application/json"},
    body: JSON.stringify(newCar)
  }

  try {
    await fetch(url+"/"+newCar.id,options)
                .then(res=> {
                  if(!res.ok) {
                    throw new Error("Car not found")
                  }
                  return res.json()
                })
  
    } catch(e) {
              document.getElementById("error").innerText = e.message
              }
}