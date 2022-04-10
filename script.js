const container = document.querySelector(".container"),
    submitCourse = document.querySelector("#submitCourse")
container.addEventListener("submit", ventanas)

function ventanas(e){
    e.preventDefault()
    submitCourse.disabled = true
    let materias = parseInt(document.querySelector("#materias").value)
    console.log({materias})

    createDivs(materias)
}

function createDivs(materias){
    let dataPrint = document.createElement("div"),
        sumativa = ""
    for(j=0;j<4;j++){
        sumativa +=`
        <form>
            <p>
                Sumativa ${j+1}
            </p>
            <input type="number" placeholder="1-100" id="n${j+1}">
        </form>
        `
        }
    for(i=0;i<materias;i++){
        dataPrint.innerHTML +=`
        <div class="ventanas">
            <input type="text" placeholder="Nombre del curso">
            <div>
                ${sumativa}
            </div>
        </div>
        `
        container.appendChild(dataPrint)
    }
}