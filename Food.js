class Food{

    constructor(){

  
        this.image = loadImage("images/Milk.png");
    }
    GetFoodStock(){
        var foodStockRef = database.ref("GameState");
        foodStockRef.on("value", function(data){
            foodStock = data.val();
        })
    }
    
    UpdateFoodStock(foodStock){
        database.ref("/").update({

            lastFed: foodStock
            
          })           

    }
    DeductFoodStock(foodStock){


        
    }
     display(){
        var x= 80,y= 100;
        imageMode(CENTER);
        image(720,220,70,70);
        if(this.foodStock != 0){

            for(var i = 0; i<this.foodStock;i++){

                if(i%10==0){}

                x = 80;
                y = y + 50;

            }

            image(this.image,x,y,50,50);
            x = x + 30
        } 

     }   


}