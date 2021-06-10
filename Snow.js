class Snow {
    constructor(x,y,r){
        var options = {

            friction :0,
            isStatic :false,
            density :0.5
        }
        this.x=x;
        this.y=y;
        this.r=8,
        this.body = Bodies.circle(x,y,this.r,options);
        this.color = color(255,255,255);
        World.add(world,this.body);
    }
    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push ();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(this.x,this.y,this.r);
        pop ();

    }

}