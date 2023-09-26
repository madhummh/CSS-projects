const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");

const ctx = canvas.getContext("2d");

console.log(ctx.strokeStyle)

let size = 10;
let isPressed = false;
let color = 'black';
let x;
let y;


canvas.addEventListener('mousedown', function (e) {
  isPressed = true

  x = e.offsetX
  y = e.offsetY

  // console.log(isPressed, x, y);
})



canvas.addEventListener('mouseup', function (e) {
  isPressed = false

  x = undefined
  y = undefined

  // console.log(isPressed, x, y);
})



canvas.addEventListener('mousemove', function (e) {
  if (isPressed) {
    const x2 = e.offsetX
    const y2 = e.offsetY

    console.log(x2, y2);

    drawCircle(x2, y2)
    drawLine(x, y, x2, y2)

    x = x2
    y = y2

  }
})



function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2, true);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {

  ctx.beginPath()
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color
  ctx.lineWidth = size * 2
  ctx.stroke()
}

// drawCircle(100, 200);
// drawLine(300, 500, 200, 500);

function updateSizeOnScreen() {
  sizeEl.innerText = size
}

increaseBtn.addEventListener('click', () => {
  size += 5
  if (size > 50) {
    size = 50
  }
  updateSizeOnScreen()
})

decreaseBtn.addEventListener('click', () => {
  size -= 5
  if (size < 5) {
    size = 5
  }
  updateSizeOnScreen()
})




colorEl.addEventListener('change', (e) => color = e.target.value)


clearEl.addEventListener('click', function () {
  console.log("clicked", ctx);
})
clearEl.addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height))