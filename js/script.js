// show service 

// service type id

const airportRadio = document.getElementById('fromAirportRadio');

const cityToCityRadio = document.getElementById("CityToCityRadio");

const weddingRadio = document.getElementById("WeddingRadio");

const toAirportRadio = document.getElementById("ToAirportRadio")

//service type id end

//routing id

const fromAirport = document.getElementById("FromAirport");

const toAirport = document.getElementById("ToAirport");

const fromCity = document.getElementById("FromCity")

const wedding = document.getElementById("wedding")

// end routing id


function ShowServiceType(){
      if(fromAirportRadio.checked === true){
       fromAirport.style.display = "block";
       toAirport.style.display = "none";
       fromCity.style.display = "none";
       wedding.style.display ="none"

      }

       if(cityToCityRadio.checked === true){
       fromCity.style.display = "block";
       fromAirport.style.display = "none";
       toAirport.style.display = "none";
       wedding.style.display ="none"

    }

         if(toAirportRadio.checked === true){
       toAirport.style.display = "block";
       fromCity.style.display = "none";
       fromAirport.style.display = "none";
       wedding.style.display ="none"

      }
      
      if(weddingRadio.checked === true){
            toAirport.style.display = "none";
            fromCity.style.display = "none";
            fromAirport.style.display = "none";
            wedding.style.display ="block"
           }
     
      
}



// to get price 

const submit = document.getElementById("submit");
const price = document.getElementById("price");

const getprice = () =>{
   let priceRandom = Math.floor(Math.random()*4000) +1;
   price.textContent=`EGP Price: ${priceRandom}`

}


// copy rights

let copyRights = document.getElementById("copyrights");
const currentYear = new Date().getFullYear();

copyRights.textContent =`@ ${currentYear} Mahmoud-Othman`;