const container = document.querySelector(".container")

function createGrid (number){
    for (i=0; i<number; i++){

        let divColumn = document.createElement("div");
        divColumn.id = "column" + i;
        container.appendChild(divColumn).classList.add("column");
        let divRow = document.getElementById("column" + i);

        for (x=1; x<=number; x++){
                let newRow = document.createElement("div");
                newRow.addEventListener("mouseover", () =>{
                    newRow.style.backgroundColor = colorChoice;
                })
                divRow.appendChild(newRow).classList.add("row");
                }
        }
}

function clear () {
    container.innerHTML = "";
}

const submitButt = document.querySelector("#submit")
submitButt.addEventListener("click", ()=> {
    let inputUser = document.querySelector("#choice").value;
    clear();
    createGrid(inputUser)
})

let colorChoice = "black";

const colorButt = document.querySelector("#colorchoice")
colorButt.addEventListener("input", () =>{
    colorChoice = colorButt.value;
})
