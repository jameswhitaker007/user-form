let alertPlaceholder;
let username;
let userAge;
let userCity;
let userPhone;
let userEmail;

$("document").ready(async function () {
    let id = localStorage.getItem("id");
    if(id == undefined || id == "") {
        window.location.assign('/');
    }

  alertPlaceholder = document.getElementById("alert-placeholder");
  username = $("#user-name");
  console.log(username);
  userAge = $("#user-age");
  userCity = $("#user-city");
  userPhone = $("#user-phone");
  userEmail = $("#user-email");

  try {
    const response = await fetch("/getUser", {
      method: "POST",
      body: JSON.stringify({
        id: id,
      }),
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
    });

    const result = await response.json();
    console.log("Success:", result);
    if (result._id) {
      console.log("success");
      appendAlert("Account information retrieved", "success");
      buildUserData(result);
    } else {
      console.log("failure");
      appendAlert("Error retrieving account information", "danger");
    }
  } catch (error) {
    console.error("error:", error);
  }
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

const buildUserData = (result) => {
  console.log(result.user_name);
  username.append(result.user_name);
  userAge.append(result.user_age);
  userCity.append(result.user_city);
  userPhone.append(result.user_phone);
  userEmail.append(result.user_email);
};
