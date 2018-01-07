$(document).ready(function() {

  // Select color input
  const colorPicker = $('#colorPicker');
  // Select size input
  const inputHeight = $('#input_height');
  const inputWidth = $('#input_width');
  
  $(".alert").hide();

  // When size is submitted by the user, call makeGrid()
  $('#sizePicker').on("submit", function(event) {

    // Form validation
    if (inputWidth.val() > 50 || inputHeight.val() > 50) {
      event.preventDefault();
      $(".alert").show();
    } else {
      event.preventDefault();
      $(".alert").hide();
      makeGrid();
    }

  });

  function makeGrid() {

    $('#pixel_canvas').empty();
    for (let i = 0; i < inputHeight.val(); i++) {
      $('#pixel_canvas').append('<tr id="row_' + (i + 1) + '"></tr>');
      for (let j = 0; j < inputWidth.val(); j++) {
        $('#row_' + (i + 1)).append('<td name="col_' + (j + 1) + '"></td>');
      }
    }

    // Change event - pixel background color
    $('td').on("click", changeColor);

  }

  function changeColor() {
    $(this).css("background-color", colorPicker.val());
  }

});
