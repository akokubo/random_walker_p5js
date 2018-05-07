/*jslint browser:true, this:true */
/*global createCanvas, width, height, stroke, background, point, int, random */

var w;

function Walker() {
    "use strict";

    this.x = width / 2;
    this.y = height / 2;

    this.display = function () {
        stroke(0);
        point(this.x, this.y);
    };

    this.step = function () {
        var choice = int(random(4));

        if (choice === 0) {
            this.x += 1;
        } else if (choice === 1) {
            this.x -= 1;
        } else if (choice === 2) {
            this.y += 1;
        } else {
            this.y -= 1;
        }
    };
}

function setup() {
    "use strict";

    createCanvas(640, 360);
    w = new Walker();
    background(255);
}

function draw() {
    "use strict";

    w.step();
    w.display();
}
