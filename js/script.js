const button = document.querySelector('button');

function logNumber(num) {
    console.log('Il numero è: ' + num)
}

button.addEventListener('click', function () {
    logNumber(3);
});
