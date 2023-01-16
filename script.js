// // // function welcome(name,callback){
// // //     console.log(`hiii ${name} welcome function `)
// // //     callback(name)
// // // }
// // // function orderfromguest(name,callback) {
// // //     console.log(`hiii ${name} from order function `)
// // //     callback(name)
// // // }
// // // function dispatch(name,callback){
// // //     console.log(`hiii ${name} dispatch function `)
// // //     callback(name)
// // // }
// // // function greeting(name){
// // //     console.log(`hiii ${name} greeting function `) 
// // // }
// // // function registerin(name,callback){
// // //     console.log(`hiii ${name} registerin function `)
// // //     setTimeout(   ()=>{ callback(name)},2000   )
// // // }
   
// // // registerin("sanjay",(name)=>{
// // //     welcome("noorul",(name)=>{
// // //         orderfromguest("arafat",(name)=>{
// // //             dispatch("jabar",(name)=>
// // //             greeting("aakifah")  
// // //              )
// // //     })
// // //     })
// // // })

// // // person has to be register
// // // pick up a projects
// // // number of products 
// // // dispatched
// // // delivery made

// // function register(payer,callback){
// //     console.log(`hiii ${payer} registered successfully`)
// //     callback(payer)
// // }
// // function pickup(product,callback){
// //     console.log(`you    picked up a  ${product} `)
// //     callback()
// // }

// // function number(engal,callback){
// //     console.log(`hiii  ${engal} product picked up successfully`)
// //     callback()

// // }
// // function dispatch(yes,callback){
// //     console.log(`your order is dispatched`)
// //     callback(yes)
// // }
// // function delivery(del){
// //     console.log(`your order is ${del}`)
// // }

// // register("noorul",()=>{
// //     pickup("tv",()=>{
// //         number("1",()=>{
// //             dispatch("yes",()=>{
// //                 delivery("delivered")
// //         })
// //     })
// //   })
// // })
// // // -----------day 2 --------------------------------------------------------

// // function first(aaki){
// //     console.log("first")
// //     setTimeout(second,1000)
// //     third()
// //     fourth()
    
// // }
// // function second(aaki){
// //     console.log("second")
// // }
// // function third(aaki){
// //     console.log("third")
// // }
// // function fourth(aaki){
// //     console.log("fourth")
// // }
// // first()

// // answer
// // first
// // third
// // fourth
// // second

// // function first(callback){
// //     console.log("first")
// //    setTimeout( callback, 3000)

// // }
// // function second(callback){
// //     console.log("second")
// //     callback()
// // }
// // function third(callback){
// //     console.log("third")
// //    setTimeout( callback,5000)
// // }
// // function fourth(callback){
// //     console.log("fourth")
// // }


// // first(()=>{
// //        second(()=>{
// //         third(()=>{
// //            fourth()
// //       })
// //     })
// // })

// // first
// // second
// // third
// // fourth

// // let taskCompletion = 600;


// // // //producer of promise
// // let promise = new Promise(    (noorul, ameen)=>{
// //         setTimeout( ()=>{
// //             if(taskCompletion >= 75){
// //                 noorul("correct")
// //             } else {
// //                 ameen("wrong")
                
// //             }    
// //         },1000)
// //     })
// //  console.log(promise)

// // //   setTimeout(()=>{ console.log(promise) },3000)

// //   promise.then(()=>{
// //     console.log(promise)
// //   }).catch((err)=>{
// //     console.log(err)
// //   })
// // // if u use then means , it won't show pending , 
// //   console.log("dappa")

// // var keer = 50
// //   var newpromise = new Promise((fulfill,reject)=>{
    
// //        fulfill(keer)
// //         // reject(keer)
    
 
// //   })


//   // console.log(newpromise)

// // newpromise.then((ka)=>{
// //     console.log(ka)
// //     return ka
// // })
// // .then((ku)=>{
// //     console.log(ku*2)
// //     return ku*2
// // })
// // .then((ke)=>{
// //     console.log(ke-12)
// //     return ke
// // }).catch((e)=>{
// //   console.log(e)
// // })
// // day- 3started
// // var prom1 = new Promise((resolve, reject) =>{
// //   console.log("1st")
// //   resolve(10)
// //   // reject(119)
// // })
// // var prom2 = new Promise((resolve, reject) =>{
// //   console.log("2st")
// //   resolve(10)
// //   // reject(19)
// // })

// // var prom3 = new Promise((resolve, reject) =>{
// //   console.log("3st")
// //   // resolve(10)
// //   reject(199)
// // })
// // Promise.all([prom1, prom2, prom3])
// // .then(()=>{
// //   console.log("all done")
// // })
// // .catch((err)=>{
// //   console.log(err)
// // })
// // capital , latlag, flag , region , name, country codes
// // fetch started 
// // fetch("https://restcountries.com/v3.1/all")
// // .then((response)=>response.json())
// // .then((data)=>{})
//   // data.forEach((value,id)=>{
//   //  console.log( value.name.common,id)
//   //  data.map((value)=>{
//     // console.log( value.name.common)
//   // both is giving the sam eresult 
  
// // })
// // fetch("https://restcountries.com/v3.1/all")
// // .then((response)=>response.json())
// // .then((value)=>{ 
// // console.log(value)
// //   value.forEach((data)=>{
// //     aakifah(data.flags.svg,data.population)
// //   // console.log(`${data.flag} ${data.population} ${data.region} ${data.capital}`)
// //   })
// // })
// // .catch((err)=>console.log(err))
// // var ameen = document.getElementById("ameen")

// // function aakifah(name,na1) {
// //      ameen.innerHTML += 
// //    ` <div> ${name} ${na1} </div>  `
  
// // }

// // ////////////////////////////day-4 started 
// // function one (){
// //   console.log("before promise one()")
  
// //   return new Promise((resolve,reject) =>{
// //     setTimeout(()=>{
// //      resolve("first")
// //     },2000)
 
// //   })
// // }
// // function two (){
// //   console.log('two')
// // }
// // function three (){
// //   console.log('three')
// // }
// // function four(){
// //   console.log('four')
// // }
// // async function main(){
// //       let afirst = await one()
// //       console.log(afirst)
// //       two()
// //       three()
// //       four()
// // }
// // main().catch((e)=>console.log(e))
// // main()
// // function FetchData() {
// // var nn = fetch("https://restcountries.com/v3.1/all")
// //     return nn
// // }

// //  async function techData() {    
// //  var aa= await fetch("https://63b63e2458084a7af3acfd37.mockapi.io/students");
// //  var ae= await  aa.json()
// //  console.log(ae)}
// //  techData()
// //  ae.forEach ((element)=>{
// //           console.log( element.name.common)
// //  })
// // var destru = {
// //   ...ae,
// //   name: element.name.common,
// //   flag: element.flag,
// // }
 
// // }
// //     // function noorul(fetch){}
// //    techData()

// // let API = "https://63b63e2458084a7af3acfd37.mockapi.io/students";
// // console.log(API);
// // function readalldata() {
    
// //     //  var aa= await fetch("https://api-mobilespecs.azharimm.dev/latest");
// //     //  var ae= await  aa.json()
// //   fetch(API)
// //   .then((response) => console.log(response.json()))
// //   .then((data)=>{console.log(data)})


// // }
// // let API = "https://63b63e2458084a7af3acfd37.mockapi.io/noorul";
          
// //   async function readalldata(){
// //   var fried = await fetch(API)
// //   var chicken = await fried.json()
// //         console.log(chicken)       
// // }
// // readalldata()

// //  async function techData() {    
// //  var aa= await fetch("https://63ae58eeceaabafcf177e256.mockapi.io/users");
// //  var ae= await  aa.json()
// //  console.log(ae)}
// //  techData()

//  let API = "https://63b63e2458084a7af3acfd37.mockapi.io/noorul"
//  console.log(API)

//  function readalldata(){
//      fetch(API, {method: "GET"})
//      .then((response)=>response.json())
//      .then((data)=>(data))
//  }

// function createdata(){
//   let studentsdata= {
//     "name": "aakifah",
//     "place": "kaniyur1",
//   }
   
//   fetch(API, {
//     method: "POST",
//     body: JSON.stringify(studentsdata),
//     headers: {
//       "Content-Type": "application/json; charset=UTF-8" ,
//     },
//   }
//   )
//   .then((response)=>(response.json))
//   .then((data)=>(data))
//   return data
// } 




// createdata();
//  readalldata();





 
 var array = [5,6,8,9,10,11,12,13,14];
 array.map((item,id,wholearray)=> {
     console.log(`the item is ${item}
                    the id is ${id}`);
 })
 console.log("hellow")