
const calculatorScreen = document.querySelector('.display');
const keys = document.querySelector('.buttons');

keys.addEventListener('click', (event) => {
const { target } = event;
const { value } = target;
if (!target.matches('button')) {
return;
}

switch (value) {
case '+':
case '-':
case '*':
case '/':
calculatorScreen.value += value;
break;
case '=':
calculatorScreen.value = eval(calculatorScreen.value);
break;
case 'C':
calculatorScreen.value = '';
break;
default:
calculatorScreen.value += value;
break;
}
});
