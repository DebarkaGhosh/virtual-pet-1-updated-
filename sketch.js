var dog,dogImg,dogImg1;
var database;
var foodS,foodStock;

function preload(){
   dogImg=loadImage("dog.png");
   dogImg1=loadImage("dog2.png");
  }

function setup() {
  database=firebase.database();

  createCanvas(500,500);

  dog=createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale=0.15;

  var  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  textSize(20); 
}

function draw() {
  background("yellow");
 
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg1);
  }

  drawSprites();

  push()
  fill("red");
  stroke("black");
  textFont("cavolini")
  text("Food remaining : "+foodS,170,200);
  textSize(15);
  text("Note: Press UP ARROW Key To Feed Drago Milk!",100,100);
  push()
  fill("black")
  textFont("comic sans MS")
  

  pop()

 
  
   

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  } 
  database.ref('/').update({
    Food:x
  
    })
  }

