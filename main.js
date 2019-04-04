var box = document.querySelector('.box');
var boxWidth = document.querySelector('.box').clientWidth;
var boxHeight = document.querySelector('.box').clientHeight;
var containerWidth = document.querySelector('.box-container').clientWidth;
var containerHeight = document.querySelector('.box-container').clientHeight;
var command;
var start;

document.querySelector('.box-controller').addEventListener('click', function (e) {
    command = e.target.className;
    if (command === "left" && boxWidth === 50 && boxHeight === 50) {
        clearInterval(start);
        return;
    } else if (command === "right" && boxWidth === 1250) {
        clearInterval(start);
        return;
    } else if (command === "down" && boxHeight === 600) {
        clearInterval(start);
        return;
    } else if (command === "up" && boxHeight === 50) {
        clearInterval(start);
        return;
    }

    move(command);
});


document.querySelector('.play').addEventListener('click', function () {
    clearInterval(start);

    var start = setInterval(function () {
        move(command);
    }, 1000);
    console.log('u pressed play');
});

document.querySelector('.stop').addEventListener('click', function () {
    clearInterval();
    console.log('u pressed stop');
});

function move(direction) {
    if (direction === "right") {
        boxWidth += 50;
        box.style.left = `${boxWidth}px`;
    } else if (direction === "down") {
        boxHeight += 50;
        box.style.top = `${boxHeight}px`;
    } else if (direction === "left") {
        boxWidth -= 50;
        box.style.left = `${boxWidth}px`;
    } else if (direction === "up") {
        boxHeight -= 50;
        box.style.top = `${boxHeight}px`;
    }
}
