const url = 'https://hexschool.github.io/js-filter-data/data.json';
const filter = document.querySelector('.filter');
const table = document.querySelector('.table-content');
let showData = [];
let category = '';
let data;

function renderData(Data) {
  let str = '';
  Data.forEach((i) => {
    const content = `
    <tr>
      <td>${i.作物名稱}</td>
      <td>${i.市場名稱}</td>
      <td>${i.上價}</td>
      <td>${i.中價}</td>
      <td>${i.下價}</td>
      <td>${i.平均價}</td>
      <td>${i.交易量}</td>
    </tr>
    `;
    str += content;
  });
  table.innerHTML = str;
}

function filterCategory(e) {
  if (e.target.nodeName === 'BUTTON') {
    category = e.target.dataset.category;
    showData = data.filter((i) => i.種類代碼 === category);
    renderData(showData);
  } else {
    renderData(data);
  }
}

/* global axios */
axios.get(url).then((res) => {
  data = res.data.filter((a) => a.作物名稱);
  renderData(data);
});

filter.addEventListener('click', (e) => {
  filterCategory(e);
});
