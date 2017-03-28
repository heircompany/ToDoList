  //if li is red
  if($(this).css("color") === "rgb(255, 0, 0)") {
        //turn white
        $(this).css({
        color: "white",
        textDecoration: "none"
  });
} else {
          //turn red
          $(this).css({
            color: "red",
            textDecoration: "line-through"
          });
        }
});
