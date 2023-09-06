// TASK_1
// let width = prompt("duzbucaghin enini yazin")
// let height = prompt("duzbucahin hundurluyunu yazin")

// let S = width * height
// console.log(S)

// ***********************************************
//TASK_2

// let dateBirtday = prompt('Dogum ilinizi daxil edin')

// let currentDate = new Date()

// let todaysYear = currentDate.getFullYear()
// console.log(todaysYear)

// let clientsAge = todaysYear - dateBirtday
// console.log(clientsAge)

//************************************************** */
// TASK_3

// let setKm = prompt("mesafeni km ile yazin, biz onu mile cevirek")

// let km = setKm * 0.6214
// console.log(km)

// *******************************************************************************

// let comp = Honor;
// let price  = 2000;

// price -= 200

// console.log(price)

// let ed = +prompt('eded yaz')

// if(ed % 3 === 0){
//  console.log('fizz')
// }
// else if(ed % 2 === 0){
//  console.log('buzz')
// }
// else{
// console.log('fizbuzz')
// }

// let dil = prompt('dili daxil et')

// switch (dil) {
//   case 'eng':
//     console.log('welcome')
//     break
//   case 'ru':
//     console.log('dobro pojalivat')
//     break
//   case 'az':
//     console.log('xos geldiniz')
// }

// let dil = prompt('dili daxil edin')

//  let dilDaxilEt = {
//   eng: 'welcome',
//   ru: 'dobro',
//   az: 'salam'
//  }

// let message = dilDaxilEt[dil] ?? 'error'

// console.log(message);

// let model = parsInt(prompt('modeli yaz'))
// let qiymet = +prompt('qiymeti yaz')
// if(isNaN(qiymet)){
//  console.log('melumat sehfdir ')
// }

// if(qiymet < 300){
//  console.log(`${model} markali tel awagi seqmentdir`)
// }else if(qiymet <600){
//  console.log(`${model} orta seqment`)
// }else if(qiymet>=600){
//  console.log(`${model} yuxari seqment` )
// }

// ****************************************************

// let metn  = parseInt(prompt('metn daxil et'))

// if(metn ===123){
//  console.log('dogrudur')
//  } else{
//  console.log('yalnisdir')
// }

//********************************************************* */

// loop
/* let sum = 0;
let i = 10;

while(i < 100){
 sum += i
 i++
}
console.log(sum) */

//***************************************************** */

// let sum = 0

// for(i = 0; i<100; i++){
//  if(  i%5 === 0 &&i%3 !== 0 ){
//  sum += i;
//  i++
//  continue
// }else{
//  sum += i
// }
// console.log(sum)
// }
// *************************************************************************************************
// ***************************************************************************************************
// **************************************** LOOP- LESSON **********************************************

//*-0-DAN 100-E QEDER EDEDLERI CONSOLA CIXART

//  let i = 0
// while(i < 100){
//  console.log(i)
//  i++
// }

/////////////////////////////////////////////////////////////////////
// *EDED TAPMAQ OYUNU

// let cpudakiEded = Math.floor(Math.random() * 10)
// let userEded = +prompt('ededi daxil et')
// let count = 1

// while (userEded !== cpudakiEded) {
//  count++
//  if (userEded > cpudakiEded) {
//   userEded = +prompt('daha awagi')
//  } else {
//   userEded = +prompt('daha yuxari')
//  }
// }

// console.log(`duzdu, siz ededi ${count} cehde tapdiniz`)

////////////////////////////////////////////////////////////////////////////
// *BUTUN IKIREQEMLI EDEDLERIN CEMI

// let i = 10;
// let sum = 0;

// while(i < 100){
//  sum = sum + i
//  i++
//  console.log(sum)
// }

///////////////////////////////////////////////////////////////////////
//*  TASK   -----   FOR ILE 0-DAN  100E QEDER EDEDLERIN CEMI
// sum 10-dan boyuk olarsa saxla, o da 10-dan boyuk olan kimi  yazdirib saxliyacag
// let sum = 0
//  for(let i = 0; i< 10; i++){
//   if(sum > 10){
//    break
//   }
//   sum += i
//   console.log(` sum = ${sum}`)
//  }

// sum 10-dan boyuk olarsa davam eele, o da 10-dan boyuk olan kimi  yazdirib saxliyacag
// let sum = 0
//  for(let i = 0; i< 1000; i++){
//   if(sum > 21){
//    continue;
//   }
//   sum += i
//   console.log(` sum = ${sum}`)
//  }

// *TASK   --   1-den 100-E QEDER DONGU YARADIN
// *3 E BOLUNUB 5 E BOLUNMEYEN EDEDLERIN CEMINI CONSSOLA CIXART
// let sum = 0
// for (let i = 0; i < 100; i++) {
//   if (i % 3 === 0 && i % 5 !== 0) {
//     continue
//   }
// }

// *****************************************************************************************
// LOOP Praktice LESSSON
// *
// let sum = 0
// for (let i = 100; i < 1000; i += 10) {
//  sum+=i
//  i++
// }
// console.log(sum)

// let sum = 0
// for (let i = 10; i < 100; i++) {
//  if(i === 50){
//   sum += i
//   continue
//  }

//  }
//  console.log(sum)

// let i = 10
// let sum = 0
// while(i < 100){
//  sum+=i
//  i++
//  console.log(`i= ${i}`)
//  console.log(`sum = ${sum}`)
// }

// let sum = 0
// for(let i = 0; i<100; i++){
//  if(i%3 === 0&& i%5!==0){
//   sum+=i

//  }

// }

// console.log(sum)

// let sum = 0
// for(let i = 0; i<100; i++){
//  if(i%5 === 0){     //0+1+2+3+4+6+7+8+9+
//   continue
//  }
//  if(i%3!==0){
//   continue     //3+6+9 = 18
//  }
//  sum+= i

// }

// console.log(sum)

// *   ULDUZLAR ALTALTA   DOCUMENT.WRITE ILE

// for (let j = 1; j < 5; j++) {

// for (let i = 0; i < j; i++) {
//   document.write('*')
//  }
//  document.write('<br/>')
// }

// function niceName(name , icon){
// return  `${icon} ${name} ${icon}`

// }
// console.log(niceName('ali','🦁'))

// function isMale(gender) {
// if()
// console.log(isMale())

//*************************************************************************************************** */
// *Functions own lesson1*******************************************************************************

// function salamDe(){
//  console.log('salam')
// }
// salamDe()

// *2
// function salamGetir(name, time){
//  console.log(`ata ${name} emi sene ${time } vaxti salam gonderdi `)
// }

// salamGetir('asif','gunorta')
// salamGetir('Kamil','seher')
// salamGetir('Ilqar',' axsam')

// *3 TASK

// function niceName(ad, symvol){
//  return `${symvol} ${ad} ${symvol}`
// }
// let result = niceName('ali', '🦁')
// console.log(result)
// *4 TASK

// 'M', 'm' -true    'W', 'w' -false

// function isMale(gender){
// if(gender === 'M'|| gender === 'm'){
// return true
// }else{
//  return false
// }
// }
// let result = isMale('M')
// console.log(result)
/////////////////////////////////////////////////////////////////////////

// function isMale(gender){
// if(gender === 'M'|| gender === 'm'){   /* ------------------ BU QISA YAZILIW */
// return true
// }
// return false
// }
// let result = isMale('w')
// console.log(result)

//////////////////////////////////////////////////////////////////////////////

// function isMale(gender){
// return (gender === 'M'|| gender === 'm') ?true: false /* ---- BU DAHA QISA , TURNERY OPERATOR ILE */
// }
// let result1 = isMale('M')
// let result2 = isMale('m')
// let result3 = isMale('W')
// let result4 = isMale('w')
// console.log(result1)
// console.log(result2)
// console.log(result3)
// console.log(result4)

// const info = (name, brand, price) => `${name} bought his ${brand} ${price} $`

// console.log(info('Raman', 'Asus', 6000))

//***************** function2

// function sum(ed1, ed2, callback){
//  callback(ed1+ed2)
// }

// sum(1,2,
//  function(netice){
//   console.log(`Cavab:${netice}`)
//  }
//  )

//********************FUNCTION  CALBACK */

/* const sum = (num1,num2, callback) =>  {
 callback(num1 + num2)

  }

sum(1,2,
 function(netice){
  console.log(`cavab: ${netice}` )

 }
 ) */

//  const showResult = function (result) {
//   console.log(`The result is: ${result}`)
// }

// const calculator = (num1, num2, operator, callback) => {
//   switch (operator) {
//     case '+':
//       callback(num1 + num2)
//       break
//     case '-':
//       callback(num1 - num2)
//   }
// }

// calculator(2, 4, '+', showResult)
// calculator(2, 4, '-', showResult)
// calculator(3, 5, '-', showResult)

//  const operatorYaz = +prompt('oparatoru yazin')

////********************************** */ Callback-a aid

/* const showResult = function (result) {
  const lang = 'az'
  if (lang === 'eng') {
    console.log(`result is : ${result}`)
  } else if (lang === 'az') {
    console.log(`netice : ${result}`)
  }
}

const calculator = (num1, num2, operator, callback) => {
  switch (operator) {
    case '+':
      callback(num1 + num2)
      break
    case '-':
      callback(num1 - num2)
      break
    case '*':
      callback(num1 * num2)
      break
    case '/':
      callback(num1 / num2)
      break
  }
}

calculator(1, 2, '+', showResult)
calculator(1, 2, '-', showResult)
calculator(1, 2, '*', showResult)
calculator(1, 2, '/', showResult)
 */
////********************************** */ Callback-a aid
////********************************** */ Callback-a aid

//*Uzun  yaziliw
// const makeFormal = (ad, gender) => {
//    if(gender ===  'K'){
//     console.log(`Hi Mr . ${ad}`)
//    }else{
//     console.log(`Hi Ms ${ad}`)
//    }
// }

// makeFormal('Raman', 'K')
// makeFormal('Nermin', 'Q')

//*Qisa  yaziliw
// const makeFormal = (ad, gender) => {
//    return (gender === 'K')? `Hi Mr${ad}`: `Hi Ms ${ad}`
// }
// console.log(makeFormal('Namiq', 'K'));
// console.log(makeFormal('Nermin', 'Q'))
////********************************** */ Callback-a aid
///////////////////////////////////
//************************* */  Funksiyadan funksiya return etmek ****************
// const makeFormal = (gender) => {
//   if(gender === 'K'|| gender === 'k'){
//     // return `Hi Mr ${ad}`
//     return (ad) =>  `Hi Mr ${ad}`
//   }else{
//     return (ad) => `Hi Ms ${ad}`
//   }
// }

// const forMan = makeFormal('K')
// const forWoman = makeFormal('K')
// console.log(forMan('Ali'))

// // obj
// const product = {
//   ad: 'Honor',
//   price: 1200
// }

// product.price -= product.price /10

// console.log(product)

// let salaris = {John:100, Ann:160, peter: 130}

// let sum = 0
// for (let key in salaris){
//   // sum += salaris['key'];
//   console.log(key)

// }
// console.log(sum)
//************************* */  Object *****************************
/*  const obj = {
  ad: 'Ali',
  doing: () => {
    console.log('ders kecirik')
  }
 }

 console.log(obj)
 console.log(obj['ad'])
 console.log(obj.doing()) */

//**--------------------------------------- */PRIMITIVE TYPE  MISAL

/*  let a=12
 const change = (ed) => {
    ed = 15
    console.log(ed)
 }
 console.log(change(a))
 console.log(a) */

//**--------------------------------------- */REFERANCE TYPE  MISAL
/*   let obj= {a:12}
  const change = (object) => {
     object.ad = 'ALi'
  }

console.log(change(obj))
console.log(obj) */

//**---------- obj copyalamaq  1-ci yol

/* const obj = {
  carName:'zapi',
  year: 2021,
  color: 'red'
}

const obj2 = {}
for (let key in obj){
  obj2[key] = obj[key]
}
console.log(obj)
console.log(obj2)
 */

//**---------- obj copyalamaq  2-ci yol
/* const obj = {
  carName:'zapi',
  year: 2022,
  color: 'red'
}

const obj2 = {...obj}
console.log(obj)
console.log(obj2)
 */

// ****************************************Object   THis

// const ali = {
//   name:'Ali',
//   age:23,
//   work: 'dev',
//   doing(){
//     console.log(`${this.name} is ${this.work}`)
//   }
// }
// const raman = {
//   name:'raman',
//   age:33,
//   work: 'sofer',
//   doing(){
//     console.log(`${this.name} is ${this.work}`)
//   }
// }
// ali.doing()
// raman.doing()                 ----------------evezine  ===>>>>>
/////////////////////////////////////////////////////////////////
/* const createUser = (ad, age, work) => {
  return{
    ad,
    age,
    work,
    doing(){
      console.log(`${this.ad} is ${this.work}`)
    }
  }
 
}
const raman = createUser('raman', 33, 'usta')
const sada = createUser('sada', 32, 'satici')
const aydan = createUser('qizim', 3, 'oynayir')
raman.doing()
sada.doing()
aydan.doing() */ //amma bu da yox    bunun asagsindaki yeni CONSUTRUCTOR ======>>>>

//////////////////////////////////////////////////////////////////
/* const User = (ad, yas, work) => {
  this.ad = ad
  this.yas = yas
  this.work = work
  this.doing = () =>{
    console.log(`${ad} is ${this.work} `)                              //islemir Arrowdu
  }
}

const raman = new User('raman', 34, 'usta')
raman.doing()
 */

/* 
function Car (model, sahib, istehsali,speed) {
  this.model = model
  this.sahib = sahib
  this.istehsali = istehsali
  this.speed = speed
  this.gazVer = () => {
  console.log(`${this.speed  += 10}` )
  }
  this.dayan = () => {
    if(this.speed <= 0){
       console.log('dayandi')
    }else{
console.log(`${this.speed  -= 10}`)
    }
  }
}

const bmw = new Car('f30', 'Raman', 1950,0)
bmw.gazVer()
bmw.gazVer()
bmw.gazVer()
bmw.dayan()
bmw.dayan()
bmw.dayan()
bmw.dayan()

const isAgree = () => {

}
 */

// const ali = {
//   name: 'ali',
//   age: 23,
//   work: 'dev',
//   doing(){
//     console.log(`${this.name} is ${this.work}`)
//   }
// }
// ali.doing()

// const firudin = {
//   name: 'firudin',
//   age: 30,
//   work: 'playing',
//   doing(){
//     console.log(`${this.name} is ${this.work}`)
//   }
// }
// firudin.doing()

// const user = (name, age, work) => ({
//     name,
//     age,
//     work,
//     doing() {
//       console.log(`${this.name} is ${this.work}`)
//     }
//   }

// )

// const ali = user('ali', 43, 'teacher')
// ali.doing()
// const f = user('f', 43, 'd')
// f.doing()



// function User (ad, yas, work){
//   console.log(ad)
//   console.log(this)

//   this.ad = ad
//   console.log(this.ad)

// console.log(ad)
// this.yas = yas
// this.work = work



// }
// const ali = new User('ali', '43', 'mellim')






/* 
function User (ad, yas, work){
this.ad = ad
this.yas = yas
this.work = work
this.doing= () => {
  console.log(`${this.ad} is ${this.work}`)
}
}
const ali = new User('ali', 43, 'mellim')
ali.ad = 'hamza'
ali.work = 'ders qaynatmaaq'
ali.doing()

//////////////////////////////////////////////////////

const user = (ad, yas, work) => ({
    ad,
    yas,
    work,
    doing() {
      console.log(`${this.ad} is ${this.work}`)
    }
  }
)
const raman = user('raman', 412323, 'sofer')
raman.ad = 'hamza'
raman.work = 'karate'
raman.doing() */



//*8888888888888888888888888888888888888888888888*String ************************************************/\

// //1. 
//  const validateAzeNumber = () => {

//   if(str)

//  }




















// const user = (ad, yas, work) => ({
//       ad,
//       yas,
//       work,
//       doing() {
//         console.log(`${this.ad} is ${this.work}`)
//       }
//     }
  
//   )

//  const raman = user('ali', 43, 'teacher')
// raman.doing()


// const coordinateToString = (lat, lng) => {
//   return `lat:${lat}, lng:${lng}`
// }
// console.log(coordinateToString(12.678, 41.675))


// const nioceName = (ad, symbol) => {
//  return 
// }
// console.log(nioceName('ali', '🦁'));

// const getFullName = (obj) => {
//   return obj.ad.concat('_')
// }
// console.log(getFullName({ad:'ali', soyad:'isiyev'}));



// let date = new Date().getFullYear()
// const createUsername = (obj) => obj.ad.concat('_').concat(date - obj.age)w

// console.log(createUsername({ad:'alion', age:24}));

/* const createAbbr = (name) => {
  let sp =  name.split()
  console.log(sp);
  sp[0].slice(0,1)+ sp[1].slice(0,1)+sp[1].slice(0,1)
} */

// createAbbr('Daxili Isler Nazirliyi')
// createAbbr('Azerbaijan Respublikasi')
// createAbbr('Dovlet Tehlukesilik Xidmeti')                

function declareFunc() {

}

declareFunc

const conutSheep = (num) => {

  for(let i = 0; i <num; i++){
   log(i)
  }
 }
 console.log(count) 
