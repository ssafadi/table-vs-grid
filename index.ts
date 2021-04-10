import "./style.css";
import * as faker from "faker";
import { interval } from "rxjs";
import { take } from "rxjs/operators";

const MILLISECONDS = 1000;
const NUM = 10;

const container = document.querySelector("#grid");
const table = document.querySelector("#table");

function generateRow(value) {
  const name = faker.name.findName();
  const email = faker.internet.email();

  const col1 = createDiv(name);
  const col2 = createDiv(email);
  container.appendChild(col1);
  container.appendChild(col2);

  const row = createTableRow([name, email]);
  table.appendChild(row);
}

function createDiv(content) {
  const el = document.createElement("DIV");
  el.innerHTML = content;
  return el;
}

function createTableRow(items) {
  const row = document.createElement("TR");
  items.forEach(item => {
    const td = document.createElement("TD");
    td.innerHTML = item;
    row.appendChild(td);
  });
  return row;
}

interval(MILLISECONDS)
  .pipe(take(NUM))
  .subscribe(value => generateRow(value));
