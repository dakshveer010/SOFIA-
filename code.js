var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//creating the player Sofia
var sofia = createSprite(20, 50,20,20);
sofia.shapeColor="red"


//creating the maze walls (wall1 - wall2)
   
 var wall1 = createSprite(80, 10,20,150);
var wall2 = createSprite(20, 130,150,20);
var wall3 = createSprite(140, 130,20,130);
var wall4 = createSprite(200, 50,20,130);
var wall5 = createSprite(255, 130,20,130);
var wall6 = createSprite(310, 50,20,130);
var wall7 = createSprite(357, 130,20,130);
var wall8 = createSprite(10, 200,20,130);
var wall9 = createSprite(10, 333,20,130);
var wall10 = createSprite(220, 210,310,20);
var wall11 = createSprite(20, 210,150,20);
var wall12 = createSprite(400,310,650,20);  
var wall13 = createSprite(125, 225,20,60);
var wall14 = createSprite(177, 277,20,52);
var wall15 = createSprite(227, 245,20,53);
var wall16 = createSprite(280, 280,20,53);
var wall17 = createSprite(335, 245,20,53);
var wall18 = createSprite(390, 350,20,100);
wall18.shapeColor="yellow"
                                                                                                                                                                                                                                                                                                                                                                                                
   
   
   
   
   
   
   
   
   
   
   
   
   

                                                                                              
   
   
   

//create cup
var cup
  
function draw() {
  background("white");

if (keyDown("UP_ARROW")) {
sofia.y=sofia.y-3;
}
if (keyDown("DOWN_ARROW")) {
 
sofia.y=sofia.y+3;
}
if (keyDown("RIGHT_ARROW")) {
 
sofia.x=sofia.x+3;
 }
 if (keyDown("LEFT_ARROW")) {
  
sofia.x=sofia.x-3;
}

sofia.bounceOff(wall1);
sofia.bounceOff(wall2);
sofia.bounceOff(wall3);
sofia.bounceOff(wall4);
sofia.bounceOff(wall5);
sofia.bounceOff(wall6);
sofia.bounceOff(wall7);
sofia.bounceOff(wall8);
sofia.bounceOff(wall9);
sofia.bounceOff(wall10);
sofia.bounceOff(wall11);
sofia.bounceOff(wall12);
sofia.bounceOff(wall13);
sofia.bounceOff(wall14);
sofia.bounceOff(wall15);
sofia.bounceOff(wall16);
sofia.bounceOff(wall17);
sofia.bounceOff(wall18);



createEdgeSprites();
sofia.bounceOff(edges);

drawSprites();

}





































function resetSofia()
{
  Sofia.bounceOff(wall1);
Sofia.bounceOff(wall2);
Sofia.bounceOff(wall3);
Sofia.bounceOff(wall4);
Sofia.bounceOff(wall5);
Sofia.bounceOff(wall6);
Sofia.bounceOff(wall7);
Sofia.bounceOff(wall8);
Sofia.bounceOff(wall9);
Sofia.bounceOff(wall10);
Sofia.bounceOff(wall11);
Sofia.bounceOff(wall12);
Sofia.bounceOff(wall13);
Sofia.bounceOff(wall14);
Sofia.bounceOff(wall15);
Sofia.bounceOff(wall16);
Sofia.bounceOff(wall17);
Sofia.bounceOff(wall18);
Sofia.bounceOff(wall19);
Sofia.bounceOff(wall20);
Sofia.bounceOff(wall21);
Sofia.bounceOff(wall22);
}

function checkwin()
{
  if ( Sofia.isTouching(cup))  
{
  textSize(40);
  stroke("red");
  text("You Win", 130,242);
  }
}























// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
