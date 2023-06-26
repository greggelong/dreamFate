class Gurtle{

    constructor(x,y,clr){
      this.x = x; 
      this.y = y;
      this.clr = clr;
      this.angle = 0;
      this.stack = [];
    }
  
    forward(amt){
      // using polar coordinates
      stroke(this.clr);
      let x2 = this.x + amt * cos(this.angle);
      let y2 = this.y + amt * sin(this.angle);
      line(this.x,this.y,x2,y2);
      //set the x and y to new position
      this.x = x2;
      this.y = y2;
    }
  
    right(deg){
      this.angle += deg;
  
    }
  
    backward(amt){
      this.forward(-amt);
    }
  
    left(deg){
      this.angle -=deg;
    }
  
    pushIt(){
      // pushes angle and x y pos  and angle into a stack
      let pos = [this.x, this.y, this.angle];
      this.stack.push(pos);
      //console.log("push", pos);
  
    }
  
    popIt(){
      let pos = this.stack.pop();
      //console.log("pop",pos);
      this.x = pos[0];
      this.y = pos[1];
      this.angle = pos[2];
    }
  
  
  
  
  }