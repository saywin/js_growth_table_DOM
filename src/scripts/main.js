'use strict';

const table = document.querySelector('tbody');
const container = document.querySelector('.container');

container.addEventListener('click', (e) => {
  const buttonColumnPlus = container.querySelector('.append-column');
  const buttonColumnMinus = container.querySelector('.remove-column');
  const buttonRowPlus = container.querySelector('.append-row');
  const buttonRowMinus = container.querySelector('.remove-row');
  const countColumns = table.childElementCount;
  const countRows = table.firstElementChild.childElementCount;
  const allColumn = table.querySelectorAll('tr');

  if (e.target === buttonColumnPlus && countColumns < 10) {
    const column = table.firstElementChild.cloneNode(true);

    table.appendChild(column);
    addDisabledPlus(buttonColumnPlus, countColumns);
    delAttribute(buttonColumnMinus);
  }

  if (e.target === buttonColumnMinus && countColumns > 2) {
    addDisabledMinus(buttonColumnMinus, countColumns);
    table.firstElementChild.remove();
    delAttribute(buttonColumnPlus);
  }

  if (e.target === buttonRowPlus && countRows <= 10) {
    allColumn.forEach((elem) => {
      const newRow = document.createElement('td');

      elem.appendChild(newRow);
    });
    addDisabledPlus(buttonRowPlus, countRows);
    delAttribute(buttonRowMinus);
  }

  if (e.target === buttonRowMinus && countRows >= 2) {
    allColumn.forEach((elem) => {
      elem.firstElementChild.remove();
    });
    addDisabledMinus(buttonRowMinus, countRows);
    delAttribute(buttonRowPlus);
  }
});

function delAttribute(button) {
  if (button.hasAttribute('disabled')) {
    button.removeAttribute('disabled');
  }
}

function addDisabledPlus(button, count) {
  if (count === 9) {
    button.setAttribute('disabled', '');
  }
}

function addDisabledMinus(button, count) {
  if (count === 3) {
    button.setAttribute('disabled', '');
  }
}
