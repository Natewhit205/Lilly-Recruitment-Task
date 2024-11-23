async function searchHandler() {
    medicineName = document.getElementById("search-field").value;
    searchError = document.getElementById("search-error-message")
    searchError.innerHTML = "";
    let data = {};
    const searchAllUrl = "http://localhost:8000/medicines";
    let url = searchAllUrl;
    let single = false;

    if (medicineName != "") {
        // Get specific medicine
        url = `${searchAllUrl}/${medicineName}`;
        single = true;
    }

    try {
        let response = await fetch(url);
        data = await response.json();
        if (data["error"]) {
            searchError.innerHTML = data["error"];
            let response = await fetch(searchAllUrl);
            data = await response.json();
            single = false;
        }
        updateTable(data, single);
    } catch (error) {
        console.log(error); // Handle any errors
        searchError.innerHTML = "No connection to server";
    }
}

function updateTable(data, single) {
    let tableBody = document.getElementById('table-body');
    tableBody.innerHTML = ''; //Clear medicine rows
    let rowIndex = 1;

    if (single) {
        data = {medicines: [data]};
    }

    for (let i = 0; i < data["medicines"].length; i++) {
        const medicine = data["medicines"][i];

        if (medicine["name"] == "" || medicine["price"] == null) {
            continue;
        }

        row = tableBody.insertRow();
        medName = row.insertCell(0);
        medPrice = row.insertCell(1);
        medName.innerHTML = medicine["name"];
        medPrice.innerHTML = `£${medicine["price"].toFixed(2)}`; // Format all prices to 2 decimal places

        rowIndex++;
    }
}

document.getElementById("add-form").onsubmit = async function(event) {
    event.preventDefault();

    let url = "http://localhost:8000/create";
    const data = new FormData(this);

    addText = document.getElementById("add-message")
    addText.innerHTML = "";

    try {
        let response = await fetch(url, {
            method: this.method,
            body: data,
        });

        serverResponse = await response.json();
        addText.innerHTML = serverResponse["message"];
        searchHandler();
    } catch (error) {
        console.log(error);
    }
}

function initTable() {
    searchHandler();
}

initTable();