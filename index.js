const container = document.querySelector("#container");

const table = document.createElement("table");
table.style.borderCollapse = "collapse";

for (let row = 0; row < 16; row++) {
    const tr = document.createElement("tr");

    for (let col = 0; col < 16; col++) {
        const tc = document.createElement("tc");
        tc.style.width = "30px";
        tc.style.height = "30px";
        tc.style.border = "1px solid black";
        tr.appendChild(tc);
    }

    table.appendChild(tr);
}

container.appendChild(table);
