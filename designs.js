function makeGrid(height, width) {
  const table = document.getElementById("pixelCanvas");
  let panjara = '';


  for (let i = 0; i < height; i++) {
      panjara += '<tr class="row-' + i + '">';
     
      for (let j = 0; j < width; j++) {
          panjara += '<td class="cell" id="row-' + i + '_cell-' + j + '"></td>';
      }
      panjara += '</tr>';
  }

  table.innerHTML = panjara;


  addClickEventToCells();
}

//Malumotlarni olish
function MalumotOlish() {

event.preventDefault();
const height = document.getElementById('inputHeight').value;
const  width= document.getElementById('inputWidth').value;
makeGrid(height, width);
}

function addClickEventToCells() {
  
  const colorPicker = document.getElementById("colorPicker");
  const cells = document.getElementsByClassName('cell');
  for (let i = 0; i < cells.length; i++) {
      cells[i].addEventListener("click", function (event) {
          let clickedCell = event.target;
          clickedCell.style.backgroundColor = colorPicker.value;
      });
  }
}

document.getElementById('sizePicker').onsubmit = function () {
MalumotOlish();
};
makeGrid (7, 7);

