//!Funksiyalar.

//Funksiya Object tiplerinden biridir. Umumilikde  funsiya bize  kod tekrari etmemek ucun lazimdir,
//Yeni eyni kodu  defelerle tekrar yazmaqdansa, bir funksiya yaradib, kodu onun icine yazib, lazim
//olduqda hemen funksiyani cagira bilerik

//Meselen bir sehifemiz var, buttonlar-imuz var , o buttonlar-i tiklayanda bir  hadise bas vermelidir,
//Her button ucun her defe eyni kodlari tekrar tekrar yazmaqdansa  , bir  Click funsiyasi yazib
//her lazim olanda onu cagira bilerik.

//Sintaksis awagdaki kimidir

//!function declarations
function sayHello(){
  console.log('Hello');     // consolda    Hello     verecek bize
}
sayHello()   // harda lazim olsa  orda bu cur cagirilir
sayHello()   // harda lazim olsa  orda bu cur cagirilir
sayHello()   // harda lazim olsa  orda bu cur cagirilir

//!function expression
const sayHello = function(){
  console.log('Hello');    //consolda  yene      Hello   verecek 
}
//Bu funskiyani  const-   a teyin etmeyin sebebi odurki gelecekde  bu funksiyani deyismeyeceyik
sayHello() //Hemenki usulnan cagirilir     
sayHello() //Hemenki usulnan cagirilir   
//2 defe cagirsaq   consol-da    2 defe   Hello  gosterecek

/////////////////////////////////////////////////////////////////////////////////////

//Her iki variantla   funksiya  yaratdiq ,  eyni isi gorurler,  ferleri  HOISTING meselesindedir
   
//1.FUNCTION  DECLARATIONDA  HOISTING ISLEYIR,  yeni  funksiyani yazib, sonra  onu hemen  funksiya-
   //-dan yuxarda cagirsaq yene isleyecek,   MISAL:
sayHello()  //asagdaki  funksiyani  onnan yuxarda  cagirmisiq, amma isleyir

function sayHello(){
  console.log('Hello');    
}
////////////////////////////////
//2.FUNCTION EXPRESSIONDA ISE  HOISTING islemir, yeni yuxarda cagiranda islemir, ancag funsiyani yazib
  //sonra awaglarda biryerlerde  cagira bilerik, MISAL:
sayHello()      // ERROR    ------------    sayHello  is not defined

const sayHello = function(){
    console.log('Hello');    
}

//Salamati  FUNCTION EXPRESSION isletmekdir,  yeni funksiyani yaradib  , sonra cagirmaq, qariwiqliq du-
//smesin deye

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
      //Argument  ve parametr

const sayHello = function(name){   //moterizede name PARAMETRDIR, ve onu kod icersinde iwledirik
  console.log(`Salam ${name}`);
}
sayHello()  //--- burda ise argument yazilmalidir, yeni yuxardaki  NAME  ne olsun??  Eyer burda,
//arqument yerine  hecne yazmasaq  consolda bize----------- Salam undefined ---- qayidacag
sayHello('Raman')  //yazsaq  ise      ------------ Salam Raman------
sayHello('Ramin')  //yazsaq  ise      ------------ Salam Ramin------

//Herdefe  arqumentleri deyisib   yeni bir  name-kimi islede bilerik
//////////////////////////////////////////////////////////////////////////////////////////
//PARAMETR  ----- name -----  burda  LOCAL  VARIABLE-dir  , funskyadan  colde  biz ,
   //name-i consola cixarsaq  islemeyecek
   console.log(name);  //yalniz funksiyanin icerisinde isleyecek.

///////////////////////////////////////////////////////////////////////////////////////////
//Funksiyaya biz istediyimiz qeder  parametr  ve arqument vere bilerik  MISAL:
const sayHello = function(name, vaxt){
  console.log(`${vaxt} ${name}`);   
}
sayHello('Raman', 'Sabahin xeyir')   //consolda  ----  Sabahin xeyir  Raman  ------


                                 //!Return
 const calc = (number) => {
   let sum = 3 + number
   console.log(sum);     // sum local variable olduguna gore ve console icerde olduguna gore   --8 -- verecek  yeni iwleyecek,
 }
 calc(5)

 console.log(sum); //lakin colde  ise  islemeyecek  cunki  --sum-- local variable-dir 
 //ERROR   --  sum is not defined  --

       //BUNa gore de bize   --RETURN-   keyword-u lazimdir, ki localdan cixanda bele bize , istediyimiz yerde   --sum -- u geri qaytarsin

const calc = (number) => {
 let sum = 3 + number
 return sum   //return edirik ki, -sum- u bize geri qaytarsin 
}

const sumuColdeGor = calc(5)     //bunu bir variable-ye menimsey=tmeliyik
console.log(sumuColdeGor);     //console- da   --8--


         //Kodu qisaldib yazmaq ucun

const calc = (number) => {
  return 3 + number
}
const CemiColdeVersin = calc(5)
console.log(CemiColdeVersin);

//indi ise   CemiColdeVersin = 8  oldu ,  bunu da bawqa bir funksiyada  arqument kimi islede bilerik
const basqaFunksiya = (param) => {
  console.log(param);     //  consol-da  --8 -- verecek
}
basqaFunksiya(CemiColdeVersin)

////////////////////////////////////////////////////
                       //!Arrow  funcsiyaya  misal

const hesabla = (nums1, num2) => {
  let sum = 0
  for(let i=0; i< nums1.length; i++ ){
    sum = nums1[i] + nums1[i] * num2       //22 + 44 + 55 + 66 = 187
  }
}
console.log(hesabla([2,4,5,6], 10));


                          //!CallBAck function
const myFunc = (callback) => {
  let value = 50
  callback(value)
}
myFunc(function(result){
  console.log(result);  
})

//Bu numunede  myFunc  funksiyasina  arqument kimi daha bir verilib.
//Callback funksiyannin  funksiyaya arqument kimi verilmesidir . 
//Icerdeki Callbacin ozune de  arqument kimi value  verilib, valu da  50 oldugunnan  netice  50 olacag


                         //! Callback-i isledek

const ul  = document.querySelector('ul')

const people = ['raman', 'akif', 'arif', 'kamil']

let html = ``
people.forEach((person) => {
html += `<li>${person}</li>`
})

ul.innerHTML = html    //Ekranda   altalda list kimi sira ile   raman akif arif kamil gosterecek