$(document).ready(function() {
  $("#formOne").submit(function() {

        var groceries = [$("#item1").val(), $("#item2").val(), $("#item3").val(), $("#item4").val()];

        groceries.sort();
        groceriesCap = groceries.map(function(grocery){
          return grocery.toUpperCase();
        });

        $("li").hide();
        groceriesCap.forEach(function(grocery) {
            $("#list").append("<li>" + grocery + "</li>");
        });

        $("#story").show();
    event.preventDefault();
  });
});
