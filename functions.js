let mainContainer = document.getElementById("main_container");

for(let i=0; i<256; i++){
    let div = document.createElement('div');
    div.classList += "gridBlock";
    mainContainer.appendChild(div);
}

console.log("done");