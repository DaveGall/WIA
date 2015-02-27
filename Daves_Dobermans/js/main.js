

if(Modernizr.canvas) {

    var myCanvas3 = document.getElementById("Canvas3");
    if (myCanvas3 && myCanvas3.getContext) {
        var context2 = myCanvas3.getContext("2d");
        if (context2) {

            context2.fillStyle = "black";
            context2.lineWidth = 0;
            context2.fillRect(0, 0, 250, 250);
            context2.stroke();

            context2.fillStyle="rgba(149,162,0,101)";
            context2.beginPath();
            context2.moveTo(168,149);
            context2.lineTo(201,149);
            context2.lineTo(183,118);
            context2.bezierCurveTo(183,115,184,113,184,111);
            context2.bezierCurveTo(184,88,170,69,151,61);
            context2.lineTo(130,25);
            context2.lineTo(109,62);
            context2.bezierCurveTo(90,70,77,89,77,111);
            context2.bezierCurveTo(77,113,77,115,77,117);
            context2.lineTo(59,149);
            context2.lineTo(92,149);
            context2.bezierCurveTo(102,159,115,164,130,164);
            context2.bezierCurveTo(145,164,158,159,168,149);
            context2.fill();

            context2.fillStyle="rgb(231,175,0)";
            context2.beginPath();
            context2.moveTo(130,25);
            context2.lineTo(147,61);
            context2.lineTo(187,66);
            context2.lineTo(158,94);
            context2.lineTo(165,133);
            context2.lineTo(130,114);
            context2.lineTo(95,133);
            context2.lineTo(102,94);
            context2.lineTo(73,66);
            context2.lineTo(112,61);
            context2.lineTo(130,25);
            context2.fill();

            var myText = "Star Pet Foods";
            context2.font = "22pt Helvetica";
            context2.fillStyle = "#4869FF";
            context2.strokeStyle = "#FFFFFF";
            context2.fillText(myText,30, 200);
            context2.strokeText(myText,30, 200);








        }
    }
    var myCanvas4 = document.getElementById("Canvas4");
    if (myCanvas4 && myCanvas4.getContext) {
        var context = myCanvas4.getContext("2d");
        if (context) {

            context.fillStyle = "rgb(46,21,0)";
            context.beginPath();
            context.moveTo(244, 239);
            context.bezierCurveTo(244, 241, 241, 244, 239, 244);
            context.lineTo(11, 244);
            context.bezierCurveTo(8, 244, 6, 241, 6, 239);
            context.lineTo(6, 13);
            context.bezierCurveTo(6, 10, 8, 8, 11, 8);
            context.lineTo(239, 8);
            context.bezierCurveTo(241, 8, 244, 10, 244, 13);
            context.lineTo(244, 239);
            context.fill();

            context.fillStyle = "rgb(139,74,0)";
            context.beginPath();
            context.moveTo(238, 234);
            context.bezierCurveTo(238, 236, 235, 239, 233, 239);
            context.lineTo(17, 239);
            context.bezierCurveTo(14, 239, 12, 236, 12, 234);
            context.lineTo(12, 22);
            context.bezierCurveTo(12, 19, 14, 17, 17, 17);
            context.lineTo(233, 17);
            context.bezierCurveTo(235, 17, 238, 19, 238, 22);
            context.lineTo(238, 234);
            context.fill();

            context.fillStyle = "rgb(139,105,0)";
            context.beginPath();
            context.moveTo(233, 229);
            context.bezierCurveTo(233, 231, 230, 234, 228, 234);
            context.lineTo(23, 234);
            context.bezierCurveTo(20, 234, 18, 231, 18, 229);
            context.lineTo(18, 30);
            context.bezierCurveTo(18, 27, 20, 25, 23, 25);
            context.lineTo(228, 25);
            context.bezierCurveTo(230, 25, 233, 27, 233, 30);
            context.lineTo(233, 229);
            context.fill();

            context.fillStyle = "rgb(185,151,0)";
            context.beginPath();
            context.moveTo(228, 224);
            context.bezierCurveTo(228, 226, 225, 229, 223, 229);
            context.lineTo(29, 229);
            context.bezierCurveTo(26, 229, 24, 226, 24, 224);
            context.lineTo(24, 37);
            context.bezierCurveTo(24, 34, 26, 32, 29, 32);
            context.lineTo(223, 32);
            context.bezierCurveTo(225, 32, 228, 34, 228, 37);
            context.lineTo(228, 224);
            context.fill();

            context.fillStyle = "rgb(208,162,0)";
            context.beginPath();
            context.moveTo(222, 217);
            context.bezierCurveTo(222, 219, 219, 222, 217, 222);
            context.lineTo(36, 222);
            context.bezierCurveTo(33, 222, 31, 219, 31, 217);
            context.lineTo(31, 45);
            context.bezierCurveTo(31, 42, 33, 40, 36, 40);
            context.lineTo(217, 40);
            context.bezierCurveTo(219, 40, 222, 42, 222, 45);
            context.lineTo(222, 217);
            context.fill();

            context.fillStyle = "rgb(231,207,0)";
            context.beginPath();
            context.moveTo(216, 212);
            context.bezierCurveTo(216, 214, 213, 217, 211, 217);
            context.lineTo(44, 217);
            context.bezierCurveTo(41, 217, 39, 214, 39, 212);
            context.lineTo(39, 54);
            context.bezierCurveTo(39, 51, 41, 49, 44, 49);
            context.lineTo(211, 49);
            context.bezierCurveTo(213, 49, 216, 51, 216, 54);
            context.lineTo(216, 212);
            context.fill();

            context.fillStyle = "rgb(255,254,0)";
            context.beginPath();
            context.moveTo(212, 208);
            context.bezierCurveTo(212, 210, 209, 213, 207, 213);
            context.lineTo(49, 213);
            context.bezierCurveTo(46, 213, 44, 210, 44, 208);
            context.lineTo(44, 61);
            context.bezierCurveTo(44, 58, 46, 56, 49, 56);
            context.lineTo(207, 56);
            context.bezierCurveTo(209, 56, 212, 58, 212, 61);
            context.lineTo(212, 208);
            context.fill();

            context.fillStyle = "rgb(185,96,0)";
            context.beginPath();
            context.moveTo(207, 203);
            context.bezierCurveTo(207, 205, 204, 208, 202, 208);
            context.lineTo(55, 208);
            context.bezierCurveTo(52, 208, 50, 205, 50, 203);
            context.lineTo(50, 68);
            context.bezierCurveTo(50, 65, 52, 63, 55, 63);
            context.lineTo(202, 63);
            context.bezierCurveTo(204, 63, 207, 65, 207, 68);
            context.lineTo(207, 203);
            context.fill();

            context.fillStyle = "rgb(139,36,0)";
            context.beginPath();
            context.moveTo(199, 196);
            context.bezierCurveTo(199, 198, 196, 201, 194, 201);
            context.lineTo(63, 201);
            context.bezierCurveTo(60, 201, 58, 198, 58, 196);
            context.lineTo(58, 77);
            context.bezierCurveTo(58, 74, 60, 72, 63, 72);
            context.lineTo(194, 72);
            context.bezierCurveTo(196, 72, 199, 74, 199, 77);
            context.lineTo(199, 196);
            context.fill();

            context.fillStyle = "rgb(0,0,0)";
            context.beginPath();
            context.moveTo(191, 188);
            context.bezierCurveTo(191, 190, 188, 193, 186, 193);
            context.lineTo(73, 193);
            context.bezierCurveTo(70, 193, 68, 190, 68, 188);
            context.lineTo(68, 87);
            context.bezierCurveTo(68, 84, 70, 82, 73, 82);
            context.lineTo(186, 82);
            context.bezierCurveTo(188, 82, 191, 84, 191, 87);
            context.lineTo(191, 188);
            context.fill();

            var myText1 = "PhotoTime";
            context.font = "14pt Helvetica";
            context.fillStyle = "#FFFFFF";
            context.strokeStyle = "#FFFFFF";
            context.fillText(myText1,85, 130);
            context.strokeText(myText1,85, 130);

        }
    }

}else{
    Mondernizer.load("js/flashcanvas.js");
}

$(function(){

    $('#Container').mixItUp({
        animation: {
            effects: 'fade rotateX(180deg)',
            duration: 2500
        }
    });
});


google.load("visualization", "1", {packages:["corechart","map"]});
google.setOnLoadCallback(drawChart);
function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Breed', 'Percentage of Bites'],
        ['Labs',     50],
        ['Terriers',      30],
        ['Chihuahuas',  10],
        ['Pitbulls', 5],
        ['Dobermans',    5]
    ]);

    var options = {
        title: 'Reported Dog Bites by Breed',
        is3D: true

    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}


google.setOnLoadCallback(drawMap);
function drawMap() {
    var location = google.visualization.arrayToDataTable([
        ['Lat', 'Long', 'Name'],
        [42.233816, -122.741521, "Dave's Dobermans"]
    ]);

    var options = {
        zoomLevel: 17,
        showTip: true
    };

    var map = new google.visualization.Map(document.getElementById('map_div'));
    map.draw(location, options);
}

var vid;

window.onload=function(){
  vid = document.getElementById("vid");

};

function pauseToggle(){

    if(vid.paused){
        vid.play();
    }else{
        vid.pause();
    }
}

