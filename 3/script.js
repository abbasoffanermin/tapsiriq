

// let btn=document.getElementById("btn")
// let todo =[]
// function Add(){
//    let inp=document.getElementById("inp") 
// let list=document.getElementById("list")

// if(!inp.value){
//    alert("OLMAZ")
// }else{
//     todo.push(inp.value)
//  Show()
// }
// }
// function Delete(index){
// todo.splice(index,1)
// Show()
// }

// function Show(){
//     let data=""
//     todo.forEach(function(item,index){
//     data+=`<li class="list-group-item d-flex justify-content-between">${item} <button class="btn btn-danger" onclick="Delete(${index})">Delete</button></li>`
//     })
//     inp.value=""
//     list.innerHTML=data
// }











// let btn = document.getElementById("btn")
// let todo = []
// function Add() {
//     let inp = document.getElementById("inp")
//     let list = document.getElementById("list")
//     if (!inp.value) {
//         alert("OLMAZ")
//     } else {
//         todo.push(inp.value)
//         let data = ""
//         for (let i = 0; i < todo.length; i++) {
//             data += `<li class="list-group-item">${todo.length}</li>`
            
//         }
//         inp.value = ""
//         list.innerHTML = data
//     }

// }







// let btn = document.getElementById("btn")
// let todo = []
// function Add() {
//     let inp = document.getElementById("inp")
//     let list = document.getElementById("list")
//     if (!inp.value) {
//         alert("OLMAZ")
//     } else {
//         todo.push(inp.value)
//         let data = ""
//         for (let i in todo) {
//             data += `<li class="list-group-item">${inp.value}</li>`
            
//         }
//         inp.value = ""
//         list.innerHTML = data
//     }

// }





let btn = document.getElementById("btn")
let todo = []
function Add() {
    let inp = document.getElementById("inp")
    let list = document.getElementById("list")
    if (!inp.value) {
        alert("OLMAZ")
    } else {
        todo.push(inp.value)
        let data = ""
        for (let i of todo) {
            data += `<li class="list-group-item">${inp.value}</li>`
            
        }
        inp.value = ""
        list.innerHTML = data
    }

}


