'use strict';
// const API_KEY = '883aa11ba8cf9f058a2a84e1358fdde0';
const countriesContainer = document.querySelector('.container3');
const buttonCallCountry = document.querySelector('.btn-country');
const images = document.querySelector('.images');
const image = document.querySelector('.image');

const getJSON = function(url,errorMSG = 'Something went wrong'){
    return fetch(url).then(res=>{
        console.log(res)
        if(!res.ok) throw new Error(`${errorMSG}, ${res.status}`);

        return res.json();
    })
}

const renderError = (Msg) =>{
    countriesContainer.insertAdjacentHTML('beforeend',Msg);
}

const countryHTML = function(data,className=''){
    const html = `
    <article class="country ${className}">
            <img class="country__img" src="${data.flags.png}" />
            <div class="country__data">
              <h3 class="country__name">Country: ${data.name.common}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>Population: ${data.population}</p>
              <p class="country__row"><span>🗣️</span>${data.languages.srp} language</p>
              <p class="country__row"><span>💰</span>${data.currencies.RSD}</p>
            </div>
          </article>
    `
    countriesContainer.insertAdjacentHTML('beforeend',html);
    countriesContainer.style.opacity = 1;
}

// const getCountryData = function(country){
//     getJSON(`https://restcountries.com/v3.1/name/${country}`).then(data =>{
//         console.log(data);
//         countryHTML(data[0]);

//         const neighbour = data[0].borders[0];
//         // const neighbour = 'gahgaga'

//         if(!neighbour) return;

//         return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`).then(data =>{
//             console.log(data);
//             countryHTML(data[0],'neighbour');
//         }).catch(err =>{
//             renderError(`Sorry, something went wrong (${err.message})`);
//         }).finally(()=>{
//             countriesContainer.style.opacity = 1;
//         })
//     })
// }

// buttonCallCountry.addEventListener('click',function(){
//     getCountryData('Serbia');
// })


// Coding challenge uradjen iz prve sam
const haldlingErros = function(errMsg='Something went wrong'){
    countriesContainer.insertAdjacentHTML('beforeend',errMsg);
}

// const renderCountry = function(data,className){

//     const html = `
//          <article class="country ${className}">
//                  <img class="country__img" src="${data.flags.png}" />
//                  <div class="country__data">
//                    <h3 class="country__name">Country: ${data.name.common}</h3>
//                    <h4 class="country__region">${data.region}</h4>
//                    <p class="country__row"><span>👫</span>Population: ${data.population}</p>
//                    <p class="country__row"><span>🗣️</span>${data.languages.srp} language</p>
//                   <p class="country__row"><span>💰</span>${data.currencies.RSD}</p>
//                  </div>
//                </article>
//          `
//         countriesContainer.insertAdjacentHTML('beforeend',html);
// }

// const Country = function(country){
//     fetch(`https://restcountries.com/v3.1/name/${country}`).then(res =>{
//         console.log(res);
//         return res.json();
//     }).then(data =>{
//         console.log(data);
//         renderCountry(data[0])

//         const neighbour = data[0].borders[0];

//         if(!neighbour) return;

//         return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`).then(res =>{
//             return res.json()
//         }).then(data =>{
//             renderCountry(data[0],'neighbour');
//         })

//     })
// }

// const whereAmi = function(lat,lng){

//     fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=143668817445549834790x125181`).then(res =>{
//         console.log(res);
//         return res.json();
//     }).then(data =>{
//         console.log(data);
//         console.log(`You are in ${data.state}, ${data.city}`)
//         Country(data.country);
//     }).catch(err =>{
//         console.error(err);
//         haldlingErros(`${errMsg}, ${err.message}`)
//     }).finally(()=>{
//         countriesContainer.style.opacity = 1;
//     })

// }

// whereAmi('44.787197','20.457273')


// ----------------



// const getCountryData = function(country){

//     return fetch(`https://restcountries.com/v3.1/name/${country}`).then(response=>{
//         return response.json();
  
//     }).then((data)=>{
//         console.log(data)
//         countryHTML(data[0]);

//         const neighbour = data[0].borders[0];

//         if(!neighbour) return;


//         // kada vratimo promise tj return onda mozemo opet then metodu
//         return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`).then(response =>{
//             if(!response.ok) return; // then se poziva samo kada je fullfilled
//             console.log(response);
//             return response.json();
//         }).then(data =>{
//             console.log(data)
//             countryHTML(data[0],'neighbour');
//         }).catch(err =>{
//             renderError(`Something went wrong ,${err}`);
//         }).finally(()=>{
//             countriesContainer.style.opacity = 1;
//         })
//         // then uvek vraca promise nebitno da li vracamo ili ne vracamo ali ako vratimo onda ce taj value
//         // biti fullfilled value od vracenog promisa
//     }); // fullfilled sto je dobro
// }

// buttonCallCountry.addEventListener('click',function(){
//     getCountryData('uganda');
// })



// Promisi tj executor function
// const lotteryPromise = new Promise(function(resolve,rejects){
  
//     console.log('Lottery draw is happening')
//     setTimeout(function(){
//         if(Math.random() >= 0.5){
//             resolve('You win the lottery <3') // fullfilled promise
//         }else{
//             rejects(new Error('You lose the lottery :P'))
//         }
//     },2000)

// })
// // res ce biti resolve value a error ce biti rejectovan promise
// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err))


// const Obecanje = new Promise(function(resolve,reject){
//     console.log('Lottery draw is happening')
//     setTimeout(() => {
//         if(Math.random() > 0.5){
//             resolve('You win the lottery');
//         }else{
//             reject(new Error('You lost ur money poop emoji xd'))
//         }
//     },2000);
// })

// Obecanje.then(res => console.log(res)).catch(err => console.error(err));

// Uzimanje lokacije




// console.log('Getting position');

// const whereAmi = function(){
//     getPosition().then(pos =>{
//         const {latitude:lat,longitude: lng} = pos.coords;
    

//         fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=143668817445549834790x125181`).then(res =>{
//             console.log(res);
//             return res.json();
//         }).then(data =>{
//             console.log(data);
//             console.log(`You are in ${data.state}, ${data.city}`)
//             Country(data.country);
//         }).catch(err =>{
//             console.error(err);
//             haldlingErros(`${errMsg}, ${err.message}`)
//         }).finally(()=>{
//             countriesContainer.style.opacity = 1;
//         })
//     })
//     }
    
//     whereAmi('44.787197','20.457273')


// OVO JE BIO DOBAR CHALLENGE KOJI SAM SAM IZMISLIO ALI NISAM USPEO DA PROSLEDIM PODATAK DRUGOM APIJU iz prvog
// const renderCountry = function(data,className){

//     const html = `
//          <article class="country ${className}">
//                  <img class="country__img" src="${data.flags.png}" />
//                  <div class="country__data">
//                    <h3 class="country__name">Country: ${data.name.common}</h3>
//                    <h4 class="country__region">${data.region}</h4>
//                    <p class="country__row"><span>👫</span>Population: ${data.population}</p>
//                    <p class="country__row"><span>🗣️</span>${data.languages.srp} language</p>
//                   <p class="country__row"><span>🏙️</span>${data.city}</p>
//                   <p class="country__row"><span>💰</span>${data.currencies.RSD.name}</p>
//                  </div>
//                </article>
//          `
//         countriesContainer.insertAdjacentHTML('beforeend',html);
// }



// ----------- DOBAR PRIMER ZA LAT LNG COORDS
// const whereAmi = function(){
//     getPosition().then(pos =>{
//         const {latitude: lat,longitude:lng} = pos.coords;
    
//     fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=143668817445549834790x125181`).then(res =>{
//         console.log(res);
//         return res.json()
//     }).then(data=>{
//         console.log(data);
//         console.log(`You are in ${data.city} , ${data.country}`);
//         const mesto = `You are in ${data.city} , ${data.country}`;
//         countriesContainer.insertAdjacentHTML('beforeend',mesto);

//         return fetch(`https://restcountries.com/v3.1/name/${data.country}`).then(res =>{
//             console.log(res)
//             return res.json()
//         }).then(data =>{
//             console.log(data);
//             renderCountry(data[0])
//         }).finally(()=>{
//             countriesContainer.style.opacity = 1;
//         })
//     })
// })
// }


// const getPosition = function(){
//     return new Promise(function(resolve,reject){
//         // navigator.geolocation.getCurrentPosition(position =>
//         //     resolve(position),err => reject(err));
//         navigator.geolocation.getCurrentPosition(resolve,reject)
//     })
// }
// whereAmi('')

// buttonCallCountry.addEventListener('click',whereAmi);


// getPosition().then(pos => console.log(pos));

// const getPosition = function(){
//     return new Promise(function(resolve,reject){
//         navigator.geolocation.getCurrentPosition(resolve,reject)
//     })
// }

// const whereAmi = async function(){
//     // Geolocation
//    const pos = await getPosition()

//    const {latitude: lat,longitude:lng} = pos.coords;
    
//    // Reverse geoCoding
//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=143668817445549834790x125181`)
//     const dataGeo = await resGeo.json()
//     console.log(dataGeo);
//     // RES je sad response
//     // COuntry data
//     const res = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.country}`);
//     console.log(res);
//     const data = await res.json()
//     console.log(data);
//     countryHTML(data[0]);
// }

// whereAmi();
// console.log('FIRST')

// let a= 6;
// const bla = new Promise(function(resolve,reject){
//     if(a > 5){
//         resolve('A je vece od 5')
//     }else{
//         reject('a je manje od 5')
//     }
// })

// bla.then(res => console.log(res)).catch(err => console.error(err));



// Obnavljanje --------------------

// const obecanje = function(){
//   return new Promise(function(resolve,reject){
//       navigator.geolocation.getCurrentPosition(resolve,reject)
//   })
// }

// const whereAmi = async function(){
//   try{const pos = await obecanje();
//   const {latitude:lat,longitude:lng} = pos.coords;

//   const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=143668817445549834790x125181`);
//   if(!resGeo.ok) throw new Error('Problem getting country');
//   const dataGeo = await resGeo.json()
  
//   console.log(dataGeo);


//   const res = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.country}`);
//   console.log(res)
//   if(!res.ok) throw new Error('Problem getting country');
//   const data = await res.json();
//   console.log(data);
//   countryHTML(data[0])

//   return `You are in ${dataGeo.city}, ${dataGeo.country}`
// } catch(err)
//   {
//     console.error(`${err}`)
//     renderError(`Something went wrong ${err.message}`);

//     // Reject promise returned from async function
//     throw err;
//   }

// }
// console.log('1: will get location')
// const city = whereAmi()
// console.log(city)
// whereAmi().then(city => console.log(city));
// console.log('3: Finished getting location')
// whereAmi()
// whereAmi()


// Ovo cu da koristim jer mi ne radi IIFE
// whereAmi().then(city => console.log(`2: ${city}`)); // city je return
// console.log('3: Finished getting location')

// ( async function(){
//   try{
//     const city = await whereAmi()
//     console.log(`2: ${city}`);
//   }catch(err){
//     console.error(`2: ${err.message}`);
//   }
//   console.log('3: Finished getting location');
// })();
// IIFE

// ---------------------------

// const get3Countries = async function(c1,c2,c3){
//   try{

//     const data = await Promise.all([getJSON(`https://restcountries.com/v3.1/name/${c1}`),
//     getJSON(`https://restcountries.com/v3.1/name/${c2}`),
//     getJSON(`https://restcountries.com/v3.1/name/${c3}`)
//     ])
//     console.log(data.map(d=> d[0].capital));
//   }catch(err){
//     console.error(err);
//   }

// }

// get3Countries('serbia','canada','bulgaria');

// const wait = function(seconds){
//     return new Promise(function(resolve){
//         // ne treba mi reject jer je nemoguce da timer faila
//         setTimeout(resolve,seconds * 1000);
//     })
// }

// const createImage = function(imgPath){
//   return new Promise(function(resolve,reject){
//     const img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load',function(){
//       images.append(img);
//       resolve(img)
//     })

//     img.addEventListener('error',function(){
//       reject(new Error('Image not found'))
//     })
//   })
// }

// let currentImg;
// createImage('slike/img-1.jpg').then(img =>{
//   currentImg = img;
//   console.log('image:1 has loaded');
//   return wait(2);
// }).then(() =>{
//   currentImg.style.display = 'none';
//   return createImage('slike/img-2.jpg')
// }).then((img)=>{
//   currentImg = img;
//   console.log('image:2 has loaded');
//   return wait(2);
// }).then(()=>{
//   currentImg.style.display = 'none';
// }).catch(err => console.error(err));



// Challenge 2 na osnovu ch 1
// const loadNPause = async function(){
//   try{
//     //Load 1 image
//     let img = await createImage('slike/img-1.jpg')
//     console.log('Image:1 has loaded');
//     await wait(2)
    
//     img.style.display = 'none';

//     //Load 2 image
//     img = await createImage('slike/img-2.jpg')
//     console.log('image:2 has loaded');
//     await wait(2)

//     img.style.display = 'none';
//     console.log('Image 2: disspeared')

//   }catch(err){
//     console.error(err);
//   }

// }
// loadNPause();

// const loadAll = async function([imgArr]){
//   let slike = imgArr.map(async imgs => createImage(imgs))
//   console.log(slike)
// }

// loadAll('slike/img-1.jpg','slike/img-2.jpg','slike/img.-3.jpg');


// '883aa11ba8cf9f058a2a84e1358fdde0'; api key

// const weatherApp = async  function(cityname){
//   try{  
    
//     const resApp = await fetch(`api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=${'883aa11ba8cf9f058a2a84e1358fdde0'}}`);

//     // Uzimanje lat and lng
//     // const {latitude:lat,longitude:lng} = resApp.coords;


//     if(!resApp.ok) throw new Error(`Problem fetching API`)
    
  
//     console.log(resApp)
//     const data = resApp.json();
//     console.log(data);
//   } catch(err){
//     console.error(err)
//   }

// }

// weatherApp('Kraljevo');




// const weatherApp = function(city){

 
    
//     fetch(`https://api.weatherapi.com/v1/current.json?key=6aa34cff4e2547538e9145808240802 &q=${city}&aqi=no`)
//     .then(res => {
//       console.log(res);
//       if(!res.ok) throw new Error(`${res.status}, ${res.statusText}`);

//       return res.json()
      
//     }).then(data =>{
//       console.log(data);
//     })



// }

// weatherApp('Kraljevo');


// const getPosition = function(data){
//   return new Promise(function(resolve,reject){
//     navigator.geolocation.getCurrentPosition(resolve,reject)
//   })
// }


// {/* <div class="container3">
// <h1>${data.location.country},${data.location.name}</h1>
// </div>
// <div class="container4">
// <img src="./images/snow-removebg-preview 1.png" alt="">
// <div class="container5">
// <h1 class="prvih1">${data.current.temp_c}</h1>
// <h1 class="drugih1">${data.current.condition.text}</h1>
// </div>
// <div class="container6">
// <h1 class="predzadnjih1">Brzina vetra: ${data.current.gust_kph} km/h</h1>
// <h1 class="zadnjih1">Vlaznost : ${data.current.humidity}%</h1>
// </div> */}


// <div class="container3">
// <div class="form-block">
//   <form action="#">
//     <div class="container-search_it">
//       <input class="drzava" type="text" placeholder=" Enter city name...">
//       <img class="img-search" src="./images/images-removebg-preview-removebg-preview.png" alt="">
//     </div>
//     <!-- <h1 class="h1grad">${data.location.country},${data.location.name}</h1> -->
//   </form>
// </div>
// </div>
// <div class="container4">
// <img class="image" src="./images/snow-removebg-preview 1.png" alt="">
//  <div class="container5">
//   <h1 class="prvih1">${data.current.temp_c}</h1>
//   <h1 class="drugih1">${data.current.condition.text}</h1>
// </div>
// <div class="container6">
//   <h1 class="predzadnjih1">Brzina vetra: ${data.current.gust_kph} km/h</h1>
//   <h1 class="zadnjih1">Vlaznost : ${data.current.humidity}%</h1>
// </div>
// </div>





// Web app Weather moja licno
// Na asyhnroni nacin

const Vlaznost = document.querySelector('.p1');
const brzinaVetra = document.querySelector('.p2');
const vreme = document.querySelector('.vreme');
const stepeni = document.querySelector('.stepeni');
const gradIDrzava = document.querySelector('.grad-drzava');


const weatherHTML = function(data){
  gradIDrzava.innerHTML = `${data.location.country}, ${data.location.name}`
  stepeni.innerHTML = `${data.current.temp_c} °C` ;
  vreme.innerHTML = data.current.condition.text;
  brzinaVetra.innerHTML = `Brzina vetra: ${data.current.gust_kph} km/h`;
  Vlaznost.innerHTML = `Vlanost vazduha: ${data.current.humidity} %`;

};

const imageWeather = document.querySelector('.vreme-slika');
const searchBox = document.querySelector('.search');
const searchbtn = document.querySelector('.trazi-img');

const slikaVreme = document.querySelector('.vreme-slika');
const erorblock = document.querySelector('.error-block');
const errorMsg = function(errmsg){

  // Greska handling error
  const img1 = document.querySelector('.img1');
  const img2 = document.querySelector('.img2')

  img1.style.opacity = 0;
  img2.style.opacity = 0;
  gradIDrzava.style.opacity = 0;
  brzinaVetra.style.opacity = 0;
  vreme.style.opacity = 0;
  stepeni.style.opacity = 0;
  Vlaznost.style.opacity = 0;

  imageWeather.style.borderRadius = '15px';
  imageWeather.src = './images/warning.gif';

  const html = `${errmsg}`;

  erorblock.prepend(html) // add as the first child of errorblock
  // dok je append zadnji
  // before i after before je pre tog elementa ili diva a after je posle

  // Posle errora nakon par sekundi se restartuje stranica
  setTimeout(()=>{
    location.reload()
  },3000)

  // Timer

  // let timeleft= 3;
  // var timer = setInterval(() => {
  //   if(timeleft <= 0){
  //     clearInterval(timer)
  //     document.querySelector('.error-block').innerHTML = timeleft +'Finshed';
  //     location.reload()
  //   }else{
  //     document.querySelector('.error-block').innerHTML ='page will reload in:'+ timeleft 
  //   }
  //   timeleft -=1
  // }, 1000);


};

const weatherApp = async function(city){
    try{

      // Fetching API
      const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=6aa34cff4e2547538e9145808240802&q=${city}&aqi=no`);
      console.log(res);
      
      // // Prazan searchBox value error
      if(!res.ok) errorMsg ("Please enter a city or country 🏤");

      const data = await res.json();
      console.log(data)
      weatherHTML(data);

      
      // if(!data.current.condition.text){
      //   const removeChild = parent.removeChild(image);
      //   console.log(removeChild)
      // };

      if(data.current.condition.text === 'Partly cloudy'){ // imam
        imageWeather.src = './images/oblacno.png'
      };
      if(data.current.condition.text === 'Sunny'){ // imam
        imageWeather.src = './images/sunny-icon-png-21.png'
      }
      if(data.current.condition.text === 'snow'){ // imam
        imageWeather.src = './images/sneg.png'
      }
      if(data.current.condition.text === 'Light snow'){ // imam
        imageWeather.src = './images/sneg.png'
      }
      if(data.current.condition.text === 'Moderate rain'){
        imageWeather.src = './images/kisa-removebg-preview.png'
      }
      if(data.current.condition.text === 'clear'){ // imam
        imageWeather.src = './images/oblacno.png'
      }
      if(data.current.condition.text === 'Light rain'){ // imam
        imageWeather.src = './images/kisa-removebg-preview.png'
      }
      if(data.current.condition.text === 'Mist' && 'Fog'){ // imam
        imageWeather.src = './images/magla.png'
      }
      if(data.current.condition.text === 'Overcast'){ // imam
        imageWeather.src = './images/overkast.png';
      }

    }catch(err){
      console.error(err);
    }
}

searchBox.addEventListener('keydown',function(e){
  
  if(e.key === 'Enter'){
    weatherApp(searchBox.value)
    e.preventDefault()
    searchBox.value = '';
  }
})

// searchBox.addEventListener("keydown",function(e){
//   if(e.key === "Enter"){
//     weatherApp(searchBox.value)
//   }
// });

searchbtn.addEventListener('click',function(){
  weatherApp(searchBox.value);
  searchBox.value = '';
});


