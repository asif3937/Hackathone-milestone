var toggleButton = document.getElementById("togglle-Skills");
var Skills = document.getElementById("Skills");
toggleButton.addEventListener("click", function () {
    if (Skills.style.display === "none") {
        Skills.style.display = "block";
    }
    else {
        Skills.style.display = "none";
    }
});
