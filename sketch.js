var dog,happyDog;
var database;
var foodS,foodStock;
var lastFed;
var feed
var addFoods
function preload(){

  happyD = loadImage("images/dogImg1.png");
  Dog = loadImage("images/dogImg.png");

}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250,250,50,50);
  dog.scale = 0.1;
  dog.addImage(Dog);
  foodStock = database.ref('Food')
  foodStock.on("value",readStock);

  feed = createButton("ADD FOOD");
  feed.position(700,95);
  feed.mousePressed(addFoods);

  addFoods = createButton('FEED THE DOG');
  addFoods.position(800,95);
  addFoods.mousePressed(addFoods);

}


function draw() {  
  background(46,139,87);
 
  drawSprites();
  fill("black")

  text("Food Remaining "+foodS,200,100);


}
function readStock(data){

  foodS = data.val();

}
function writeStock(x){

  if(x <= 0){

    x = 0;

  }else{

    x = x-1

  }
  database.ref('/').update({
    Food:x
  })

}
function addFoods(){

  foodS++;
  database.ref('/').update({

    Food:foodS

  })

}
function feedDog(){

  dog.addImage(happyDog);

  foodS.updateFoodStock(foodS.getFoodStock()-1);
  database.ref('/').update({

    Food:foodS.getFoodStock()

  })

}
