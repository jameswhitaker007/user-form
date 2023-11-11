let alertPlaceholder;


$("document").ready(function () {
  alertPlaceholder = document.getElementById("alert-placeholder");
  console.log(alertPlaceholder);
  $("#form")[0].addEventListener("submit", async function (event) {
    console.log("#form");
    event.preventDefault();
    $(".wrapper").show();
    form.classList.add("was-validated");
    if (!form.checkValidity()) {
      event.stopPropagation();
      $(".wrapper").hide();
      return;
    }

    try {
      const response = await fetch("/addUser", {
        method: "POST",
        body: JSON.stringify({
          user_name: $("#username").val(),
          user_age: $("#age").val(),
          user_city: $("#city").val(),
          user_phone: $("#phone").val(),
          user_email: $("#email").val(),
        }),
        headers: {
          "content-type": "application/json; charset=UTF-8",
        },
      });

      const result = await response.json();
      console.log("Success:", result);
      if (result._id) {
        console.log("success");
        appendAlert("Account created successfully", "success");
      } else {
        console.log("failure");
        appendAlert("Account creation failed", "danger");
      }
    } catch (error) {
      console.error("error:", error);
    }

    /*
    fetch("/addUser", {
      method: "POST",
      body: JSON.stringify({
        user_name: $("#username").val(),
        user_age: $("#age").val(),
        user_city: $("#city").val(),
        user_phone: $("#phone").val(),
        user_email: $("#email").val(),
      }),
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((response) => response.json())
      .then((data) => console.log(data));
      */
    /*
    $.ajax({
      type: "POST",
      url: "/addUser",
      data: {
        user_name: $("#username").val(),
        user_age: $("#age").val(),
        user_city: $("#city").val(),
        user_phone: $("#phone").val(),
        user_email: $("#email").val(),
      },
      dataType: "application/json",
    })
      .done(function (data) {
        alertPlaceholder.empty();
        console.log(data);
        alert("Account created successfully", "success");
      })
      .fail(function (error) {
        console.log("We are back at main");
        //console.error(error);
        alertPlaceholder.empty();
        alert("Account creation failed", "danger");
      });
      */

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

/*
function alert(message, type) {
  console.log('appending');
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
*/

const appendAlert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
};
