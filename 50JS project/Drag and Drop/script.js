const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for (const empty of empties) {
  empty.addEventListener('dragover', dragOver)
  empty.addEventListener('dragenter', dragEnter)
  empty.addEventListener('dragleave', dragLeave)
  empty.addEventListener('drop', dragDrop)
}

function dragStart() {
  this.className += ' hold'
  setTimeout(() => this.className = 'invsible', 0)

}


function dragEnd() {
  this.className = 'fill'
}


function dragOver(e) {
  e.preventDefault()
  console.log("drag over");
}


function dragEnter(e) {
  e.preventDefault()
  // Assuming 'this' refers to the HTML element you want to modify
  this.className = this.className + ' hovered';
  //we can write the above code in shortform also

  // this.className += ' hovered'

  console.log("drag enter");
}


function dragLeave() {
  this.className = ' empty'

  console.log("drag Leave");
}


function dragDrop() {
  this.className = 'empty'
  this.append(fill)
}