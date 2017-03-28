//check out specific todos by clicking
//on --> focus on one element inside of parent
//on --> target future added elements
$("ul").on("click", "li", function()  {
  $(this).toggleClass("completed");
});

//click on x to delete ToDo
//event.stopPropagation = jQuery method, no bubbling up of Listeners
$("ul").on("click", "span", function(event)   {
  $(this).parent().fadeOut(500,function() {
    $(this).remove();
  });
  event.stopPropagation();
});

// event.which method to select a certain key. 13 is Enter key.
$("input[type='text']").keypress(function(event)  {
  if(event.which === 13) {
    //grabbing new To Do text
    var addToDo =  $(this).val();
        $(this).val("");
    //create new li and add to ul using jQuery append method
    $("ul").append("<li><span class='trashit'><i class='fa fa-trash'></i></span> " + addToDo + "</li>")
  }
});

$("fa-plus").click(function()  {
  $("input[type='text']").fadeToggle();
});
