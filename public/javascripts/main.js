// Get the modal
var modal = document.getElementById('myModal');
var btn = document.getElementById('create-account');
var span = document.getElementsByClassName('close')[0];

btn.onclick = function () {
    var newColor = 'lightblue';
    document.body.style.backgroundColor = newColor;
    modal.style.display = 'block';
};

span.onclick = function () {
    modal.style.display = 'none';
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

var dayDropdown = document.getElementById('day');
var monthDropdown = document.getElementById('month');
var yearDropdown = document.getElementById('year');
var currentYear = new Date().getFullYear();

for (var i = 1; i <= 31; i++) {
    var option = document.createElement('option');
    option.value = i;
    option.text = i;
    dayDropdown.add(option);
}

for (var i = currentYear; i >= currentYear - 100; i--) {
    var option = document.createElement('option');
    option.value = i;
    option.text = i;
    yearDropdown.add(option);
}
