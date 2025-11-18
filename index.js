const container = document.querySelector("#container");

function createTable(n) {
    const table = document.createElement("table");
    table.style.borderCollapse = "collapse";

    if (n > 100) {
        alert("Input is higher than 100, try again with a smaller number.");
      } else if (!Number.isInteger(n)) {
        alert("Input is not a whole number, try again.");
      } else if (n < 0) {
        alert("Input is less than 0. Please enter a number between 0 and 100.")
      } else {
        for (let row = 0; row < n; row++) {
            const tr = document.createElement("tr");
    
            for (let col = 0; col < n; col++) {
                const tc = document.createElement("tc");
                tc.addEventListener('mouseenter', function() {
                    tc.style.backgroundColor = 'red';
                });
                tr.appendChild(tc);
            }
    
            table.appendChild(tr);
        }
    
        return table;
      }
}

container.appendChild(createTable(16));

const btn = document.querySelector('#btn');

btn.addEventListener("click", function() {
    let input = prompt("Enter the amount of squares per side you \
want for the new grid. (max 100 squares)");
    let n = Number(input);


  container.innerHTML = "";

  container.appendChild(createTable(n));
});