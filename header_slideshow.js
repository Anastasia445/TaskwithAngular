// show slides
let slideIndex = 0;
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000);
}
// regestration
let regestration = [];
loadUserRegestration();
function reg() {
  event.preventDefault();
  let userName = document.getElementById("login");
  let userPassword = document.getElementById("password");
  if (userName.value != "" && userPassword.value != "") {
    let userRegestration = {
      name: userName.value,
      password: userPassword.value,
    };

    userName.value = "";
    userPassword.value = "";

    regestration.push(userRegestration);
    saveUserRegestration();
    alert("Ваша учётная запись создана. Добро пожаловать. ");
    window.location.href = "mainpage.html"
     } else alert("Вы не ввели логин и(или) пароль");
}

function saveUserRegestration() {
  localStorage.setItem("userRegestration", JSON.stringify(regestration));
}

function loadUserRegestration() {
  if (localStorage.getItem("userRegestration"))
    regestration = JSON.parse(localStorage.getItem("userRegestration"));
}
// comments
let comments = [];
//loadComments();
function addcomments() {
  event.preventDefault();
  let commentName = document.getElementById("comment-name");
  let commentBody = document.getElementById("comment-body");

  let comment = {
    name: commentName.value,
    body: commentBody.value,
    time: Math.floor(Date.now() / 1000),
  };

  commentName.value = "";
  commentBody.value = "";

  comments.push(comment);
  saveComments();
  showComments();
}
function exit() {}
function saveComments() {
  localStorage.setItem("comments", JSON.stringify(comments));
}
/*function loadComments() {
  if (localStorage.getItem("comments"))
    comments = JSON.parse(localStorage.getItem("comments"));
  showComments();
}*/
function showComments() {
  let commentField = document.getElementById("comment-field");
  let out = "";
  comments.forEach(function (item) {
    out += `<p class="outputCommemmentDate"><em>${timeConverter(
      item.time
    )}</em></p>`;
    out += `<p class="outputCommemmentName" >${item.name}</p>`;
    out += `<p class="outputCommemment" >${item.body}</p>`;
  });
  commentField.innerHTML = out;
}
function timeConverter() {
  var a = new Date();
  var months = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var time = date + " " + month + " " + year;
  return time;
}
// filter products
filterProducts("all");
function filterProducts(c) {
  let x, i;
  x = document.getElementsByClassName("filterProducts");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
  let btnContainer = document.getElementById("myBtnContainer");
  let btns = btnContainer.getElementsByClassName("btn");
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      let current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
}
function AddClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}
function RemoveClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
// basket
function deleteProductBasket(product_name) {
  if (document.getElementById(product_name)) {
    let productName = document.getElementById(product_name);
    productName.style.display = "none";
  }
}
