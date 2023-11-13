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
        localStorage.setItem("id", result._id);
        window.location.assign("/account");
      } else {
        console.log("failure");
        appendAlert(
          "Username not available. Please create a unique username.",
          "danger"
        );
        $("#username").val("");
        $("#username").focus();
        $("#unique").css("display", "inline");
      }
    } catch (error) {
      console.error("error:", error);
    }

    $(".wrapper").hide();
  });
});

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
