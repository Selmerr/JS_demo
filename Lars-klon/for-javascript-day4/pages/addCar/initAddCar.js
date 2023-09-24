  import { url } from "../../settings.js"

  export function initAddCar(){
    console.log("initAddCar")

    document.querySelector("#add-car").addEventListener("click", addCar)
  }


  async function addCar() {

    const form = document.querySelector("#carForm")

    const newCar = {
      brand: form.brand.value,
      model: form.model.value,
      pricePrDay: parseFloat(form.pricePrDay.value),
      bestDiscount: parseInt(form.bestDiscount.value)
    }

    const options = {
      method: "POST",
      headers: {
          "Content-type":"application/json"},
      body: JSON.stringify(newCar)
    }

    try {
      const car = await fetch(url,options)
                  .then(res=> {
                    if(!res.ok) {
                      throw new Error("Car not found")
                    }
                    return res.json()
                  })
    
      document.querySelector("#result").innerText = JSON.stringify(car,null,3)
    
      } catch(e) {
                document.getElementById("error").innerText = e.message
                }
  }