const container = document.querySelector("#container");

const table = document.createElement("table");
table.style.borderCollapse = "collapse";

for (let row = 0; row < 16; row++) {
    const tr = document.createElement("tr");

    for (let col = 0; col < 16; col++) {
        const tc = document.createElement("tc");
        tc.addEventListener('mouseenter', function() {
            tc.style.backgroundColor = 'red';
        });
        tr.appendChild(tc);
    }

    table.appendChild(tr);
}



container.appendChild(table);
