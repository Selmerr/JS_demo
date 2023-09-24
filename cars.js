const url = "http://localhost:8080/api/cars"
document.getElementById("btn-get-all").addEventListener("click", getAll)
document.getElementById("btn-find-car").addEventListener("click",getACar)
document.getElementById("add-car").addEventListener("click", addCar)
document.querySelector("#get-car-to-edit").addEventListener("click", getCarEdit)
document.querySelector("#edit-car").addEventListener("click", editCar)

function addCar() {
    const form = document.querySelector("#carForm")

    const brand = form.brand.value;
    const model = form.model.value;
    const pricePrDay = parseFloat(form.pricePrDay.value);
    const bestDiscount = parseInt(form.bestDiscount.value);

    const newCar = {
        brand: brand,
        model: model,
        pricePrDay: pricePrDay,
        bestDiscount: bestDiscount
          };
        
const options = {
            method: "POST",
            headers: {
                "Content-type":"application/json"},
            body: JSON.stringify(newCar)
        
        }
        fetch(url,options)
        .then(res=>res.json())
        .then(carResponse=> {document.getElementById("new-car-response").innerText = JSON.stringify(carResponse,null,3)})
    }
// const getCars = function() {
//     const table = document.createElement("table");
//     const getAllDiv = document.querySelector('.item button#btn-get-all').parentNode;
//     const headerRow = document.createElement("tr")
//     headerRow.innerHTML = "<th>ID</th><th>brand</th><th>model</th><th>pricePrDay</th>";
//     const tablehead = document.createElement("thead")
//     const tablebody = document.createElement("tbody")
    
//     table.appendChild(tablehead).appendChild(headerRow)
//     table.appendChild(tablebody)
//     fetch("http://localhost:8080/api/cars")
//     .then(res=>res.json())
//     .then(data=> data.forEach(car => {
//         const row = document.createElement("tr")
//         row.innerHTML = `<td>${car.id}</td>
//         <td>${car.brand}</td>
//         <td>${car.model}</td>
//         <td>${car.pricePrDay}</td>`;
//         tablebody.appendChild(row)
//     })
//     )
//     getAllDiv.appendChild(table)
// }

function getAll() {
    fetch(url).then(res=>res.json())
    .then(cars=> {
        const tableRows = cars.map(car => `<tr>
                                            <td>${car.id}</td>
                                            <td>${car.brand}</td>
                                            <td>${car.model}</td>
                                            <td>${car.pricePrDay}</td>
                                            <td>${car.bestDiscount}</td>
                                            </tr>`)
                            const rowsAsString = tableRows.join("")
                            document.querySelector("#tbody").innerHTML = rowsAsString
    })
}

function getACar(){
  const id = document.getElementById("text-for-id").value
  fetch(url+"/"+id)
     .then(res=>{
        if(!res.ok){
          return alert("Car Not Found")
        }
        return res.json()
     })
     .then(car=> {
        document.getElementById("found-car").innerText = JSON.stringify(car,null,2)
    })
}

function getCarEdit() {
    const id = document.querySelector("#text-for-id2").value

    fetch(url+"/"+id)
        .then(res=>res.json())
        .then(car => {
            
            const form = document.querySelector("#edit-input").appendChild(document.createElement("form"))
            form.id = "edit-form";

            for (const property in car) {

                const div = document.createElement("div")
                div.className = "mb-3"
                form.appendChild(div)
                
                const label = document.createElement("label")
                label.innerText = property + ": "
                div.appendChild(label) 
                const input = document.createElement("input")
                input.name = property
                input.type="text"
                input.placeholder= car[property]
                input.value = car[property]

                if(car[property]==car.id) {
                    input.readOnly=true
                    
                }
                div.appendChild(input)
                    }               
                
        })

}
        

function editCar() {
    
    const form = document.querySelector("#edit-form")

    const id = form.id.value
    const brand = form.brand.value
    const model = form.model.value
    const pricePrDay = parseFloat(form.pricePrDay.value);
    const bestDiscount = parseInt(form.bestDiscount.value);


    const newCar = {
        id: id,
        brand: brand,
        model: model,
        pricePrDay: pricePrDay,
        bestDiscount: bestDiscount
          };
        
    const options = {
            method: "PUT",
            headers: {
                "Content-type":"application/json"},
            body: JSON.stringify(newCar)
            
        
        }


        fetch((url+"/"+id),options)
        .then(res=>res.json())
        .then(carResponse=> {document.getElementById("edit-input").innerText = carResponse
    })
}

