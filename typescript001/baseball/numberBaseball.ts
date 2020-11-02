(() => {
  const chooseNumber = () => {
    const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const arr: number[] = [];
    for (let i = 0; i < 4; i++) {
      arr.push(candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0]);
    }
    return arr;
  };

  let arr = chooseNumber();

  const { body } = document;
  const result = document.createElement('h1');
  body.append(result);

  const form = document.createElement('form');
  const input = document.createElement('input');
  const button = document.createElement('button');
  input.type = 'text';
  input.maxLength = 4;
  button.textContent = '입력';

  form.append(input);
  form.append(button);
  body.append(form);

  let wrongCount = 0;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const targetValue: number[] = input.value.split('').map((t) => parseInt(t));
    if (targetValue.length !== 4) {
      return alert('값은 4개를 입력하셔야 합니다.');
    }

    const result: number[] = targetValue.map((t, index) => {
      if (t === arr[index]) {
        return 1;
      }
      if (arr.includes(t)) {
        return 0;
      }
      return -1;
    });

    const time = document.createElement('p');
    const s = result.filter((b) => b === 1);
    const b = result.filter((b) => b === 0);
    const o = result.filter((b) => b === -1);
    time.textContent = `${s.length}s ${b.length}b`;
    body.appendChild(time);
    wrongCount++;
    if (wrongCount === 10) {
      alert('실패!!!');
      wrongCount = 0;
      location.reload();
    } else {
      if (s.length === 4) {
        alert('축하 합니다. 홈런');
        setTimeout(() => {
          location.reload();
        }, 3000);
      }
    }
  });
})();
