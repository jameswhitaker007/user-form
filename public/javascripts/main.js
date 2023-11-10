const alertPlaceholder = $("#alert-placeholder");

$("document").ready(function () {
  $("#form")[0].addEventListener("submit", function (event) {
    console.log("#form");
    event.preventDefault();
    $(".wrapper").show();
    form.classList.add("was-validated");
    if (!form.checkValidity()) {
      event.stopPropagation();
      $(".wrapper").hide();
      return;
    }

    $.ajax({
        type: "POST",
        url: '/addUser',
        data: {
            user_name: $('#username').val(),
            user_age: $('#age').val(),
            user_city: $('#city').val(),
            user_phone: $('#phone').val(),
            user_email: $('#email').val()
        },
        dataType: "application/json"
    })
    .done(function(data) {
        alertPlaceholder.empty();
        alert("Account created successfully", "success");
    })
    .fail(function (error) {
        console.log('We are back at main');
        //console.error(error);
        alertPlaceholder.empty();
        alert("Account creation failed", "danger");
    })
    $(".wrapper").hide();

    /*
    $.post("/addUser", {
      user_name: $("#username").val(),
      user_age: $("#age").val(),
      user_city: $("#city").val(),
      user_phone: $("#phone"),
      user_email: $("#email"),
    })
      .done(function (data) {
        alertPlaceholder.empty();
        alert("Account created successfully", "success");
      })
      .fail(function (error) {
        console.error(error.responseJSON.message);
        alertPlaceholder.empty();
        alert("Account creation failed", "danger");
      });
    */
    
  });
});

function alert(message, type) {
  const wrapper = $("<div></div");
  wrapper.html(
    [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      "</div>",
    ].join("")
  );

  alertPlaceholder.append(wrapper);
}
