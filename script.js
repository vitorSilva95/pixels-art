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
window.onload = function () {
  createTable(5, 5);
  let selectedItem = document.querySelector('#black');
  selectedItem.classList.add('selected');
}