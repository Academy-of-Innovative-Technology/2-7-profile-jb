

const profile = {
  bio: {
    first: "Son",
    last: "Goku",
    title: "Dragon Ball Z - Earth's Mightiest Protector",
    biography: "Son Goku is the main protagonist of the Dragon Ball franchise. Born and raised in the peaceful Mount Paozu countryside, Goku has grown into Earth's strongest warrior. Known for his pure heart, unmatched martial arts skills, and unique techniques like the Kamehameha, he continually pushes past his limits to protect his loved ones and face increasingly powerful threats. His cheerful nature and love for fighting strong opponents make him an unforgettable character in the anime world."
  },

  image: "https://static.wikia.nocookie.net/dragonball/images/b/ba/Goku_anime_profile.png/revision/latest?cb=20250723190513",
  contact: {
    email: "justme_goku@mountpaozu.com",
    phone: "1-800-456-7890",
    location: "Mount Paozu, Earth"
  },

  colors: {
    background: "#5f8af0",
    text: "#000000",
    accent: "#ff8c00"
  },

  social: [
    { icon: "fab fa-wikipedia-w", link: "https://en.wikipedia.org/wiki/Goku" },
    { icon: "fab fa-youtube", link: "https://www.youtube.com/results?search_query=dragon+ball+goku" },
    { icon: "fab fa-twitter", link: "https://twitter.com" }
  ],

  edu: {
    name: "Turtle Hermitage",
    major: "Master Roshi's Martial Arts Training",
    description: "Trained under the legendary Master Roshi to master ancient martial arts techniques and combat philosophy."
  },

  career: {
    company: "Z-Fighters",
    title: "Protector of Earth",
    role: "Defender of Earth from various supernatural threats using martial arts and energy-based techniques"
  },

  aboutText: "Son Goku is the central character who represents pure-hearted determination and constant growth. His journey from a simple child to Earth's strongest warrior showcases the power of training, friendship, and never giving up. With friends like Krillin, family including his wife Chi-Chi and sons Gohan and Goten, Goku faces increasingly powerful enemies while maintaining his joyful outlook on life.",

  skillsText: "Master of multiple combat techniques and energy manipulation abilities developed through years of rigorous training and battles.",

  skills: [
    { title: "Kamehameha", level: 95 },
    { title: "Spirit Bomb", level: 88 },
    { title: "Instant Transmission", level: 85 },
    { title: "Ultra Instinct", level: 92 },
    { title: "Super Saiyan Transformation", level: 90 }
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

document.querySelector("#about-text").innerText = profile.aboutText;

document.querySelector("#edu-heading").innerText = "#Education & Background";
document.querySelector("#edu-text").innerText =
  profile.edu.name + " — " + profile.edu.major + ". " + profile.edu.description;

document.querySelector("#career-text").innerText =
  profile.career.title + " at " + profile.career.company +
  " | " + profile.career.role;

document.querySelector("#skills-heading").innerText = "#Skills & Experience";

// Set page colors
document.body.style.backgroundColor = profile.colors.background;
document.body.style.color = profile.colors.text;

document.querySelectorAll(".text-primary").forEach(el => {
  el.style.color = profile.colors.accent;
});

// Social media links
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
    <div class="progress-text">
      <div class="row">
        <div class="col-6 fw-bold">${skill.title}</div>
        <div class="col-6 text-end">${skill.level}%</div>
      </div>
    </div>
    <div class="progress rounded-3 mb-4">
      <div class="progress-bar"
           role="progressbar"
           aria-valuenow="${skill.level}"
           aria-valuemin="0"
           aria-valuemax="100"
           style="width: 0%; background-color: ${profile.colors.accent};">
      </div>
    </div>
    `
  );
});


const skillsContainerRight = document.querySelector("#skills-container-right");
if (skillsContainerRight) {
  skillsContainerRight.innerHTML = "";
  profile.skills.forEach(skill => {
    skillsContainerRight.insertAdjacentHTML(
      "beforeend",
      `
      <div class="progress-text">
        <div class="row">
          <div class="col-6 fw-bold">${skill.title}</div>
          <div class="col-6 text-end">${skill.level}%</div>
        </div>
      </div>
      <div class="progress rounded-3 mb-4">
        <div class="progress-bar"
             role="progressbar"
             aria-valuenow="${skill.level}"
             aria-valuemin="0"
             aria-valuemax="100"
             style="width: 0%; background-color: ${profile.colors.accent};">
        </div>
      </div>
      `
    );
  });
}


setTimeout(() => {
  document.querySelectorAll(".progress-bar").forEach(bar => {
    const value = bar.getAttribute("aria-valuenow");
    bar.style.width = value + "%";
  });
}, 300);

