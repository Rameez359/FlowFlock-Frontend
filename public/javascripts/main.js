  // Get the modal
  var modal = document.getElementById("myModal");
  
  // Get the button that opens the modal
  var btn = document.getElementById("create-account");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    var newColor = 'lightblue';
    
    // Change the background color of the body
    document.body.style.backgroundColor = newColor;
    modal.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  } 

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