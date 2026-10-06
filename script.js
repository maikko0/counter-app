let count = 0;
const countDisplay = document.getElementById('count');
const btn = document.getElementById('incrementBtn');

btn.addEventListener('click', () => {
  count++;
  countDisplay.innerText = count;
});
