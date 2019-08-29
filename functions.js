let mainContainer = document.getElementById("main_container");

for(let i=0; i<256; i++){
    let div = document.createElement('div');
    div.classList += "gridBlock";

    div.addEventListener("mouseover", function(event){
        event.target.style.backgroundColor = "black";
    });

    mainContainer.appendChild(div);
}

function clearDiv(){
    let grid = document.querySelectorAll("div.gridBlock");
    grid.forEach()
}

console.log("done");