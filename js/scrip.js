// document.addEventListener("contextmenu" , (e) => {
//     e.preventDefault()
// })                                                // جزء قفل الانسبكت
// document.addEventListener("keydown" , (e) => {
//     if(e.key == "f12" || e.key == "I"){
//         e.preventDefault()
//     }
// })
// //////////////////////////////////////////////////////////////////////////
let inputProduct = document.getElementById("inputProduct")
let addBtn = document.getElementById("addBtn")
let count = document.getElementById("count")
let content = document.getElementById("content")
let edit = null
// ? //////////////////////////////////////////الشغل الجديد//////////////////////////////////

// drow

    
let allProducts = [
    {id : 1 , name : "iPhone 16" , price: "90000" , desc : "the new mobile" },
    {id : 2 , name : "Rolex Hours" , price: "40000" , desc : "the new mobile" },
    {id : 3 , name : "Glasses_dark" , price: "5000" , desc : "the new mobile" },
    {id : 4 , name : "AirPods_Max" , price: "10000" , desc : "the new mobile" },
]
count.innerHTML = `${allProducts.length} : عدد المنتاجات `

function drow(id){
    console.log(id)
    // content.innerHTML = JSON.stringify(allProducts)
    content.innerHTML = ""
    allProducts.forEach((ele) =>{
        content.innerHTML +=  `<button onclick="editBtn(${ele.id})">Edit</button> ${ele.id}  -  ${ele.name} =>  price :  ${ele.price}$ <button onclick="deletBtn(${ele.id})">X</button> </br> `
    })
    
}
drow(allProducts)

// edit 

function editBtn(id) {
    let findProduct = allProducts.find(f => f.id === id)
    if(findProduct){
        inputProduct.value = findProduct.name
        addBtn.removeAttribute("disabled")
        addBtn.innerText = "Save Edit"
        edit = id
    }
}

//add
addBtn.addEventListener("click", () => {
    if(inputProduct.value == ""){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "please fill data!",
            // footer: '<a href="#">Why do I have this issue?</a>'
        });
        return ;
    }
        
    let db = allProducts.some(d => d.name === inputProduct.value)
    if(db){
            alert("الاسم موجود مسبقا")
            return

    }

    if(edit){
    let findProduct = allProducts.find(f => f.id === edit)
    if(findProduct){
        findProduct.name = inputProduct.value
        drow()
    }
        edit = null
        addBtn.innerText = "Add"
    }else{
        let lasID = allProducts.length ? allProducts[allProducts.length -1].id : 0
        allProducts.push({id: ++lasID , name : inputProduct.value , price : prompt("ادخل السعر")})
        let newProduct = allProducts[allProducts.length -1]
            content.innerHTML += `<button onclick="editBtn(${newProduct.id})">Edit</button> ${newProduct.id}  -  ${newProduct.name} =>  price :  ${newProduct.price}$ <button onclick="deletBtn(${newProduct.id})">X</button>  </br> `
    
    }

    
    count.innerHTML = `${allProducts.length} :   عدد المنتاجات `
    inputProduct.value = ""
        // addBtn.setAttribute("disabled" , true)

})

// dell

function deletBtn(id){
    // allProducts.splice(id , 1)
    // console.log(allProducts)
    let index = allProducts.map((del) =>{
        return del.id
    } ).indexOf(id)
    
    if(index != -1){
        allProducts.splice(index , 1)
    }
    drow()
    count.innerHTML = `${allProducts.length} :   عدد المنتاجات `
    console.log(allProducts)
}

