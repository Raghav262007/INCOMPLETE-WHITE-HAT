class Hammer {
  constructor() {
    var options = {
      restitution: 0.5,
      friction: 1.0,
      density: 2,
    };
    this.body = Bodies.rectangle(800, 600, 150, 20, options);
    this.width = 150;
    this.height = 20;

    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("orange");
    fill("yellow");
    rect(0, 0, this.width, this.height);
    pop();
  }
}
