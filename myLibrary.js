function isTouching(o1,o2){

    if(o1.x - o2.x < o1.width/2 + o2.width/2 && o2.x - o1.x < 
      o1.width/2 + o2.width/2 && o2.y - o1.y < o2.height/2 + o1.height/2
      && o1.y - o2.y < o2.height/2 + o1.height/2 ){
        return true;
      
    }
    else{
      return false;
    }
  
  }
  
  function bounce(o3,o4){
    if(o4.x - o3.x < o3.width/2 + o4.width/2 && o3.x - o4.x < o3.width/2 + o4.width/2){
      o4.velocityX = -1 * o4.velocityX;
      o3.velocityX = -1 * o3.velocityX;
    }
  
    if(o4.y - o3.y < o3.height/2 + o4.height/2 && o3.y - o4.y < o3.height/2 + o4.height/2){
      o4.velocityY = -1 * o4.velocityY;
      o3.velocityY = -1 * o3.velocityY;
    }
  }