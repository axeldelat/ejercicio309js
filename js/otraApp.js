//¿Como actualizar el número de id después de eliminar?
//Que no permita agregar koder si no están completamente llenos los campos
//Mostrar mensaje de no hay resultados cuando no hay resultados
//Función Única de printKoders

let kodersArray = [

]

//Objeto
function Koder(number,name,lastName,generation) {
        this.number = number
        this.name = name
        this.lastName = lastName
        this.generation = generation

        this.addKoder = function(){
            kodersArray.push(this)
        }
        this.addKoder()
}

document.getElementById("save-button").addEventListener("click", () =>{
    const number = kodersArray.length+1
    const name = document.getElementById('item-name').value
    const lastName = document.getElementById('item-lastName').value
    const generation = document.getElementById('item-category').value

    if (name === null || name === '' || lastName === null || lastName === '') {
        alert('Ingrese todos los datos')
    } else {
        const koder =new Koder( number, name, lastName, generation)
        printKoders()
        resetForm()    
    }

    // const koder =new Koder( number, name, lastName, generation)

    // printKoders()
    // resetForm()
})

// Funciones
function printKoders() {
    document.getElementById('tbodyKoders').innerHTML=""
    kodersArray.forEach(koder => {
        let { number, name, lastName, generation } = koder
        let listTr = document.createElement('tr')
        let idNumberTd = document.createElement('td')
        let idNumberText = document.createTextNode(number)
        idNumberTd.appendChild(idNumberText)
        listTr.appendChild(idNumberTd)

        let nameTd = document.createElement('td')
        let nameText = document.createTextNode(name)
        nameTd.appendChild(nameText)
        listTr.appendChild(nameTd)

        let lastNameTd = document.createElement('td')
        let lastNameText = document.createTextNode(lastName)
        lastNameTd.appendChild(lastNameText)
        listTr.appendChild(lastNameTd)

        let generationTd = document.createElement('td')
        let generationText = document.createTextNode(generation)
        generationTd.appendChild(generationText)
        listTr.appendChild(generationTd)

        let buttonTd = document.createElement('td')
        let buttonBtnTd = document.createElement('button')
        buttonBtnTd.setAttribute('id',number)
        buttonBtnTd.setAttribute('name','delete')
        let buttonX = document.createTextNode('X')
        buttonBtnTd.appendChild(buttonX)

        buttonTd.appendChild(buttonBtnTd)
        listTr.appendChild(buttonTd)

        document.getElementById('tbodyKoders').appendChild(listTr)
    });
}


function resetForm() {
    document.getElementById('koder-form').reset()
}

function resetFormSearch() {
    document.getElementById('form-search').reset()
}

function deleteKoder(element) {
    let currentElement = parseInt(element.id)-1
    kodersArray.splice(currentElement,1)
    console.log(currentElement)

    kodersArray.forEach (koder => {
        koder.number = parseInt(kodersArray.indexOf(koder))+1
    })    
}

function ToggleContent() {
    let radioValueQuery = document.getElementById('radio-query').checked
    let divQuery = document.getElementById('search-by-query');

    let radioValueGeneration = document.getElementById('radio-generation').value
    let divGen = document.getElementById('search-by-generation');

    switch (radioValueQuery) {
        case true:
            divQuery.style.display = "block"
            divGen.style.display = "none"
            break
        case false:
            divQuery.style.display = "none"
            divGen.style.display = "block"
        default:
            break;
    }
}

//filter Koders by Generation
document.getElementById('item-category-select').addEventListener( 'change' , (event) => {
    let filteredKodersArray = kodersArray.filter( koder => koder.generation === event.target.value)
    console.log(filteredKodersArray)
    let divResults = document.getElementById('results-search-by-generation')
    divResults.style.display = "block"
    document.getElementById('tbodyKodersGeneration').innerHTML=""


    filteredKodersArray.forEach(koder => {
        let { number, name, lastName, generation } = koder

        let listTr = document.createElement('tr')
        let idNumberTd = document.createElement('td')
        let idNumberText = document.createTextNode(number)
        idNumberTd.appendChild(idNumberText)
        listTr.appendChild(idNumberTd)

        let nameTd = document.createElement('td')
        let nameText = document.createTextNode(name)
        nameTd.appendChild(nameText)
        listTr.appendChild(nameTd)

        let lastNameTd = document.createElement('td')
        let lastNameText = document.createTextNode(lastName)
        lastNameTd.appendChild(lastNameText)
        listTr.appendChild(lastNameTd)

        let generationTd = document.createElement('td')
        let generationText = document.createTextNode(generation)
        generationTd.appendChild(generationText)
        listTr.appendChild(generationTd)

        document.getElementById('tbodyKodersGeneration').appendChild(listTr)
    });

    return console.log(filteredKodersArray)
})

//filter Koders by query ¿Copiar el fintro de arriba y mod a query?

document.getElementById('button-input').addEventListener( 'click' , () => {
    let filteredKodersArray2 = kodersArray.filter( koder => koder.name === document.getElementById('name-query').value)
    console.log(filteredKodersArray2)
    let divResults2 = document.getElementById('results-search-by-name')
    divResults2.style.display = "block"
    document.getElementById('tbodyKodersName').innerHTML=""
    
    filteredKodersArray2.forEach(koder => {
        let { number, name, lastName, generation } = koder

        let listTr = document.createElement('tr')
        let idNumberTd = document.createElement('td')
        let idNumberText = document.createTextNode(number)
        idNumberTd.appendChild(idNumberText)
        listTr.appendChild(idNumberTd)

        let nameTd = document.createElement('td')
        let nameText = document.createTextNode(name)
        nameTd.appendChild(nameText)
        listTr.appendChild(nameTd)

        let lastNameTd = document.createElement('td')
        let lastNameText = document.createTextNode(lastName)
        lastNameTd.appendChild(lastNameText)
        listTr.appendChild(lastNameTd)

        let generationTd = document.createElement('td')
        let generationText = document.createTextNode(generation)
        generationTd.appendChild(generationText)
        listTr.appendChild(generationTd)

        document.getElementById('tbodyKodersName').appendChild(listTr)        
    });        
    resetFormSearch()
    return console.log(filteredKodersArray2)
})

// Listeners
document.getElementById('tbodyKoders').addEventListener('click', function(e) {
    console.log(e.target)
    deleteKoder(e.target)

    printKoders()
})

