function createTable(numberOfColumns, numberOfLines) {
  const tableIntes = document.querySelector('#pixel-board');

  for (let index = 0; index < numberOfLines; index += 1) {
    const pixelsLines = document.createElement('tr');
    tableIntes.appendChild(pixelsLines);
    for (let i = 0; i < numberOfColumns; i += 1) {
      const pixelsColumns = document.createElement('td');
      pixelsLines.appendChild(pixelsColumns);
      pixelsColumns.classList.add('pixel');
    }
  }
}

function selectElements(event) {
  let actual = document.querySelector('.selected');

  if (!event.target.classList.contains('.selected')) {
    actual.classList.remove('selected');
    event.target.classList.add('selected');
  
  }

}

window.onload = function () {
  createTable(5, 5);
  document.querySelector('#black').addEventListener('click', selectElements);
  document.querySelector('#blue').addEventListener('click', selectElements);
  document.querySelector('#red').addEventListener('click', selectElements);
  document.querySelector('#purple').addEventListener('click', selectElements);
}