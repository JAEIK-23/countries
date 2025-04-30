let getInfomation = document.querySelector(".getFlag");
let country = document.querySelector(".countries").value;


getInfomation.addEventListener("click", function() {

    fetch("https://restcountries.com/v3.1/name/" + name + "?fullText=true")
    .then((response) => response.json())
    .then((data) => {
        var capital = data[0].capital[0];
      var flag = data[0].flags.png;

      info.innerHTML = "수도: " + capital;
      info.innerHTML += "<img src='" + flag + "'>";

    });

})