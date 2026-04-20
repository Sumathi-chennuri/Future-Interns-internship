function addLead() {
    const name = document.getElementById("name").value;
    const status = document.getElementById("status").value;

    fetch('http://localhost:3000/leads', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name, status})
    });

    loadLeads();
}

function loadLeads() {
    fetch('http://localhost:3000/leads')
    .then(res => res.json())
    .then(data => {
        let list = document.getElementById("list");
        list.innerHTML = "";
        data.forEach(l => {
            let li = document.createElement("li");
            li.textContent = l.name + " - " + l.status;
            list.appendChild(li);
        });
    });
}
