// function welcome(name,callback){
//     console.log(`hiii ${name} welcome function `)
//     callback(name)
// }
// function orderfromguest(name,callback) {
//     console.log(`hiii ${name} from order function `)
//     callback(name)
// }
// function dispatch(name,callback){
//     console.log(`hiii ${name} dispatch function `)
//     callback(name)
// }
// function greeting(name){
//     console.log(`hiii ${name} greeting function `) 
// }
// function registerin(name,callback){
//     console.log(`hiii ${name} registerin function `)
//     setTimeout(   ()=>{ callback(name)},2000   )
// }
   
// registerin("sanjay",(name)=>{
//     welcome("noorul",(name)=>{
//         orderfromguest("arafat",(name)=>{
//             dispatch("jabar",(name)=>
//             greeting("aakifah")  
//              )
//     })
//     })
// })

// person has to be register
// pick up a projects
// number of products 
// dispatched
// delivery made

function register(payer,callback){
    console.log(`hiii ${payer} registered successfully`)
    callback(payer)
}
function pickup(product,callback){
    console.log(`you    picked up a  ${product} `)
    callback()
}

function number(engal,callback){
    console.log(`hiii  ${engal} product picked up successfully`)
    callback()

}
function dispatch(yes,callback){
    console.log(`your order is dispatched`)
    callback(yes)
}
function delivery(del){
    console.log(`your order is ${del}`)
}

register("noorul",()=>{
    pickup("tv",()=>{
        number("1",()=>{
            dispatch("yes",()=>{
                delivery("delivered")
        })
    })
  })
})


