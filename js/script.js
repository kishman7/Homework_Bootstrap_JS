window.addEventListener('load', Init);

function Init(){
    // const root = document.getElementById("root");
    const root = document.querySelector("#root");
    const container = document.createElement("div");
    container.setAttribute("class", "container");

    const row = document.createElement("div");
    row.setAttribute("class", "row");

    const col = document.createElement("div");
    col.setAttribute("class", "column");
    row.appendChild(col);
    const col1 = document.createElement("div");

    const cardTextCenter = document.createElement("div");
    cardTextCenter.setAttribute("class", "card text-center");
    col.appendChild(cardTextCenter);

    const cardHeader = document.createElement("div");
    cardHeader.setAttribute("class", "card-header");
    cardHeader.innerText = "Featured";
    cardTextCenter.appendChild(cardHeader);

    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");
    
    const cardTitle = document.createElement("h5");
    cardTitle.setAttribute("class", "card-title");
    cardTitle.innerText = "Special title treatment";
    cardBody.appendChild(cardTitle);
    cardTextCenter.appendChild(cardBody);
    
    const cardText = document.createElement("p");
    cardText.setAttribute("class", "card-text");
    cardText.innerText = "With supporting text below as a natural lead-in to additional content.";
    cardBody.appendChild(cardText);

    const btnPrimary = document.createElement("a");
    btnPrimary.setAttribute("href", "#");
    btnPrimary.setAttribute("class", "btn btn-primary");
    btnPrimary.innerHTML = "Go somewhere";
    cardBody.appendChild(btnPrimary);

    const cardFooter = document.createElement("div");
    cardFooter.setAttribute("class", "card-footer text-muted");
    cardFooter.innerHTML = "2 days ago";
    cardTextCenter.appendChild(cardFooter);

    col.appendChild(cardTextCenter);

    container.appendChild(row);
    root.appendChild(container);

}