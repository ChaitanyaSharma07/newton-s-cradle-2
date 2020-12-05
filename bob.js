class Bob {
    constructor(x, y, radius) {
        var options = {
            frictionAir: 0.0,
            friction: 1.0,
            slop: 1,
            restitution: 1.0,
            intertia: Infinity
        }

        this.radius = radius;
        this.body = Bodies.circle(x, y, this.radius, options);
        this.x = x;
        this.y = y;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(4);
        stroke("yellow")
        fill("blue");
        ellipse(0, 0, 60, 60)
        pop();

    }
}