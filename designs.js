$(document).ready(function() {

  // Select color input
  const colorPicker = $('#colorPicker');
  // Select size input
  const inputHeight = $('#input_height');
  const inputWidth = $('#input_width');

  // When size is submitted by the user, call makeGrid()
  $('#sizePicker').on("submit", function(event) {
    event.preventDefault();
    makeGrid();
  });

  function makeGrid() {
    $('#pixel_canvas').empty();
    for (let i = 0; i < inputHeight.val(); i++) {
      $('#pixel_canvas').append('<tr id="tr_' + (i + 1) + '"></tr>');
      for (let j = 0; j < inputWidth.val(); j++) {
        $('#tr_' + (i + 1)).append('<td name="mainColor"></td>');
      }
    }

    // Change event - pixel background color
    $('td').on("click", changeColor);

  }

  function changeColor() {
    $(this).css("background-color", colorPicker.val());
  }

});
