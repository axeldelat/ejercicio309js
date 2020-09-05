let kodersArray = [
    {
        idNumber: 1,
        name:"Luis",
        lastName:"Bastida",
        generacion: "9na. Gen."        
    },
    {
        idNumber: 2,
        name:"Jose",
        lastName:"Haro",
        generacion: "8na. Gen."
    },
    {
        idNumber: 3,
        name:"Axel",
        lastName:"De la Torre",
        generacion: "7na. Gen."
    }
]

// const paintArray = () => {
//     // document.getElementById("papelería").innerHTML = ""
//     // document.getElementById("ropa").innerHTML = ""
//     // document.getElementById("alimentos").innerHTML = ""
//     thingsArray.forEach( thing => {
//         let { category, name } = thing;
//         let listItem = document.createElement("li")
//         let listItemText = document.createTextNode(name)
//         listItem.setAttribute("class", "list-group-item")
//         listItem.appendChild(listItemText)
//         switch( category ){
//             case "Alimentos":
//                 document.getElementById("alimentos").appendChild(listItem)
//                 break
//             case "Ropa":
//                 document.getElementById("ropa").appendChild(listItem)
//                 break
//             case "Papelería":
//                 document.getElementById("papelería").appendChild(listItem)
//                 break
//         }
//     })
// }

// paintArray()


const paintArray = () => {
    document.getElementById('tbodyKoders').innerHTML = ""
    kodersArray.forEach( koder => {    
        let {idNumber, name, lastName, generacion} = koder
        let listTr = document.createElement('tr')
        let idNumberTd = document.createElement('td')
        let idNumberText = document.createTextNode(idNumber)
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
    
        let generacionTd = document.createElement('td')
        let generacionText = document.createTextNode(generacion)
        generacionTd.appendChild(generacionText)
        listTr.appendChild(generacionTd)
    
        let buttonTd = document.createElement('td')
        let buttonBtnTd = document.createElement('button')    
        // buttonBtnTd.setAttribute('class','close')        
        buttonBtnTd.setAttribute('id','close')
        let buttonX = document.createTextNode('X')
        buttonBtnTd.appendChild(buttonX)
        
        buttonTd.appendChild(buttonBtnTd)    
        listTr.appendChild(buttonTd)
       
        document.getElementById('tbodyKoders').appendChild(listTr)        
    })
} 
    
paintArray()

document.getElementById("save-button").addEventListener("click", () =>{
    let idNumber = kodersArray.length+1
    let name = document.getElementById("item-name").value
    let lastName = document.getElementById("item-lastName").value
    let generacion = document.getElementById("item-category").value
    let itemObject = {idNumber,name,lastName,generacion}
    console.log(itemObject)
    kodersArray.push(itemObject)
    console.log(kodersArray)
    paintArray()
})

document.getElementById("close").addEventListener("click", () => {
    document.getElementsByTagName('tr').innerHTML = ""    
})

