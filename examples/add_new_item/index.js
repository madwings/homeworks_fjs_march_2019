require('jsrender')($);

$(document).ready(function() {
  let $newItemButton = $('#newItemButton');
  let $newItemForm = $('#newItemForm');
  let $textInput = $('input:text');
  
  //$newItemButton.show();
  //$newItemForm.hide();

  $('#showForm').on('click', function(){
    $newItemButton.hide();
    $newItemForm.show();
  });

  $newItemForm.on('submit', function(e){
    e.preventDefault();
	let newText = {
		text: $textInput.val(),
	};
	let html = $("#liTemplate").render(newText);
    $('li:last').after(html);
    $newItemForm.hide();
    $newItemButton.show();
    $textInput.val('');
  });
});
