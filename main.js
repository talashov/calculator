const input_1 = document.querySelector(".num_1");
const input_2 = document.querySelector(".num_2");
const calc_1 = document.querySelector(".calc");

const button = document.querySelector("button");

const divTotal = document.getElementById('total');



button.onclick = function () {
  const num_1 = +input_1.value.trim();
  const num_2 = +input_2.value.trim();
  const calc = calc_1.value.trim();
  
  let result = `акая операция не существует ${calc}`;

  if (!num_1 || !num_2 || !calc) {
    result = 'нужно заполнить поля'
  }
  
  switch (calc) {
    case '+':
      result = num_1 + num_2;
      break;
    case '-':
      result = num_1 - num_2;
      break;
    case '*':
      result = num_1 * num_2;
      break;
    case '/':
      result = num_1 / num_2;
      break;
  } 
  divTotal.innerHTML = result
};