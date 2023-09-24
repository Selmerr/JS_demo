// Function to fetch user data by ID
function getUser() {
    const inputElement = document.getElementById("id_from_input");
    const idfrominput = inputElement.value;
    let url = "https://jsonplaceholder.typicode.com/users"

    fetch(url+"/"+idfrominput)
        .then(res => res.json())
        .then(data => {
            const userInfo = document.getElementById("userInfo");
            userInfo.innerHTML = `
                <p>Name: ${data.name}</p>
                <p>Phone: ${data.phone}</p>
                <p></p>
                <h4>Address</h4>
                <p>Street: ${data.address.street}</p>
                <p>City: ${data.address.city}</p>
                <p>Zip: ${data.address.zipcode}</p>
                <p>Geo (lat,lng): ${data.address.geo.lat}, ${data.address.geo.lng}</p>
            `;
        });
}

// Function to fetch all users and display them in a table
function getAllUsers() {
    const userInfo = document.getElementById("userInfo");
    userInfo.innerHTML = ""; // Clear previous content

    const userTable = document.createElement("table");
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    // Define table headers
    const thName = document.createElement("th");
    thName.textContent = "Name";
    const thPhone = document.createElement("th");
    thPhone.textContent = "Phone";

    headerRow.appendChild(thName);
    headerRow.appendChild(thPhone);
    thead.appendChild(headerRow);
    userTable.appendChild(thead);

    const tbody = document.createElement("tbody");
    userTable.appendChild(tbody);

    const url = "https://jsonplaceholder.typicode.com/users";
    
    fetch(url)
        .then(res => res.json())
        .then(data => {
            data.forEach(user => {
                const bodyRow = document.createElement("tr");
                bodyRow.innerHTML = `
                    <td>${user.name}</td>
                    <td>${user.phone}</td>
                `;
                tbody.appendChild(bodyRow);
            });
            userInfo.appendChild(userTable);
        });
}
