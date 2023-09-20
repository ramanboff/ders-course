                                  //!      TASK1  Objects

//Objectler Javascriptde  en esas  data tiplerinden biridir. 
//Objeclerin   sintaksisi bu qaydada olur   misal :
const obj = {} 

//!Objectleri  en yaxsi  real heyatdan misal cekerek basa duwmek olar ,
//Mes  -  1.Telefon--bir objectdir  ve  bezi  propertileri var  [rengi, olcusu, modeli ve s..]
// ve 2. Hemen objection  neler ede bileceyi var , MIsal[zeng cala bilir, mahni oxutmaq olur, sekil cekmek ves.]

//*Bawqa bir misalda  goture bilerik   USER objecti
//Bu User objectiinin    propertyleri [name, email]    valyulari ise['Raman', bayramovraman@gmail.com]
 //Ve biz Objectlere  Method-da  elave ede bilerik, bunlar   bildiyimiz funksiyalardir 
 //Mes:  [ Login, LogOut ], biz istediyimiz  vaxti   bu  methodlari  cagira  bilerik, ve burada 
//[ Login, LogOut ]  bizim propertylerimiz olacag ,   Valyulari ise   bir funskiya olacag

//Valyularimiz  [string, number, funksiya,  array ve.s]  ne istesek ola biler

 //*  Objectlere misal  ucun bir   [user objecti]  yaradaq

 let user = {    //ve ya   const-nan da ola biler
  name:'raman',
  age:'32',
  hobbi: ['Kitab oxumaq', 'Kod yazmaq']
 }
 console.log(user);
 
 //?burada biz user-i  consola   cixarsaq, eyni objecti goreceyik. Biz istediyimiz  Valyunu elde 
    //etmek ucun   [.] yeni noqteden istifade edeceyik
    // Misal  value  olaraq   raman  goturmek istesek  ==>>   user.name yazmagimiz besdir 
   
 console.log(user.name);      //==>>  raman

 //* Bu objectde  biz  valyu deyerlerini deyiuse de bilerik
   user.age = 45   //yazsaq   artiq   age - 32  yox   45olacag
   // artiq  ne zaman  user.age  cagirsaq   bize  45 verecek
   console.log(user.age); //=>> 45

/////////////////////////////////////////////////////////////////////////////

    // ve object valularini elde etmek isteyende   noqteden bawqa  []  -bu moterizeden de istifade
      //ede  bilerik, yalniz  [] icerisinde  ""    dirnaq da yazmaliyiq, bu en cox  KEY-imiz iki ve
      //daha cox sozden ibaret olanda  ve ya   KEY-i  hansisa  variable-a beraber edende lazim olur
    console.log(user['age']);  //=>> yazsaq  yenede bize   45 verecek
    console.log(user['name']); //==>>  bize raman geri qaytaracag
    
    user['name'] = 'Akif'  //etsek   artiq   name-in  valusunu deyismis olduq.

    //[]- yolu ile  cagirmagin daha bir ustunluyu oduki, key-i her hansi bir variable-a beraber, edib
    //ele de cagiraq bilirik MISal:
    const ageKey = 'age'
    console.log(user[ageKey]);  //1==>> yenede bize  45 , yeni  age-in deyerini verecek

    console.log(user['age']);    //2   , bir ve iki eyni neticeni verecek


//* Objectlerin  tipi  ele objectdir

console.log(typeof user);   // consolda  bize   OBJECT  verecek

/////////////////////////////////////////////////////////////////////////////

//*Method elave etmek

let user = {    //ve ya   const-nan da ola biler
  name:'raman',
  age:'32',
  hobbi: ['Kitab oxumaq', 'Kod yazmaq'],
  login: function(){       //--------------------------Method elave etdik
    console.log('the user logged in');
  }
 }

 console.log(user.login()); //edib cagirsaq  bize    consolda   -- the user logged in -- verecek
 
 //////////////////////////////////////////////
  
 //?Object  methodunu cagirmagi bawa duwmek ucun bir misal

 const name1 = 'raman'
 name1.toUpperCase()  //bu string methodudur, burada toUpperCase  bir  methoddur, ve string objectine 
 //beraberdir

 user.login()  //de  yene bunun kimimidir, ve burada LOGIN  methodu  --user-- objectine teyin edilib

////////////////////////////////////////////////////////////////////////////////////

//? user objectinin  hobbi-propertisinin valusunu  logHobbi-methodu ile cagirmaq istesek
 
let user = {    //ve ya   const-nan da ola biler
  name:'raman',
  age:'32',
  hobbi: ['Kitab oxumaq', 'Kod yazmaq'],
  login: function(){       //--------------------------Method elave etdik
    console.log('the user logged in');
  },
  logHobbi: function(){     //YENI BIR METHOD  ELAVE ETDIK
    console.log(hobbi); //ERROR| hobbi propertisinin valusunu elde etmek istesek, ve bu cur cagirsaq
    //  error  olacag ,     consolda  hobbi is not defined
    //BUNU UCUN BURADA  OBJECTIN  this keyword-u komeyimize catacag, yeni
    console.log(this.hobbi);  // artiq  bu bize  hobbi-nin  valusunu ['Kitab oxumaq', 'Kod yazmaq']
    //verecek, burada   --this-- bizim   -user- objectini bize verir
    console.log(this);//yazsaq bize    user-objectini  qaytaracag

    // Kitab oxumaq  hobbisini goturmek istsek meselen
    this.hobbi.forEach((eachHobbi) => {
       console.log(eachHobbi); // 'Kitab oxumaq', 'Kod yazmaq'
       console.log(eachHobbi[0]);  //BIZE      ---I  QAYTARACAG
    })
  }
 }

 console.log(user.logHobbi);   //kitab oxumaq


