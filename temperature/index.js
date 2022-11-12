//api key....
const apiKey = "20f2ed1c3cc9fe00598ca02409e98003";

document.getElementById("searchBtn").addEventListener("click", function () {
  const city = document.getElementById("inputBtn").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => findOutLocation(data))
    .catch((e) => {
      console.log(e);
    });
});
function findOutLocation(data) {
  console.log(data);

  city = document.getElementById("inputBtn").value;

  const location = document.getElementById("location");
  location.innerText = city;
  document.getElementById("inputBtn").value = "";

  const temp = document.getElementById("temp");
  temp.innerHTML ="temp:"+data["main"]["temp"];

  const latitude = document.getElementById("latitude");
  latitude.innerHTML = "lat:" + data["coord"]["lat"];

  const longitude = document.getElementById("longitude");
  longitude.innerHTML = "lon:" + data["coord"]["lon"];
}
findOutLocation(data);
