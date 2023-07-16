//API Used: http://newsapi.org/s/india-news-api

//<a href='https://www.glassdoor.co.in/index.htm'>powered by <img src='https://www.glassdoor.com/static/img/api/glassdoor_logo_80.png' title='Job Search' /></a>
const container = document.querySelector(".container");
const optionsContainer = document.querySelector(".options-container");
// "in" stands for India
const country = "in";
const options = [
  "Developer",
  "Project Engineer",
  "Buisness Analyst",
  "UI/UX Designer",
  "Technical Support",
  "Testing",
  "Profile",
  "Log Out"
  
];
//100 requests per day
let requestURL;
//Create cards from data
const generateUI = (articles) => {
  for (let item of articles) {
    let card = document.createElement("div");
    card.classList.add("news-card");
    card.innerHTML = `<div class="news-image-container">
    <img src="${item.urlToImage || "./newspaper.jpg"}" alt="" />
    </div>
    <div class="news-content">
      <div class="news-title">
        ${item.title}
      </div>
      <div class="news-description">
      ${item.description || item.content || ""}
      </div>
      <a href="${item.url}" target="_blank" class="view-button">Read More</a>
    </div>`;
    container.appendChild(card);
  }
};
//News API Call
const getNews = async () => {
  container.innerHTML = "";
  let response = await fetch(requestURL);
  if (!response.ok) {
    alert("Data unavailable at the moment. Please try again later");
    return false;
  }
  let data = await response.json();
  generateUI(data.articles);
};
//Category Selection
const selectCategory = (e, category) => {
  let options = document.querySelectorAll(".option");
  options.forEach((element) => {
    element.classList.remove("active");
  });
  requestURL=`https://www.glassdoor.co.in/index.htm`;
  e.target.classList.add("active");
  getNews();
};
//Options Buttons
const createOptions = () => {
  for (let i of options) {
    optionsContainer.innerHTML += `<button class="option ${
      i == "general" ? "active" : ""
    }" onclick="selectCategory(event,'${i}')">${i}</button>`;
  }
};
const init = () => {
  optionsContainer.innerHTML = "";
  getNews();
  createOptions();
};
window.onload = () => {
  requestURL = `https://www.glassdoor.co.in/index.htm`;
  init();
};