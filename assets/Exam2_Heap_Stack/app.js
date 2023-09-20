//Javascript-de  2 cur type-lar var    1.Value 2.Referance
//*1.Value type-ler -- numbers, strings, booleans, null, undefined
//*2.Referance type-lara   objection ozu  ve novleri   funksiyalar, array-lar ve s aiddir


//Value ve Referance  typlar  birbirerinden  harda saxlanmaqlariyla  ferlenirler

//1.Value
//biz yeni bir value type  yaradib onu  variable-a  menimsedende  onlarin value-lari , STACK-adlana yerde saxlanilirlar,  stack yaddasi  limitlidir yeni  yaddasi azdir

const number1 = 2
const number2 = number1

// burada number1-in valusu   STACK-DA saxlanildigi ucun   num2-ni num1 e teyin edende 
//number1-in kopyasi yaranir   ve   num2 -ye teyin edir, buna gore de  2  ferqli  variable yaranir
 //value-lar  ikiside   2   olmagina baxmayaq  bunlar ayri ayri  valu-lardir

 number1 = 100 //etsek eyer  , yeni number -1 i deyiwsek,  bu number1 variablesine  aid olan value-dur
 //yeni   2-valusu  yalniz number1 variablesine aiddir,   number2 variable-na hecbir tesiri yoxdur
 //yeni  number2-    hele de 2 olaraq qalib  ----- number2=2

// ! VALUE TYPE  EXAMPLE
const number1 = 2
const number2 = number1

console.log(`number1:${number1}, number2:${number2}`); //number1: 2      //number2: 2

number1 = 30
console.log(`number1:${number1}, number2:${number2}`); //number1: 30      //number2: 2


//2.Referance 
//bunlar ise yalnizSTACK-da deyil hem de HEAP -adalanan yerde saxlanilrlar,
//yeni  biz yeni bir misal  Object yaratsaq  onun  valusu, yeni objection ozu   HEAP-DE 
   //REFERANSI ISE  STACK-da saxlanilir

   const userOne = {name:'raman', age:'32'}
   const userTwo = userOne

//  userOne
   //Burada  userOne  valyusu- STACK-DA yaranan  REFERANCE- a teyin edilir, userOne variablesine yox
   //value yeni  objectiin ozu ise   HEAP-de saxlanilir
   //Burada variable ozu  teyin edilib  STACK-daki REFERANCE-a

//userTwo
   //userTwo variable-i ozu de   STACK-daki  EYNI REFERANCE-E teyin edilir
////////////////////////////////////////////////////////////////////////////////////
   
 const userTwo = userOne
 //yeni biz userTwo yaradib onu  UserOne- a beraber edende   HEAPDA-YENI bir value yeni yeni bir 
    //object   yaradilmir. burada  UserOne-in  valusu yox   REFERANCE-SI  kopyalanir,
    //yeni yaradilmiw   UserTwo  variablesi  STACK-daki REFERANCE-a berkidilir
    //Her ikisinin REFERANCE-SI stackdadir
    //Bu o m demekdir ki  her STACK-da yaranmiw  her iki REFERANCE  HEAP-daki eyni value-a baglidir

//////////////////////////////////////////////////////////////////////////

const userOne  = {name:'raman', age: 50} //etsek  yeni userOne -in  age-ini deyiwsek,
//variable HEAP-DE SAXLAnildigi ucun  ve  value-lar beraber oldugu ucun,  her ikisnin de REFERANSI-
//eyni  variable-i yeni eyni objecti  gosterdiyi ucun  userOne-i deyisdirdiyimize   , o
//userTwo-ya da tesuir  edir ve onu da deyiwir

//REFERANCE TYPLARDA   VALUE-LAR yox   REFERANCE-LAR KOPYALANIR
   
//!Referance type  example

const userOne  = {name:'raman', age: 50}
const userTwo = userOne

console.log(`userOne: ${userOne}, userTwo:${userTwo}`);     //userOne:{name:'raman', age: 50}
                                                            //userTwo:{name:'raman', age: 50}


// eyer herhansi birin deyiwsek   her ikisi deyiwecek
userOne.age = 100
console.log(`userOne: ${userOne}, userTwo:${userTwo}`);     //userOne:{name:'raman', age: 100}
                                                             //userTwo:{name:'raman', age: 100}





