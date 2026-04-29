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
                since: "2020",
                city: "Cairo",
                contact: "Mahmoud",
                phone: "01119711349"
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
                since: "2019",
                city: "Giza",
                contact: "Moustafa",
                phone: "01119711349"
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
                since: "2019",
                city: "Giza",
                contact: "Omar",
                phone: "01119711349"
            }
        ]
    }
    
];

// عرض الفواكه
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

// اختيار فاكهة
function selectFruit(index) {
    const fruit = fruits[index];

    document.getElementById("fruitName").innerText = fruit.name;
    document.getElementById("fruitImage").src = fruit.image;
    document.getElementById("fruitDesc").innerText = fruit.description;

    document.getElementById("moreData").innerText =
        `Type: ${fruit.category} | Price: ${fruit.price} | Supplier: ${fruit.supplier[0].name}`;

    loadSupplier(fruit.supplier);
}

// جدول الموردين
function loadSupplier(data) {
    const table = document.getElementById("supplierTable");
    table.innerHTML = "";

    data.forEach(s => {
        table.innerHTML += `
            <tr>
                <td>${s.name}</td>
                <td>${s.since}</td>
                <td>
                    <select>
                        <option>Cairo</option>
                        <option>Giza</option>
                    </select>
                </td>
                <td>${s.contact}</td>
                <td>${s.phone}</td>
            </tr>
        `;
    });
}

// Tabs
function showTab(tab) {
    document.getElementById("supplier").style.display = "none";
    document.getElementById("more").style.display = "none";

    document.getElementById(tab).style.display = "block";
}

// Search
document.getElementById("search").addEventListener("input", function() {
    const value = this.value.toLowerCase();

    const filtered = fruits.filter(f =>
        f.name.toLowerCase().includes(value)
    );

    displayFruits(filtered);
});

// Save / Cancel
function saveData() {
    alert("Saved!");
}

function cancelData() {
    alert("Canceled!");
}
