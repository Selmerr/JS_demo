import { url } from "../../settings.js"


export function initFindCar(){
  console.log("initFindCar")
  document.querySelector("#result").innerText = ""
  document.querySelector("#car-id").value = ""
  document.querySelector("#btn").addEventListener("click", findCar)

}

export async function findCar() {
  document.getElementById("error").innerText = ""
  const id = document.getElementById("car-id").value
  try {
  const car = await fetch(url+"/"+id)
              .then(res=> {
                if(!res.ok) {
                  throw new Error("Car not found")
                }
                return res.json()
              })

  document.querySelector("#result").innerText = JSON.stringify(car,null,3)
  return car;

  } catch(e) {
            document.getElementById("error").innerText = e.message
            }
}