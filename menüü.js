function myFunction(e) {
    var elems = document.querySelectorAll(".active");
    [].forEach.call(elems, function (el) {
    el.classList.remove("active");
     });
     e.target.className = "active";
    var elems = document.querySelectorAll(".content");
    [].forEach.call(elems, function (el) {
    el.hidden = true;
    });
    document.getElementById(e.target.name).hidden = false
    }