$button = document.querySelector('#send');
$input = document.querySelector('#ipAdress');
$ul = document.querySelector('ul');


$button.addEventListener('click', function () {
    inputValue = $input.value;

    var newXHR = new XMLHttpRequest();

    newXHR.open('GET', "../geo.xml");

    newXHR.onload = function (event) {
        if (newXHR.status === 200) {
            var xhrDoc = newXHR.responseXML;
            var city = xhrDoc.querySelector('city').textContent;
            var li = document.createElement('li');
            li.textContent = city;
            $ul.appendChild(li);
        }
    }
    newXHR.send();
});


