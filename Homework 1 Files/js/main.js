/*
     Name: David S Gall
     Date: 02/03/15
     Class & Section:  WIA-1502 sec 01
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here
//window.onload = function(){

if(Modernizr.canvas) {

    var myCanvas = document.getElementById("Canvas1");
    if (myCanvas && myCanvas.getContext) {
        var context = myCanvas.getContext("2d");

        if (context) {

            context.fillStyle = "blue";
            context.strokeStyle = "black";
            context.lineWidth = 4;
            context.fillRect(0, 0, 50, 100);
            context.strokeRect(0, 0, 50, 100);
            context.stroke();

        }
    }


    /*******************************************
     PART 2

     Draw a circle starting at point (50 ,50)
     That has a radius of 20 px
     Set the color of the circle to a shade of red and set the alpha to .5
     Set the stroke color to black and use a radius of 30px for this circle.

     Reminder - set the style first then draw.
     Use the arc method
     ********************************************/


//Draw Circle here


    var myCanvas2 = document.getElementById("Canvas2");
    if (myCanvas2 && myCanvas2.getContext) {
        var context2 = myCanvas2.getContext("2d");
        if (context2) {

            context2.globalAlpha = .5;
            context2.fillStyle = "red";
            context2.strokeStyle = "black";

            context2.beginPath();
            context2.arc(50, 50, 20, 0, 2 * Math.PI);
            context2.fill();

            context2.stroke();


        }
    }


    /*******************************************
     PART 3

     Practice using Path drawing.
     Create a 5-point star shaped pattern using the lineTo method.
     Begin this shape at (100, 100)

     Height and width and color are up to you.

     ********************************************/


//Draw Star here

    var myCanvas3 = document.getElementById("Canvas3");
    if (myCanvas3 && myCanvas3.getContext) {
        var context3 = myCanvas3.getContext("2d");
        if (context3) {

            context3.strokeStyle = "green";
            context3.lineWidth = 4;
            context3.fillStyle = "blue";
            context3.beginPath();
            context3.moveTo(100, 100);
            context3.lineTo(113,76);
            context3.lineTo(125,100);
            context3.lineTo(152,105);
            context3.lineTo(132,124);
            context3.lineTo(137,150);
            context3.lineTo(113,138);
            context3.lineTo(89,150);
            context3.lineTo(93,124);
            context3.lineTo(74,104);
            context3.closePath();
            context3.fill();
            context3.stroke();
//Created a star in Adobe Illustrator and tracked the points.

        }
    }

    /*******************************************
     PART 4

     Practice drawing with Bezier curves.
     Try drawing the top to an umbrella.
     This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

     Position, height, width and color are your choice.
     Do not overlap any other object.

     ********************************************/

//Draw Umbrella top here

    var myCanvas4 = document.getElementById("Canvas4");
    if(myCanvas4 && myCanvas4.getContext){
        var context4 = myCanvas4.getContext("2d");

        if(context4){

            context4.strokeStyle = "black";
            context4.lineWidth = 1;
            context4.fillStyle = "red";

            context4.beginPath();
            context4.arc(75,75,50,Math.PI,2*Math.PI);
            context4.bezierCurveTo(90,28,75,75,75,75);
            context4.bezierCurveTo(45,28,25,75,25,75);
            context4.closePath();
            context4.fill();
            context4.stroke();




        }
    }

    /*******************************************
     PART 5

     Practice using text.
     Draw text into your canvas.  It can said whatever you would like in any color.

     ********************************************/

//Draw text here

    var myCanvas5 = document.getElementById("Canvas5");
    if(myCanvas5 && myCanvas5.getContext)
        var context5 = myCanvas5.getContext("2d");
    if(context5){

        var myText = "Hello, my name is David!";
        context5.font = "22pt Helvetica";
        context5.fillStyle = "#4869FF";
        context5.strokeStyle = "#42E3E8";
        context5.fillText(myText,50,50);
        context5.strokeText(myText,50,50);


    }

    /*******************************************
     PART 6

     Pixel manipulation.
     Draw the image logo.png into the canvas in the following 3 ways.
     1. The image exactly as it is.
     2. Shrink the image by 50%
     3. Slice a section of the logo out and draw that onto the canvas.

     Reminder to use the drawImage method for all 3 of the ways.

     ********************************************/

//Draw images here

    var myCanvas6 = document.getElementById("Canvas6");

    if(myCanvas6 && myCanvas6.getContext){
        var context6 = myCanvas6.getContext("2d");
        if(context6){


            var image = document.getElementById("img1");


            //This draws the image at full size starting at the point 0,0.
            context6.drawImage(image,0,0);

            //This cuts the picture in half and displays it at the point 0,0
            context6.drawImage(image, 0,0,image.width/2, image.height/2);

            //This will draw one of the little red circles at the point 0,0
            context6.drawImage(image, 1252,574,126,132,0,0,126,132);

        }
    }

    /*******************************************
     PART 7

     Putting it all together.

     Using a combination of all the methods.
     Create a complex scene.
     You must use at least 3 different methods.

     ********************************************/

// Draw scene here


//};
}
