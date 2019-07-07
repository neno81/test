
window.addEventListener("load", function () {

  var tabLinks = document.getElementsByClassName("switch-tab__link");
  
  for (var i = 0; i < tabLinks.length; i++) {

    tabLinks[i].addEventListener("click", function () {

      var link = document.getElementsByClassName("switch-tab__link");
      Array.prototype.forEach.call(link, function (item) {
        item.classList.remove("active");
      });

      this.classList.add("active");

    });

  };

  var btn = document.querySelector(".btn");
  var message = document.querySelector(".error-message");

  btn.addEventListener("click", function () {
    var loginVal = document.getElementById('login-i').value;
    var passwordVal = document.getElementById('password-i').value;
    
  

    if (loginVal == "user" && passwordVal == "password") {
      // message.innerHTML = "Верно";
      if (!message.classList.contains('none')) {
        message.classList.add("none");
      }
      document.location.href = "panel.html";
    } else {
      message.classList.remove("none");
      message.innerHTML = statusOb["403"];
    }
  });

  var statusOb = {
    "403": "Логин или пароль указаны не верно.Попробуйте еще раз.",
    "200": "Authorization success"
  }
  console.log(statusOb["403"])

});


