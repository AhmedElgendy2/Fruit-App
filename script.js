const fruits = [
    {
        name: "Apple",
        category: "Alkaline",
        price: "40/kg",
        description: "Improves heart health and digestion",
        image: "images/apple.jpg",
        supplier: [
            {
                name: "Ahmed",
                since: "2023",
                city: "Cairo",
                contact: "Mahmoud",
                phone: "01119711349"
            },
            {
                name: "Moustafa",
                since: "2021",
                city: "Giza",
                contact: "Abdlsalam",
                phone: "01125112452"
            },
            {
                name: "Mahmoud",
                since: "2024",
                city: "Alexandria",
                contact: "Abdlsalam",
                phone: "01125556422"
            },
            {
                name: "Hassan",
                since: "2022",
                city: "Cairo",
                contact: "Gamal",
                phone: "01222354472"
            },
            {
                name: "Hazem",
                since: "2020",
                city: "Aswan",
                contact: "Ramez",
                phone: "01226245434"
            },
            {
                name: "Hany",
                since: "2022",
                city: "Shohag",
                contact: "Khalaf",
                phone: "01226245434"
            }
        ]
    },
    {
        name: "Mango",
        category: "Acidic",
        price: "30/kg",
        description: "Rich vitamins improves eye health",
        image: "images/mango.jpg",
        supplier: [
            {
                name: "Moustafa",
                since: "2023",
                city: "Giza",
                contact: "Moustafa",
                phone: "01119711349"
            },
             {
                name: "Moamen",
                since: "2019",
                city: "Cairo",
                contact: "Moustafa",
                phone: "01119711349"
            },
            {
                name: "Fawzy",
                since: "2022",
                city: "Alexandria",
                contact: "Amgad",
                phone: "01125556422"
            },
            {
                name: "Zeyad",
                since: "2021",
                city: "Cairo",
                contact: "Gamal",
                phone: "01222354472"
            },
            {
                name: "Tarek",
                since: "2020",
                city: "Aswan",
                contact: "Islam",
                phone: "01226245434"
            },
            {
                name: "Naser",
                since: "2022",
                city: "Shohag",
                contact: "Moaaz",
                phone: "01226245434"
            }
        ]
    },
    {
        name: "Banana",
        category: "Alkaline",
        price: "50/kg",
        description: "High potassium gives energy",
        image: "images/banana.jpg",
        supplier: [
            {
                name: "Hassan",
                since: "2018",
                city: "Cairo",
                contact: "Omar",
                phone: "01119711349"
            },
            {
                name: "Gamal",
                since: "2024",
                city: "Giza",
                contact: "Mahmoud",
                phone: "01119711349"
            },
            {
                name: "Amr",
                since: "2024",
                city: "Alexandria",
                contact: "Moustafa",
                phone: "01125556422"
            },
            {
                name: "Mina",
                since: "2022",
                city: "Cairo",
                contact: "Malak",
                phone: "01222354472"
            },
            {
                name: "Adel",
                since: "2020",
                city: "Aswan",
                contact: "Abdelrahman",
                phone: "01226245434"
            },
            {
                name: "Nabil",
                since: "2022",
                city: "Shohag",
                contact: "Reda",
                phone: "01226245434"
            }
        ]
    },
    {
        name: "Orange",
        category: "Acidic",
        price: "30/kg",
        description: "Rich in vitamin C",
        image: "images/orange.jpg",
        supplier: [
            {
                name: "Hamdy",
                since: "2023",
                city: "Giza",
                contact: "Moustafa",
                phone: "01119711349"
            },
             {
                name: "Omar",
                since: "2019",
                city: "Cairo",
                contact: "Karam",
                phone: "01119711349"
            },
            {
                name: "Sayed",
                since: "2022",
                city: "Alexandria",
                contact: "Fayez",
                phone: "01125556422"
            },
            {
                name: "Abdallah",
                since: "2021",
                city: "Cairo",
                contact: "Gamal",
                phone: "01222354472"
            },
            {
                name: "Tarek",
                since: "2020",
                city: "Aswan",
                contact: "Islam",
                phone: "01226245434"
            },
            {
                name: "Naser",
                since: "2022",
                city: "Shohag",
                contact: "Moaaz",
                phone: "01226245434"
            }
        ]
    }
];

let currentSuppliers = [];
let activeSuppliers = [];

// ================= FRUITS =================
const fruitList = document.getElementById("fruitList");

function displayFruits(data) {
    fruitList.innerHTML = "";

    data.forEach((fruit, index) => {
        const div = document.createElement("div");
        div.className = "fruit-item";

        div.innerHTML = `
            <img src="${fruit.image}" width="50">
            <div>
                <h4>${fruit.name}</h4>
                <p>${fruit.category}</p>
                <p>${fruit.price}</p>
            </div>
        `;

        div.onclick = () => selectFruit(index);
        fruitList.appendChild(div);
    });
}

displayFruits(fruits);

// FILTER FRUITS (LEFT)
function filterFruits() {
    const value = document.getElementById("fruitFilter").value;

    if (value === "") {
        displayFruits(fruits);
    } else {
        const filtered = fruits.filter(f => f.category === value);
        displayFruits(filtered);
    }
}

// SEARCH
document.getElementById("search").addEventListener("input", function () {
    const value = this.value.toLowerCase();

    const filtered = fruits.filter(f =>
        f.name.toLowerCase().includes(value)
    );

    displayFruits(filtered);
});

// SELECT FRUIT
function selectFruit(index) {
    const fruit = fruits[index];

    document.getElementById("fruitName").innerText = fruit.name;
    document.getElementById("fruitImage").src = fruit.image;
    document.getElementById("fruitDesc").innerText = fruit.description;

    document.getElementById("moreData").innerText =
        `Type: ${fruit.category} | Price: ${fruit.price}`;

    loadSupplier(fruit.supplier);
}

// ================= SUPPLIER =================
function loadSupplier(data) {
    currentSuppliers = data;
    activeSuppliers = data;
    renderTable(activeSuppliers);
}

function renderTable(data) {
    const table = document.getElementById("supplierTable");
    table.innerHTML = "";

    data.forEach(s => {
        table.innerHTML += `
            <tr>
                <td>${s.name}</td>
                <td>${s.since}</td>
                <td>${s.city}</td>
                <td>${s.contact}</td>
                <td>${s.phone}</td>
            </tr>
        `;
    });
}

// FILTER TABLE (CITY)
function filterTable() {
    const city = document.getElementById("cityFilter").value;

    if (city === "") {
        activeSuppliers = currentSuppliers;
    } else {
        activeSuppliers = currentSuppliers.filter(s => s.city === city);
    }

    renderTable(activeSuppliers);
}

// SORT FIXED
function sortTable(type) {
    let sorted = [...activeSuppliers];

    if (type === "name") {
        sorted.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (type === "since") {
        sorted.sort((a, b) => Number(a.since) - Number(b.since));
    }

    activeSuppliers = sorted;
    renderTable(activeSuppliers);
}

// TABS
function showTab(tab) {
    document.getElementById("supplier").style.display = "none";
    document.getElementById("more").style.display = "none";

    document.getElementById(tab).style.display = "block";
}

// BUTTONS
function saveData() {
    alert("Saved!");
}

function cancelData() {
    alert("Canceled!");
}