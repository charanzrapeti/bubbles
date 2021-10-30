console.log("hello world ");

var draw = () => {
  const canvas = document.getElementById("c");
  var ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (i = 0; i < window.circlearray.length; i++) {
    ctx.beginPath();
    ctx.arc(
      (window.circlearray[i].x += window.circlearray[i].speed_x),
      (window.circlearray[i].y += window.circlearray[i].speed_y),
      10,
      0,
      2 * Math.PI,
      false
    );
    if (window.circlearray[i].x <= 10 || window.circlearray[i].x >= 790) {
      window.circlearray[i].speed_x *= -1;
    }
    if (window.circlearray[i].y <= 10 || window.circlearray[i].y >= 745) {
      window.circlearray[i].speed_y *= -1;
    }
    for (j = 0; j < window.circlearray.length; j++) {
      if (j != i) {
        var center_x = window.circlearray[i].x - window.circlearray[j].x;
        var center_y = window.circlearray[i].y - window.circlearray[j].y;
        var distance = Math.sqrt(center_x * center_x + center_y * center_y);
        if (Math.abs(distance) <= 20.5) {
          //console.log("happened");
          //console.log(center_y, center_y, distance);
          window.circlearray[i].speed_x *= -1;
        }
      }
    }

    ctx.stroke();
  }

  window.requestAnimationFrame(draw);
};

class Circle {
  constructor(x, y, spx, spy) {
    (this.x = x),
      (this.y = y),
      (this.count_x = 0),
      (this.count_y = 0),
      (this.speed_x = spx),
      (this.speed_y = spy);
  }
}
window.requestAnimationFrame(draw);
var circlearray = [];
document.addEventListener("mousedown", (Event) => {
  //var speed_x = Math.floor(Math.random() * (5 - 0.5)) + 0.5;
  if (Math.random() <= 0.5) {
    var speed_x = Math.floor(Math.random() * -5);
  } else {
    var speed_x = Math.floor(Math.random() * 5);
  }
  if (Math.random() <= 0.5) {
    var speed_y = Math.floor(Math.random() * -5);
  } else {
    var speed_y = Math.floor(Math.random() * 5);
  }
  if (speed_x == 0 || speed_y == 0) {
    speed_x += 1;
    speed_y += 1;
  }

  var circle = new Circle(Event.pageX, Event.pageY, speed_x, speed_y);

  circlearray.push(circle);

  window.circlearray = circlearray;
});

document.addEventListener("mousemove", (Event) => {});
//setInterval(draw, 1000 / 100);
