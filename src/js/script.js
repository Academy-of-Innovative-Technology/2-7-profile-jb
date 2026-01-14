

var profile = {
  bio: {
    first: "son",
    last: "goku",
    title: "dragon ball",
    about: " i am son goku from plant earth. i like to fight strong people and eat a lot. mt best friend is krillin and i have a son named gohan. i love my family."
  },

  image: "https://upload.wikimedia.org/wikipedia/en/0/01/Goku_character.png",
  contact: {
    email: "justme_goku@mountpaozu.com",
    phone: "1-800-456-7890",
    location: "West Center,City, Earth"
  },

  colors: {
    background: "#5f8af0",
    text: "#000000ff",
    accent: "#62bac4"
  },

  social: [
    { icon: "fab fa-wikipedia-w", link: "https://en.wikipedia.org/wiki/Goku" },
    { icon: "fab fa-youtube", link: "https://www.youtube.com/results?search_query=goku+anime" },
    { icon: "fab fa-twitter", link: "https://twitter.com/Goku" }
  ],

  edu: {
    name: "turtle Hermitage",
    major: "Master Roshi's Martial Arts"
  },

  career: {
    company: "Z-fighters",
    title: "Protector of Earth",
    role: "Defends the Earth from various threats using martial arts and energy-based techniques"
  },

  skills: [
    { title: "kamehameha" , level: 95 },
    { title: "spirit Bomb", level: 88 },
    { title: "instant transmission", level: 80 }
  ]
};



document.querySelector("#profile-img").src = profile.image;

document.querySelector("#profile-name").innerText =
  profile.bio.first + " " + profile.bio.last;

document.querySelector("#profile-title").innerText = profile.bio.title;

document.querySelector("#profile-email").innerText = profile.contact.email;
document.querySelector("#profile-phone").innerText = profile.contact.phone;
document.querySelector("#profile-location").innerText = profile.contact.location;

document.querySelector("#about-heading").innerText =
  "#About " + profile.bio.first;

document.querySelector("#about-text").innerText = profile.bio.about;

document.querySelector("#edu-text").innerText =
  profile.edu.name + " — " + profile.edu.major;

document.querySelector("#career-text").innerText =
  profile.career.title + " at " + profile.career.company +
  " | " + profile.career.role;



document.body.style.backgroundColor = profile.colors.background;
document.body.style.color = profile.colors.text;

document.querySelectorAll(".text-primary").forEach(el => {
  el.style.color = profile.colors.accent;
});


const socialList = document.querySelector("#social-links");
socialList.innerHTML = "";

profile.social.forEach(item => {
  socialList.insertAdjacentHTML(
    "beforeend",
    `
    <li>
      <a href="${item.link}" target="_blank" class="rounded-3">
        <i class="${item.icon}"></i>
      </a>
    </li>
    `
  );
});



const skillsContainer = document.querySelector("#skills-container");
skillsContainer.innerHTML = "";

profile.skills.forEach(skill => {
  skillsContainer.insertAdjacentHTML(
    "beforeend",
    `
    <div class="mb-4">
      <div class="row">
        <div class="col-6 fw-bold">${skill.title}</div>
        <div class="col-6 text-end">${skill.level}%</div>
      </div>
      <div class="progress rounded-3">
        <div class="progress-bar"
             role="progressbar"
             value="${skill.level}"
             style="width: 0%; background:${profile.colors.accent}; transition: width 1.5s;">
        </div>
      </div>
    </div>
    `
  );
});


setTimeout(() => {
  document.querySelectorAll(".progress-bar").forEach(bar => {
    bar.style.width = bar.getAttribute("value") + "%";
  });
}, 300);
