let greg; //variable to hold gurtle
let offset;
let yuan;
// all the parts will have the same size
let sz = 90;
let instr = [
  ["f", sz],
  ["push"],
  ["l", 45],
  ["f", sz],
  ["pop"],
  ["r", 45],
  ["f", sz],
  //E start
  ["push"],
  ["r", 45],
  ["f", sz],
  ["pop"],
  ["r", 135],
  ["f", sz],
  ["push"],
  ["l", 90],
  ["f", sz],
  ["pop"],
  ["r", 0],
  ["f", sz],
  ["l", 90],
  ["f", sz],
  ["l", 45],
  ["f", sz],
  ["l", 65],
  ["f", sz],
  ["r", 65],
  ["f", sz],
];

let instr2 = [
  ["f", sz],
  ["r", 135],
  ["f", sz],
  ["l", 135],
  ["f", sz],
  ["r", 65],
  ["f", sz],
  ["r", 90],
  ["f", sz],
  ["r", 90],
  ["f", sz],
  ["r", 90],
  ["f", sz],
  ["r", 90],
  ["f", sz],
];

let instr3 = [
  ["f", sz],
  ["r", 60],
  ["f", sz],
  ["l", 60],
  ["f", sz],
  ["r", 60],
  ["f", sz],
  ["l", 60],
  ["f", sz],
  ["r", 60],
  ["f", sz],
  ["l", 60],
  ["f", sz],
  ["r", 60],
  ["f", sz],
];

let fate = instr3;
let count = 1;
let pressed = false;
function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  greg = new Gurtle(width / 3.5, height - 35, color(167, 173, 186));
  yuan = new Gurtle(width - width / 3.5, height - 35, color(192, 197, 206));
  greg.angle = -90;
  yuan.angle = -90;
  strokeWeight(15);
  background(0);
  //greg.forward(100);
  offset = 1;
  doinstr(greg, fate, offset);

  //frameRate(18)
}

function draw() {
  background(0);
  if (pressed){
    fill(0,255,0)
    noStroke();
    textSize(40);
    text("PRESSED", 30, 60);

  }

  if (fate ===instr3) {
    fill(255, 255, 0);
    noStroke();
    textSize(40);
    text("Press to choose fate!", 30, 100);
  } else if(fate !==instr3){
    fill(255, 0, 0);
    noStroke();
    textSize(40);
    text("Press to reset fate!", 30, 100);
  }
  offset = sin(count);

  // greg.angle = -90;
  // greg.x=width/3.5
  // greg.y=height-35
  // doinstr(greg,instr,offset)
  if (pressed && fate != instr3 && count < 3) {
    fate = instr3;
    pressed = false;
  } else if (pressed && count < 3) {
    fate = random([instr, instr2]);
    pressed = false;
  }

  yuan.angle = -90;
  yuan.x = width / 2;
  yuan.y = height - 35;
  doinstr(yuan, fate, offset);
  //offset++
  //offset++
  //print(offset)
  count++;
  if (count > 180) {
    count = 1;
  }
}

function mouseReleased() {
  pressed = true;
  print("hello")
}

function doinstr(turt, ins, off) {
  // print(turt,ins)
  //offset = 100
  for (let i = 0; i < ins.length; i++) {
    // print(i, ins[i][0])
    switch (ins[i][0]) {
      case "l":
        turt.left(ins[i][1] * off);

        break;

      case "r":
        turt.right(ins[i][1] * off);

        break;
      case "f":
        turt.forward(ins[i][1]);
        break;
      case "push":
        turt.pushIt();
        break;
      case "pop":
        turt.popIt();
        break;
    }
  }
}

function koch(t, order, size) {
  if (order == 0) {
    t.forward(size);
  } else {
    koch(t, order - 1, size / 3); // Go 1/3 of the way
    t.left(60);
    koch(t, order - 1, size / 3);
    t.right(120);
    koch(t, order - 1, size / 3);
    t.left(60);
    koch(t, order - 1, size / 3);
  }
}
