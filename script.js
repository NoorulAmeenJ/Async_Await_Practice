// // function welcome(name,callback){
// //     console.log(`hiii ${name} welcome function `)
// //     callback(name)
// // }
// // function orderfromguest(name,callback) {
// //     console.log(`hiii ${name} from order function `)
// //     callback(name)
// // }
// // function dispatch(name,callback){
// //     console.log(`hiii ${name} dispatch function `)
// //     callback(name)
// // }
// // function greeting(name){
// //     console.log(`hiii ${name} greeting function `) 
// // }
// // function registerin(name,callback){
// //     console.log(`hiii ${name} registerin function `)
// //     setTimeout(   ()=>{ callback(name)},2000   )
// // }
   
// // registerin("sanjay",(name)=>{
// //     welcome("noorul",(name)=>{
// //         orderfromguest("arafat",(name)=>{
// //             dispatch("jabar",(name)=>
// //             greeting("aakifah")  
// //              )
// //     })
// //     })
// // })

// // person has to be register
// // pick up a projects
// // number of products 
// // dispatched
// // delivery made

// function register(payer,callback){
//     console.log(`hiii ${payer} registered successfully`)
//     callback(payer)
// }
// function pickup(product,callback){
//     console.log(`you    picked up a  ${product} `)
//     callback()
// }

// function number(engal,callback){
//     console.log(`hiii  ${engal} product picked up successfully`)
//     callback()

// }
// function dispatch(yes,callback){
//     console.log(`your order is dispatched`)
//     callback(yes)
// }
// function delivery(del){
//     console.log(`your order is ${del}`)
// }

// register("noorul",()=>{
//     pickup("tv",()=>{
//         number("1",()=>{
//             dispatch("yes",()=>{
//                 delivery("delivered")
//         })
//     })
//   })
// })
// // -----------day 2 --------------------------------------------------------

// function first(aaki){
//     console.log("first")
//     setTimeout(second,1000)
//     third()
//     fourth()
    
// }
// function second(aaki){
//     console.log("second")
// }
// function third(aaki){
//     console.log("third")
// }
// function fourth(aaki){
//     console.log("fourth")
// }
// first()

// answer
// first
// third
// fourth
// second

// function first(callback){
//     console.log("first")
//    setTimeout( callback, 3000)

// }
// function second(callback){
//     console.log("second")
//     callback()
// }
// function third(callback){
//     console.log("third")
//    setTimeout( callback,5000)
// }
// function fourth(callback){
//     console.log("fourth")
// }


// first(()=>{
//        second(()=>{
//         third(()=>{
//            fourth()
//       })
//     })
// })

// first
// second
// third
// fourth

let taskCompletion = 600;


// // //producer of promise
// let promise = new Promise(    (noorul, ameen)=>{
//         setTimeout( ()=>{
//             if(taskCompletion >= 75){
//                 noorul("correct")
//             } else {
//                 ameen("wrong")
                
//             }    
//         },1000)
//     })
//  console.log(promise)

// //   setTimeout(()=>{ console.log(promise) },3000)

//   promise.then(()=>{
//     console.log(promise)
//   }).catch((err)=>{
//     console.log(err)
//   })
// // if u use then means , it won't show pending , 
//   console.log("dappa")

var keer = 50
  var newpromise = new Promise((fulfill,reject)=>{
    
       fulfill(keer)
        // reject(keer)
    
 
  })


  // console.log(newpromise)

newpromise.then((ka)=>{
    console.log(ka)
    return ka
})
.then((ku)=>{
    console.log(ku*2)
    return ku
})
.then((ke)=>{
    console.log(ke-12)
    return ke
}).catch((e)=>{
  console.log(e)
})
