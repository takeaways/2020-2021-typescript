"use strict";
let imgCoords = '0';
const rsp = {
    ROCK: '0',
    SCISSORS: '-142px',
    PAPER: '-284px',
};
const score = {
    ROCK: 0,
    SCISSORS: 1,
    PAPER: -1,
}; // 상수로 고정 시킬 수 있습니다. readonly로 인터페이스로 만들경우에는 as const 대신 사용할 수 있습니다.
// const interval : number;
const intervalMaker = () => {
    return setInterval(() => {
        if (imgCoords === rsp.ROCK) {
            imgCoords = rsp.SCISSORS;
        }
        else if (imgCoords === rsp.SCISSORS) {
            imgCoords = rsp.PAPER;
        }
        else {
            imgCoords = rsp.ROCK;
        }
        const computer = document.querySelector("#computer");
        if (computer) {
            computer.style.background = 'url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ' + imgCoords + ' 0';
        }
    }, 100);
};
let interval = intervalMaker();
const computerChoice = (imgCoords) => {
    return Object.keys(rsp).find(k => rsp[k] === imgCoords); //undefined or null 있어서 무조건 값이 있다는 것을 보장하기 위해서 ! 느낌표를 붙여 준다.
};
document.querySelectorAll('.btn').forEach((b) => {
    b.addEventListener('click', function (e) {
        clearInterval(interval);
        const myChoice = this.textContent;
        const myScore = score[myChoice];
        const computerScore = score[computerChoice(imgCoords)];
        const diff = myScore - computerScore;
        const result = document.createElement('div');
        if (diff === 0) {
            result.textContent = '비겼습니다.';
            console.log('비겼습니다.');
        }
        else if ([-1, 2].includes(diff)) {
            result.textContent = '이겼습니다.';
            console.log('이겼습니다.');
        }
        else {
            result.textContent = '졌습니다.';
            console.log('졌습니다.');
        }
        document.body.append(result);
        setTimeout(() => {
            alert("게임을 다시 시작 합니다.");
            interval = intervalMaker();
        }, 1000);
    });
});
