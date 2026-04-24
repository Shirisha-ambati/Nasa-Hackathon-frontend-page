const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('toggle');
});
document.querySelector('.btn').addEventListener('click', function(e){
  e.preventDefault();
  const target = document.querySelector('#weather'); // id of your weather section
  target.scrollIntoView({ behavior: 'smooth' });
});
document.getElementById("weatherForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const city = document.getElementById("city").value.trim();
  const datetime = document.getElementById("datetime").value;
  const activity = document.getElementById("activity").value;
  const resultBox = document.getElementById("result");

  if (!city || !datetime || !activity) {
    alert("Please fill in all fields!");
    return;
  }

  // Simulated weather results (you can replace with API)
  const conditions = [
    "very hot ☀️",
    "very cold ❄️",
    "very windy 🌬️",
    "very wet 🌧️",
    "comfortable 🌤️"
  ];
  const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];

  resultBox.style.display = "block";
  resultBox.innerHTML = `
    <strong>Weather Report for ${city}</strong><br>
    Date & Time: ${new Date(datetime).toLocaleString()}<br>
    Activity: ${activity.replace("_", " ")}<br><br>
    <em>Expected condition: ${randomCondition}</em>
  `;
});
