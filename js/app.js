let button = document.querySelector("button")
let input = document.querySelector("input")
let box = document.querySelector(".box")
let i
let ary = ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa optio in eum ex ut consequatur hic doloribus, facilis ipsam aperiam!","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa optio in eum ex ut consequatur hic doloribus, facilis ipsam aperiam!","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa optio in eum ex ut consequatur hic doloribus, facilis ipsam aperiam!","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa optio in eum ex ut consequatur hic doloribus, facilis ipsam aperiam!","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa optio in eum ex ut consequatur hic doloribus, facilis ipsam aperiam!","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa optio in eum ex ut consequatur hic doloribus, facilis ipsam aperiam!","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa optio in eum ex ut consequatur hic doloribus, facilis ipsam aperiam!","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa optio in eum ex ut consequatur hic doloribus, facilis ipsam aperiam!","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa optio in eum ex ut consequatur hic doloribus, facilis ipsam aperiam!","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa optio in eum ex ut consequatur hic doloribus, facilis ipsam aperiam!","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa optio in eum ex ut consequatur hic doloribus, facilis ipsam aperiam!","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa optio in eum ex ut consequatur hic doloribus, facilis ipsam aperiam!","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa optio in eum ex ut consequatur hic doloribus, facilis ipsam aperiam!","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa optio in eum ex ut consequatur hic doloribus, facilis ipsam aperiam!","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa optio in eum ex ut consequatur hic doloribus, facilis ipsam aperiam!","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa optio in eum ex ut consequatur hic doloribus, facilis ipsam aperiam!","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa optio in eum ex ut consequatur hic doloribus, facilis ipsam aperiam!","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa optio in eum ex ut consequatur hic doloribus, facilis ipsam aperiam!",]



button.addEventListener("click",function(){

    i=0
    while(i<input.value){
        let lorem = ary[i]
        console.log(ary[i])
        box.innerHTML = box.innerHTML+lorem
        i++
    }
})
input.addEventListener("change",function(){
    box.innerHTML = ''
})


