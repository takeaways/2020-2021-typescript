var numberOne = Math.ceil(Math.random() * 9);
var numberTwo = Math.ceil(Math.random() * 9);
var result = numberOne * numberTwo;
var word = document.createElement('div');
word.textContent = numberOne + " * " + numberTwo + " = ?";
document.body.append(word);
var form = document.createElement('form');
var input = document.createElement('input');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var value = parseInt(document.querySelector('input').value);
    if (value === result) {
        alert('정답입니다.');
        numberOne = Math.ceil(Math.random() * 9);
        numberTwo = Math.ceil(Math.random() * 9);
        result = numberOne * numberTwo;
        word.textContent = numberOne + " * " + numberTwo + " = ?";
        input.value = '';
    }
    else {
        alert('떙 다시 시도하세요');
        input.value = '';
    }
    input.focus();
});
form.appendChild(input);
document.body.append(form);
