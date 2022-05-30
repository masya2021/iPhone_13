new Choices("#model", {
  searchEnabled: "false",
  itemSelectText: "",
});

new Choices("#color", {
  searchEnabled: "false",
  itemSelectText: "",
});

$("#form__order").on("submit", function (event) {
  event.preventDefault();

  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "post",
    dataType: "html",
    data: $("#form__order").serialize(), // serialize  приводит данные из формы нашей в JSon
    success: function (data) {
      console.log(data);
      $("#form__order").html("Thanks, your order successfully send");
      $(".form__submit").hide();
    },
  });
});
