let select1=[
    "data 1","data 2","data 3","data 4","data 5"
]
let select2=[ "data 1","data 2","data 3","data 4","data 5"]

let show=document.getElementById("select1")
let data =`<option value="" selected disabled > secin</option>`
for(let i=0;i<select1.length;i++){
data+=`<option value="" ${i}> ${select1.i}</option>`
}show.innerHTML=data