
$(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var newdevoured = $(this).data("newdevoured");
  
      var newdevouredState = {
        devoured: newdevoured
      };
  
      // Send PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newdevouredState
      }).then(
        function() {
          console.log("changed to", newdevoured);
          // Reload page for updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      
      event.preventDefault();
      //validator  
      if ($("#Burg").val().trim()=== "" || $("#Burg").val().trim()=== " " || $("#Burg").val().trim()== null) {
        alert("Please Enter a valid Burger name")  
      } else {
      var newBurger = {
        burger_name: $("#Burg").val().trim(),
      };
      // Send POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload page for updated list
          location.reload();
        }
      )};
    });
    
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload page for updated list
          location.reload();
        }
      );
    });
  });