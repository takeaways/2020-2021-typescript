"use strict";
(function () {
    var chooseNumber = function () {
        var candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        var arr = [];
        for (var i = 0; i < 4; i++) {
            arr.push(candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0]);
        }
        return arr;
    };
    var arr = chooseNumber();
    var body = document.body;
    var result = document.createElement('h1');
    body.append(result);
    var form = document.createElement('form');
    var input = document.createElement('input');
    var button = document.createElement('button');
    input.type = 'text';
    input.maxLength = 4;
    button.textContent = '입력';
    form.append(input);
    form.append(button);
    body.append(form);
    var wrongCount = 0;
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        var targetValue = input.value.split('').map(function (t) { return parseInt(t); });
        if (targetValue.length !== 4) {
            return alert('값은 4개를 입력하셔야 합니다.');
        }
        var result = targetValue.map(function (t, index) {
            if (t === arr[index]) {
                return 1;
            }
            if (arr.includes(t)) {
                return 0;
            }
            return -1;
        });
        var time = document.createElement('p');
        var s = result.filter(function (b) { return b === 1; });
        var b = result.filter(function (b) { return b === 0; });
        var o = result.filter(function (b) { return b === -1; });
        time.textContent = s.length + "s " + b.length + "b";
        body.appendChild(time);
        wrongCount++;
        if (wrongCount === 10) {
            alert('실패!!!');
            wrongCount = 0;
            location.reload();
        }
        else {
            if (s.length === 4) {
                alert('축하 합니다. 홈런');
                setTimeout(function () {
                    location.reload();
                }, 3000);
            }
        }
    });
})();
