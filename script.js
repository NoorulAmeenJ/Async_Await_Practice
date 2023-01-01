function welcome(name,callback){
    console.log(`hiii ${name} welcome function `)
    callback(name)
}
function orderfromguest(name,callback) {
    console.log(`hiii ${name} from order function `)
    callback(name)
}
function dispatch(name,callback){
    console.log(`hiii ${name} dispatch function `)
    callback(name)
}
function greeting(name){
    console.log(`hiii ${name} greeting function `) 
}
function registerin(name,callback){
    console.log(`hiii ${name} registerin function `)
    callback(name)
}
registerin("sanjay",(name)=>{
    welcome(name,(name)=>{
        orderfromguest(name,(name)=>{
            dispatch(name,()=>
            greeting()  
             )
    })
    })
})


