// VARIABLES

const resultElement = document.getElementById("result");
const filterElement = document.getElementById("filter");

const items = [];
const url = "https://randomuser.me/api?results=50";

// FILTER USERS

const userFilter = (input) => {
  items.forEach((item) => {
    if (item.innerText.toLowerCase().includes(input.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
};

filterElement.addEventListener("input", (e) => userFilter(e.target.value));

// FETCH USERS FROM API

const getData = async () => {
  const response = await fetch(url);
  const { results } = await response.json();

  document.querySelector(".loading").style.display = "none";
  resultElement.innerHTML = "";

  results.forEach((result) => {
    const li = document.createElement("li");

    items.push(li);

    li.innerHTML = `
    <img src="${result.picture.large}" alt="${result.name.first}" />
    <div class="user__info">
        <h4>${result.name.first} ${result.name.last}</h4>
        <p>${result.location.city}, ${result.location.country}</p>
    </div>
    `;
    resultElement.appendChild(li);
  });
};

getData();
