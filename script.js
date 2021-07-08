window.onload = function () {
  let tableIntes = document.querySelector('#pixel-board');
  let numberOfLines = 5;
  let numberOfColumns = 5;

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


