//Home-Page
var typed = new Typed("#element", {
  strings: ["Programmer", "Web Developer", "Technophile"],
  loop: true,
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 500,
});
// Side-Menu
var sidemenu = document.getElementById("sidemenu");
function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}

// About-Tabs
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

//Skills
async function fetchData(type = "skills") {
  let response;
  type === "skills"
    ? (response = await fetch("skills.json"))
    : (response = await fetch("./projects/projects.json"));
  const data = await response.json();
  return data;
}

function showSkills(skills) {
  let skillsContainer = document.getElementById("skillsContainer");
  let skillHTML = "";
  skills.forEach((skill) => {
    skillHTML += `
      <div class="bar">
            <div class="info">
              <img src=${skill.icon} alt="skill" class="skill_logo"/>
              <span>${skill.name}</span>
            </div>
          </div>`;
  });
  skillsContainer.innerHTML = skillHTML;
}
fetchData().then((data) => {
  showSkills(data);
});

// Scroll Projects
let scrollContainer = document.querySelector(".work-list");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
  scrollContainer.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 500;
});

backBtn.addEventListener("click", () => {
  scrollContainer.scrollLeft -= 500;
});

// Contact-Us
// const scriptURL =
//   "https://script.google.com/macros/s/AKfycbzR-wwEXAy8S2kq0Fqyjgovx5V2RLi0dRnOsAKOGIGqT7yEhUgW2j20R-CQ1wvO1ai5/exec";
// const form = document.forms["submit-to-google-sheet"];
// const msg = document.getElementById("msg");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   fetch(scriptURL, { method: "POST", body: new FormData(form) })
//     .then((response) => {
//       msg.innerHTML = "Message sent successfully";
//       setTimeout(function () {
//         msg.innerHTML = "";
//       }, 5000);
//       form.reset();
//     })
//     .catch((error) => console.error("Error!", error.message));
// });
