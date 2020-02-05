'use strict';
const imported = require("./inventory.js");
console.log(imported.inventory['Sallad']);
console.log(imported.inventory['Krutonger']);

// Assignment 4


const menu= imported.inventory;
let choices= Object.keys(menu);
console.log(choices);
let foundation= "Foundation: ";
let protein= "Protein: ";
let extra= "Extras: ";
let dressing= "Dressings: ";

for(var i=0; i<choices.length;i++){
   
    if(menu[choices[i]].foundation){
     foundation +=  choices[i] +"," ;
    }
    if(menu[choices[i]].protein){
        protein += choices[i] +","  ;
    }
    if(menu[choices[i]].extra){
        extra += choices[i] +","  ;
    }
    if(menu[choices[i]].dressing){
       dressing += choices[i]+","  ;
    }
}

var output=  foundation + "\n" + protein + "\n" + extra + "\n" + dressing;

console.log(output);

// Assignment 5-7

class Salad {
    constructor() {
        this.foundation = [];
        this.protein = [];
        this.extra = [];
        this.dressing = [];
    }

    add(ingredient){
        if(menu[ingredient].foundation){
            this.foundation.push(ingredient);
        }
        if(menu[ingredient].protein){
            this.protein.push(ingredient);
        }
        if(menu[ingredient].extra){
            this.extra.push(ingredient);
        }
        if(menu[ingredient].dressing){
            this.dressing.push(ingredient)
        }

    }

    remove(ingredient){
        if(menu[ingredient].foundation){
           this.foundation.splice(this.foundation.findIndex(element=> element==ingredient),1);
          
        }
        if(menu[ingredient].protein){
            this.protein.splice(this.protein.findIndex(element=> element==ingredient),1);
        }
        if(menu[ingredient].extra){
            this.extra.splice(this.extra.findIndex(element=> element==ingredient),1);
        }
        if(menu[ingredient].dressing){
            this.dressing.splice(this.dressing.findIndex(element=> element==menuingredient),1);
        }
        

    }
    price(){
        let prices =[];
        this.foundation.forEach(element=> prices.push(pushPrice(element)));
        this.extra.forEach(element=> prices.push(pushPrice(element)));
        this.protein.forEach(element=> prices.push(pushPrice(element)));
        this.dressing.forEach(element=> prices.push(pushPrice(element)));
        var totprice=prices.reduce(sumPrice);
        function pushPrice(element){
            return menu[element].price;
        }
        function sumPrice(sum,num){
            return sum + num;
        }
       return totprice;
    }

    
}

let myCesarSalad = new Salad();
myCesarSalad.add("Sallad");
myCesarSalad.add("Parmesan");
myCesarSalad.add("Kycklingfilé");
myCesarSalad.add("Krutonger");
myCesarSalad.add("Tomat");
myCesarSalad.add("Ceasardressing");
//myCesarSalad.remove("Parmesan");
console.log(myCesarSalad);
console.log(myCesarSalad.price());


//Assignment 8

class ExtraGreenSalad extends Salad {
    constructor() {
        super()
      }
    
    price(){
        let prices =[];
        this.foundation.forEach(element=> prices.push(pushPrice(element)));
        this.extra.forEach(element=> prices.push(pushPrice(element)/2));
        this.protein.forEach(element=> prices.push(pushPrice(element)));
        this.dressing.forEach(element=> prices.push(pushPrice(element)));
        var totprice=prices.reduce(sumPrice);
        function pushPrice(element){
            return menu[element].price;
        }
        function sumPrice(sum,num){
            return sum + num;
        }
       return totprice;
    }

    
}
let mySalad = new ExtraGreenSalad();
mySalad.add("Parmesan");
mySalad.add("Krutonger");
console.log(mySalad.price());

//Assignment 10

class GourmetSalad extends Salad{
    constructor(){
        super();
        this.quantities={};
    }

    add(ingredient,quantity){
      super.add(ingredient);
    this.quantities[ingredient]=quantity;
   console.log(this.quantities);
   console.log(this.extra);
    }

    remove(ingredient){
        super.remove(ingredient);
        delete this.quantities[ingredient];
       console.log(this.quantities);
    }

    price(){
        let prices =[];
        this.foundation.forEach(element=> prices.push(pushPrice(element)*this.quantities[element]));
        this.extra.forEach(element=> prices.push(pushPrice(element)*this.quantities[element]));
        this.protein.forEach(element=> prices.push(pushPrice(element)*this.quantities[element]));
        this.dressing.forEach(element=> prices.push(pushPrice(element)*this.quantities[element]));
        var totprice=prices.reduce(sumPrice);
       
        function pushPrice(element){
            return menu[element].price;
        }
        function sumPrice(sum,num){
            return sum + num;
        }
       return totprice;
        
    }


}

let saaalad=new GourmetSalad();
saaalad.add("Parmesan",1.0);
saaalad.add("Krutonger",0.9);
saaalad.remove("Parmesan"); 
console.log(saaalad.price());

