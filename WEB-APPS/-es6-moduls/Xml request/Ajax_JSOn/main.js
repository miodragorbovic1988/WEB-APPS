$button = document.querySelector('#send');
$div = document.querySelector('#idImg');



$button.addEventListener('click', function () {


    var newXHR = new XMLHttpRequest();

    newXHR.open('GET', "https://dog.ceo/api/breeds/image/random");

    newXHR.onload = function (event) {
        if (newXHR.status === 200) {
            var data = JSON.parse(newXHR.responseText);

            document.querySelector('#idImg').innerHTML = '';

            var newImg = document.createElement('img');
            newImg.setAttribute('src', data.message);
            $div.appendChild(newImg);
        }
    }
    newXHR.send();
});