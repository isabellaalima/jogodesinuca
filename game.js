var pin,pin1, pin2, pin3, pin4, pin5, pin6;

 
  pin=createSprite(180, 50, 20, 20);  
  pin.shapeColor = ("white");
  
  pin1=createSprite(200, 300, 20, 20);
  pin1.shapeColor = ("blue");
  
  pin2=createSprite(180, 320, 20, 20);
  pin2.shapeColor = ("red");

  pin3=createSprite(220, 320, 20, 20);
  pin3.shapeColor = ("orange");

  pin4=createSprite(160, 340, 20, 20);
  pin4.shapeColor = ("purple");
  
  pin5=createSprite(200, 340, 20, 20);
  pin5.shapeColor = ("brown");
  
  pin6=createSprite(240, 340, 20, 20);
  pin6.shapeColor = ("yellow");
  
  
   /*************** Notas para a professora *************/
  // Os valores abaixo para a velocidade X e velocidade Y são diferentes do que 
  // as do projeto.
  // O objetivo é certificar-se de que todos os pinos quadrados foram deslocados / atingidos.
  // Oriente a criança a usar esses valores com base em seu próprio entendimento.
  /*************** End Note *************/
 
  
  pin.velocity.y = 10;
  pin.velocity.x =4;
  


function draw() {
  background("green");
  createEdgeSprites();
  pin.bounceOff(edges);
  pin1.bounceOff(edges);
  pin2.bounceOff(edges);
  pin3.bounceOff(edges);
  pin4.bounceOff(edges);
  pin5.bounceOff(edges);
  pin5.bounceOff(edges);
  pin6.bounceOff(edges);
  
  
  pin1.bounce(pin);
  pin2.bounce(pin);
  pin3.bounce(pin);
  pin4.bounce(pin);
  pin5.bounce(pin);
  pin6.bounce(pin);
  
  pin1.bounce(pin2);
  pin1.bounce(pin3);
  pin1.bounce(pin4);
  pin1.bounce(pin5);
  pin1.bounce(pin6);
  
  
  pin2.bounce(pin3);
  pin2.bounce(pin4);
  pin2.bounce(pin5);
  pin2.bounce(pin6);
  
  pin3.bounce(pin4);
  pin3.bounce(pin5);
  pin3.bounce(pin6);
  
  
  pin4.bounce(pin5);
  pin4.bounce(pin6);
  
  pin5.bounce(pin6);
  
  
  
  drawSprites();
}
